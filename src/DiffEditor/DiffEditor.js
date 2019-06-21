import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import { monaco, noop } from '../utils';
import { useMount, useUpdate } from '../utils/hooks';

import config from '../config';
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
  const [isLoading, setIsLoading] = useState(true);
  const editorRef = useRef();
  const monacoRef = useRef();
  const containerRef = useRef();

  useMount(_ => {
    monaco
      .init()
      .then(monaco => (monacoRef.current = monaco) && createEditor());

    return removeEditor;
  });

  useUpdate(_ => {
    editorRef.current.getModel().modified.setValue(modified);
  }, [modified]);

  useUpdate(_ => {
    editorRef.current.getModel().original.setValue(original);
  }, [original]);

  useUpdate(_ => {
    const { original, modified } = editorRef.current.getModel();

    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage]);

  useUpdate(_ => {
    editorRef.current.setScrollPosition({ scrollTop: line });
  }, [line]);

  useUpdate(_ => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme]);

  useUpdate(_ => {
    editorRef.current.updateOptions(options);
  }, [options]);

  function createEditor() {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options,
    });

    setModels();

    const { original, modified } = editorRef.current.getModel();
    editorDidMount(
      modified.getValue.bind(editorRef.current),
      original.getValue.bind(editorRef.current),
      editorRef.current,
    );

    monacoRef.current.editor.defineTheme('dark', config.theme['night-dark']);
    monacoRef.current.editor.setTheme(theme);

    setIsLoading(false);
  }

  function setModels() {
    const originalModel = monacoRef.current.editor
      .createModel(original, originalLanguage || language);

    const modifiedModel = monacoRef.current.editor
      .createModel(modified, modifiedLanguage || language);

    editorRef.current.setModel({ original: originalModel, modified: modifiedModel });
  }

  function removeEditor() {
    editorRef.current.dispose();
  }

  return (
    <section style={{ ...styles.wrapper, width, height }}>
      {isLoading && <Loading content={loading} />}
      <div
        ref={containerRef}
        style={{ ...styles.fullWidth, ...(isLoading && styles.hide) }}
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
