import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

import useStyles from './useStyles';

const Loading = _ => {
  const classes = useStyles();

  return <Paper elevation={0} square={true} className={classes.preloader}>
    <CircularProgress size={50} />
  </Paper>;
};

Loading.propTypes = {
  // interesting times; there are components not using any prop...
};

export default Loading;
