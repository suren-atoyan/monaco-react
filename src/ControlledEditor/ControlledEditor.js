import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Editor from '..';
import { noop } from '../utils';

const ControlledEditor = ({ value, onChange, editorDidMount, ...props }) => {
  const previousValue = useRef(value);

  const handleEditorDidMount = (getValue, editor) => {
    editor.onDidChangeModelContent(ev => {
      const currentValue = editor.getValue();

      if (currentValue !== previousValue.current) {
        previousValue.current = currentValue;
        const value = onChange(ev, currentValue);

        if (typeof value === 'string' && currentValue !== value) {
          editor.setValue(value);
        }
      }
    });

    editorDidMount(getValue, editor);
  };

  return <Editor
    value={value}
    editorDidMount={handleEditorDidMount}
    _isControlledMode={true}
    {...props}
  />
};

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
