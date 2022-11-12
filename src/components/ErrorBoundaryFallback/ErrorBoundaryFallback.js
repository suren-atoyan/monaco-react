import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ResetIcon from '@material-ui/icons/Refresh';

import { resetApp } from 'utils';
import config from 'config';

import useStyles from './useStyles';

const ErrorBoundaryFallback = _ => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          {config.messages.errorBoundary.somethingWentWrong}
        </Typography>
        <div className={classes.buttons}>
          <div>
            <Button target="_blank" rel="noreferrer" href={config.links.github}>
              {config.messages.errorBoundary.openIssue}
              <img src={config.urls.octocatIcon} alt="github icon"/>
            </Button>
          </div>
          <Typography component="h6">or</Typography>
          <div>
            <Button onClick={resetApp}>{config.messages.errorBoundary.resetApp} <ResetIcon /></Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ErrorBoundaryFallback;
