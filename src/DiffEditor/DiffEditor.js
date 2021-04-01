import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import loader from '@monaco-editor/loader';

import MonacoContainer from '../MonacoContainer';
import useMount from '../hooks/useMount';
import useUpdate from '../hooks/useUpdate';
import { noop } from '../utils';

function DiffEditor ({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,
  /* === */
  originalModelPath,
  modifiedModelPath,
  theme,
  loading,
  options,
  /* === */
  height,
  width,
  className,
  wrapperClassName,
  /* === */
  beforeMount,
  onMount,
}) {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const containerRef = useRef(null);
  const onMountRef = useRef(onMount);
  const beforeMountRef = useRef(beforeMount);

  useMount(() => {
    const cancelable = loader.init();

    cancelable
      .then(monaco => ((monacoRef.current = monaco) && setIsMonacoMounting(false)))
      .catch(error => error?.type !== 'cancelation' &&
        console.error('Monaco initialization: error:', error));

    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });

  useUpdate(() => {
    const modifiedEditor = editorRef.current.getModifiedEditor();
    if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      modifiedEditor.setValue(modified);
    } else {
      if (modified !== modifiedEditor.getValue()) {
        modifiedEditor.executeEdits('', [{
          range: modifiedEditor.getModel().getFullModelRange(),
          text: modified,
          forceMoveMarkers: true,
        }]);

        modifiedEditor.pushUndoStop();
      }
    }
  }, [modified], isEditorReady);

  useUpdate(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);

  useUpdate(() => {
    const { original, modified } = editorRef.current.getModel();

    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);

  useUpdate(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);

  useUpdate(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);

  const setModels = useCallback(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = monacoRef.current.editor
      .createModel(
        original,
        originalLanguage || language,
        originalModelPath && monacoRef.current.Uri.parse(originalModelPath),
      );

    const modifiedModel = monacoRef.current.editor
      .createModel(
        modified,
        modifiedLanguage || language,
        modifiedModelPath && monacoRef.current.Uri.parse(modifiedModelPath),
      );

    editorRef.current.setModel({ original: originalModel, modified: modifiedModel });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);

  const createEditor = useCallback(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options,
    });

    setModels();

    monacoRef.current.editor.setTheme(theme);

    setIsEditorReady(true);
  }, [options, theme, setModels]);

  useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(
        editorRef.current,
        monacoRef.current,
      );
    }
  }, [isEditorReady]);

  useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  const disposeEditor = () => {
    const models = editorRef.current.getModel();
    models.original?.dispose();
    models.modified?.dispose();
    editorRef.current.dispose();
  }

  return (
    <MonacoContainer
      width={width}
      height={height}
      isEditorReady={isEditorReady}
      loading={loading}
      _ref={containerRef}
      className={className}
      wrapperClassName={wrapperClassName}
    />
  );
}

DiffEditor.propTypes = {
  original: PropTypes.string,
  modified: PropTypes.string,
  language: PropTypes.string,
  originalLanguage: PropTypes.string,
  modifiedLanguage: PropTypes.string,
  /* === */
  originalModelPath: PropTypes.string,
  modifiedModelPath: PropTypes.string,
  theme: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  /* === */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  /* === */
  beforeMount: PropTypes.func,
  onMount: PropTypes.func,
};

DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  /* === */
  width: '100%',
  height: '100%',
  /* === */
  beforeMount: noop,
  onMount: noop,
};

export default DiffEditor;
