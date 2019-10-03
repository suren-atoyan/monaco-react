import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import { monaco, noop } from '../utils';
import { useMount, useUpdate } from '../utils/hooks';

import themes from '../config/themes';
import styles from './styles';

const DiffEditor =
  ({
    original,
    modified,
    language,
    originalLanguage,
    modifiedLanguage,
    editorDidMount,
    theme,
    line,
    width,
    height,
    loading,
    options,
  }) =>
{
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const editorRef = useRef();
  const monacoRef = useRef();
  const containerRef = useRef();

  useMount(_ => {
    monaco
      .init()
      .then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false))
      .catch(error => console.error('An error occurred during initialization of Monaco: ', error));

    return removeEditor;
  });

  useUpdate(_ => {
    editorRef.current.getModel().modified.setValue(modified);
  }, [modified], isEditorReady);

  useUpdate(_ => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);

  useUpdate(_ => {
    const { original, modified } = editorRef.current.getModel();

    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);

  useUpdate(_ => {
    editorRef.current.setScrollPosition({ scrollTop: line });
  }, [line], isEditorReady);

  useUpdate(_ => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);

  useUpdate(_ => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);

  const setModels = useCallback(_ => {
    const originalModel = monacoRef.current.editor
      .createModel(original, originalLanguage || language);

    const modifiedModel = monacoRef.current.editor
      .createModel(modified, modifiedLanguage || language);

    editorRef.current.setModel({ original: originalModel, modified: modifiedModel });
  }, [language, modified, modifiedLanguage, original, originalLanguage]);

  const createEditor = useCallback(_ => {
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

  useEffect(_ => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  const removeEditor = _ => editorRef.current && editorRef.current.dispose();

  return (
    <section style={{ ...styles.wrapper, width, height }}>
      {!isEditorReady && <Loading content={loading} />}
      <div
        ref={containerRef}
        style={{ ...styles.fullWidth, ...(!isEditorReady && styles.hide) }}
      />
    </section>
  );
};

DiffEditor.propTypes = {
  original: PropTypes.string,
  modified: PropTypes.string,
  language: PropTypes.string,
  originalLanguage: PropTypes.string,
  modifiedLanguage: PropTypes.string,
  editorDidMount: PropTypes.func,
  theme: PropTypes.string,
  line: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
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
