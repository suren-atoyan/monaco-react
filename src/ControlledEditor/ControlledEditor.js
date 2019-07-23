import React from 'react';
import PropTypes from 'prop-types';

import Editor from '..';
import { noop } from '../utils';

const ControlledEditor = ({ value, onChange, editorDidMount, ...props }) => {
  const handleEditorDidMount = (getValue, editor) => {
    editor.onDidChangeModelContent(ev => {
      const currentValue = editor.getValue();

      const value = onChange(ev, currentValue);

      if (typeof value === 'string') {
        if (currentValue !== value) {
          editor.setValue(value);
        }
      }
    });

    editorDidMount(getValue, editor);
  };

  return <Editor
    value={value}
    editorDidMount={handleEditorDidMount}
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
