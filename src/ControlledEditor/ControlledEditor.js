import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Editor from '..';
import { noop } from '../utils';

function ControlledEditor({ value, onChange, editorDidMount, ...props }) {
  const editor = useRef(null);
  const listener = useRef(null);
  const previousValue = useRef(value);

  const handleEditorModelChange = useCallback(event => {
    const currentValue = editor.current.getValue();

    if (currentValue !== previousValue.current) {
      previousValue.current = currentValue;
      const value = onChange(event, currentValue);

      if (typeof value === 'string' && currentValue !== value) {
        editor.current.setValue(value);
      }
    }
  }, [onChange]);

  const attachChangeEventListener = useCallback(() => {
    listener.current = editor.current?.onDidChangeModelContent(handleEditorModelChange);
  }, [handleEditorModelChange]);

  useEffect(() => {
    attachChangeEventListener();
    return () => listener.current?.dispose();
  }, [attachChangeEventListener]);

  function handleEditorDidMount(getValue, _editor) {
    editor.current = _editor;
    attachChangeEventListener();

    editorDidMount(getValue, _editor);
  }

  return (
    <Editor
      value={value}
      editorDidMount={handleEditorDidMount}
      _isControlledMode={true}
      {...props}
    />
  );
}

ControlledEditor.propTypes = {
  value: PropTypes.string,
  editorDidMount: PropTypes.func,
  onChange: PropTypes.func,
};

ControlledEditor.defaultProps = {
  editorDidMount: noop,
  onChange: noop,
};

export default ControlledEditor;
