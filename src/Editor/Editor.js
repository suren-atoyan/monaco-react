import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import { monaco, noop } from '../utils';
import { useMount, useUpdate } from '../utils/hooks';

import config from '../config';
import styles from './styles';

const Editor =
  ({ value, language, theme, editorDidMount, line, loading, width, height, options }) =>
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
    editorRef.current.setValue(value);
  }, [value]);

  useUpdate(_ => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language]);

  useUpdate(_ => {
    editorRef.current.setScrollPosition({ scrollTop: line });
  }, [line]);

  useUpdate(_ => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme]);

  function createEditor() {
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      value,
      language,
      automaticLayout: true,
      ...options,
    });

    editorDidMount(editorRef.current.getValue.bind(editorRef.current), editorRef.current);

    monacoRef.current.editor.defineTheme('dark', config.theme['night-dark']);
    monacoRef.current.editor.setTheme(theme);

    setIsLoading(false);
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

Editor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.string,
  theme: PropTypes.string,
  editorDidMount: PropTypes.func,
  language: PropTypes.string,
  line: PropTypes.number,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
};

Editor.defaultProps = {
  width: '100%',
  height: '100%',
  value: '',
  theme: 'light',
  editorDidMount: noop,
  loading: 'Loading...',
  options: {},
};

export default Editor;
