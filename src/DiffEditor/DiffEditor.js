import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import MonacoContainer from '../MonacoContainer';

import { monaco, noop } from '../utils';
import { useMount, useUpdate } from '../hooks';

import themes from '../config/themes';

const DiffEditor =
  ({
    original,
    modified,
    language,
    originalLanguage,
    modifiedLanguage,
    editorDidMount,
    theme,
    width,
    height,
    loading,
    options,
    className,
    wrapperClassName,
  }) =>
{
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const editorRef = useRef();
  const monacoRef = useRef();
  const containerRef = useRef();

  useMount(() => {
    const cancelable = monaco.init();

    cancelable
      .then(monaco => ((monacoRef.current = monaco) && setIsMonacoMounting(false)))
      .catch(error => error?.type !== 'cancelation' &&
        console.error('Monaco initialization: error:', error));

    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });

  useUpdate(() => {
    editorRef.current.getModel().modified.setValue(modified);
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
    const originalModel = monacoRef.current.editor
      .createModel(original, originalLanguage || language);

    const modifiedModel = monacoRef.current.editor
      .createModel(modified, modifiedLanguage || language);

    editorRef.current.setModel({ original: originalModel, modified: modifiedModel });
  }, [language, modified, modifiedLanguage, original, originalLanguage]);

  const createEditor = useCallback(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options,
    });

    setModels();

    const { original, modified } = editorRef.current.getModel();
    editorDidMount(
      modified.getValue.bind(modified),
      original.getValue.bind(original),
      editorRef.current,
    );

    monacoRef.current.editor.defineTheme('dark', themes['night-dark']);
    monacoRef.current.editor.setTheme(theme);

    setIsEditorReady(true);
  }, [editorDidMount, options, theme, setModels]);

  useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  const disposeEditor = () => editorRef.current.dispose();

  return <MonacoContainer
    width={width}
    height={height}
    isEditorReady={isEditorReady}
    loading={loading}
    _ref={containerRef}
    className={className}
    wrapperClassName={wrapperClassName}
  />;
};

DiffEditor.propTypes = {
  original: PropTypes.string,
  modified: PropTypes.string,
  language: PropTypes.string,
  originalLanguage: PropTypes.string,
  modifiedLanguage: PropTypes.string,
  editorDidMount: PropTypes.func,
  theme: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

DiffEditor.defaultProps = {
  editorDidMount: noop,
  theme: 'light',
  width: '100%',
  height: '100%',
  loading: 'Loading...',
  options: {},
};

export default DiffEditor;
