import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Editor from '..';
import { noop } from '../utils';

function ControlledEditor({ value, onChange, editorDidMount, ...props }) {
  const editor = useRef(null);
  const listener = useRef(null);

  const handleEditorModelChange = useCallback(event => {
    const editorValue = editor.current.getValue();

    if (value !== editorValue) {
      const directChange = onChange(event, editorValue);

      if (typeof directChange === 'string' && editorValue !== directChange) {
        editor.current.setValue(directChange);
      }
    }
  }, [value, onChange]);

  const attachChangeEventListener = useCallback(() => {
    listener.current = editor.current?.onDidChangeModelContent(handleEditorModelChange);
  }, [handleEditorModelChange]);

  useEffect(() => {
    attachChangeEventListener();
    return () => listener.current?.dispose();
  }, [attachChangeEventListener]);

  const handleEditorDidMount = useCallback((getValue, _editor) => {
    editor.current = _editor;
    attachChangeEventListener();

    editorDidMount(getValue, _editor);
  }, [attachChangeEventListener, editorDidMount]);

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
