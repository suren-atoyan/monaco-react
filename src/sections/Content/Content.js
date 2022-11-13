import React from "react";

import Paper from "@material-ui/core/Paper";

import Editor from "sections/Editor";

import classNames from "classnames";
import useStyles from "./useStyles";

const Content = (_) => {
  const classes = useStyles();

  return (
    <Paper
      elevation={0}
      square={true}
      className={classNames("full-size", classes.root)}
    >
      <Editor />
    </Paper>
  );
};

export default Content;
