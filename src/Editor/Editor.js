import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import MonacoContainer from '../MonacoContainer';

import { monaco, noop } from '../utils';
import { useMount, useUpdate } from '../utils/hooks';

import themes from '../config/themes';

const Editor =
  ({ value, language, editorDidMount, theme, line, width, height, loading, options, overrideServices, _isControlledMode }) =>
{
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const editorRef = useRef();
  const monacoRef = useRef();
  const containerRef = useRef();

  useMount(_ => {
    const cancelable = monaco.init();

    cancelable
      .then(monaco => ((monacoRef.current = monaco) && setIsMonacoMounting(false)))
      .catch(error => console.error('An error occurred during initialization of Monaco:', error));

    return _ => editorRef.current ? disposeEditor() : cancelable.cancel();
  });

  useUpdate(_ => {
    if (options.readOnly) {
      editorRef.current.setValue(value);
    } else {
      editorRef.current.executeEdits('', [{
        range: editorRef.current.getModel().getFullModelRange(),
        text: value,
      }]);

      if (_isControlledMode) {
        const model = editorRef.current.getModel();

        model.forceTokenization(model.getLineCount());
      }

      editorRef.current.pushUndoStop();
    }
  }, [value], isEditorReady);

  useUpdate(_ => {
    // set last value by .setValue method before changing the language
    editorRef.current.setValue(value);
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);

  useUpdate(_ => {
    editorRef.current.setScrollPosition({ scrollTop: line });
  }, [line], isEditorReady);

  useUpdate(_ => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);

  useUpdate(_ => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);

  const createEditor = useCallback(_ => {
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      value,
      language,
      automaticLayout: true,
      ...options,
    }, overrideServices);

    editorDidMount(editorRef.current.getValue.bind(editorRef.current), editorRef.current);

    monacoRef.current.editor.defineTheme('dark', themes['night-dark']);
    monacoRef.current.editor.setTheme(theme);

    setIsEditorReady(true);
  }, [editorDidMount, language, options, overrideServices, theme, value]);

  useEffect(_ => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  const disposeEditor = _ => editorRef.current.dispose();

  return <MonacoContainer
    width={width}
    height={height}
    isEditorReady={isEditorReady}
    loading={loading}
    _ref={containerRef}
  />;
};

Editor.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string,
  editorDidMount: PropTypes.func,
  theme: PropTypes.string,
  line: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  options: PropTypes.object,
  overrideServices: PropTypes.object,
  _isControlledMode: PropTypes.bool,
};

Editor.defaultProps = {
  editorDidMount: noop,
  theme: 'light',
  width: '100%',
  height: '100%',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  _isControlledMode: false,
};

export default Editor;
