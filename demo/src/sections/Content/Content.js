import React from 'react';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Editor from 'sections/Editor';
import DiffEditor from 'sections/DiffEditor';

import classNames from 'classnames';
import useStyles from './useStyles';

const Content = _ => {
  const classes = useStyles();

  return (
    <Paper elevation={0} square={true} className={classNames('full-size', classes.root)}>
      <div className={classes.editor}>
        <Typography variant="h4" className={classes.title}>Editor</Typography>
        <Divider />
        <Editor />
      </div>
      <div className={classes.diffEditor}>
        <Typography variant="h4" className={classes.title}>Diff Editor</Typography>
        <Divider />
        <DiffEditor />
      </div>
    </Paper>
  );
}

export default Content;
