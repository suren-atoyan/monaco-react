import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Loading from '../Loading';

import { monaco } from '../utils';
import { useMount, useUpdate } from '../utils/hooks';

import config from '../config';

import classNames from 'classnames';

const wrapperStyles = {
  display: 'flex',
  position: 'relative',
};

const Editor =
  ({ value, language, theme, options, editorDidMount, line, loading }) =>
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

    editorDidMount &&
    editorDidMount(editorRef.current.getValue.bind(editorRef.current), editorRef.current);

    monacoRef.current.editor.defineTheme('dark', config.theme['night-dark']);
    monacoRef.current.editor.setTheme(theme);

    setIsLoading(false);
  }

  function removeEditor() {
    editorRef.current.dispose();
  }

  return (
    <section className='full-size' style={wrapperStyles}>
      {isLoading && <Loading content={loading} />}
      <div
        ref={containerRef}
        className="full-size"
      />
    </section>
  );
};

Editor.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string,
  options: PropTypes.object,
  editorDidMount: PropTypes.func,
  theme: PropTypes.string,
  line: PropTypes.number,
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Editor.defaultProps = {
  language: 'javascript',
  value: '',
  options: {},
  editorDidMount: _ => {},
  loading: 'Loading...',
};

export default Editor;
