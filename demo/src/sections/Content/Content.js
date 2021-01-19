import React from 'react';

import Paper from '@material-ui/core/Paper';

import Editor from 'sections/Editor';
import DiffEditor from 'sections/DiffEditor';
import { useStore } from 'store';

import classNames from 'classnames';
import useStyles from './useStyles';

const Content = _ => {
  const classes = useStyles();
  const { state: { editorMode } } = useStore();

  return (
    <Paper elevation={0} square={true} className={classNames('full-size', classes.root)}>
      {
        editorMode === 'editor'
          ? <Editor />
          : <DiffEditor />
      }
    </Paper>
  );
}

export default Content;
