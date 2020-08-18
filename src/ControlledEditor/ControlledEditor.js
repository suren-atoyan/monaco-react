import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Editor from '..';
import { noop } from '../utils';

function ControlledEditor({ value: providedValue, onChange, editorDidMount, ...props }) {
  const editor = useRef(null);
  const listener = useRef(null);
  const value = useRef(providedValue);

  // to avoid unnecessary updates in `handleEditorModelChange`
  // (that depends on the `current value` and will trigger to update `attachChangeEventListener`,
  // thus, the listener will be disposed and attached again for every value change)
  // the current value is stored in ref (useRef) instead of being a dependency of `handleEditorModelChange`
  value.current = providedValue;

  const handleEditorModelChange = useCallback(event => {
    const editorValue = editor.current.getValue();

    if (value.current !== editorValue) {
      const directChange = onChange(event, editorValue);

      if (typeof directChange === 'string' && editorValue !== directChange) {
        editor.current.setValue(directChange);
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

  const handleEditorDidMount = useCallback((getValue, _editor) => {
    editor.current = _editor;
    attachChangeEventListener();

    editorDidMount(getValue, _editor);
  }, [attachChangeEventListener, editorDidMount]);

  return (
    <Editor
      value={providedValue}
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
