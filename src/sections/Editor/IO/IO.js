import React, { useState, useRef } from "react";

import Typography from "@material-ui/core/Typography";

import Editor from "@monaco-editor/react";

import { useStore } from "store";
import { isMobile } from "utils";

import useStyles from "./useStyles";

const IO = (_) => {
  const classes = useStyles({ isMobile });
  const [isEditorReady, setIsEditorReady] = useState(false);
  const {
    state: { monacoTheme },
  } = useStore();

  const editorRef = useRef();

  function handleEditorDidMount(editor, monaco) {
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title} variant="h6">
          Input
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Test cases to be tested to satisfy the given conditions
        </Typography>
        <div className={classes.editor}>
          <Editor
            theme={monacoTheme}
            language="json"
            height={200}
            onMount={handleEditorDidMount}
          />
        </div>
      </div>

      <div>
        <Typography className={classes.title} variant="h6">
          Output
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Output of the above test cases
        </Typography>
        <div className={classes.editor}>
          <Editor
            theme={monacoTheme}
            language="json"
            height={200}
            onMount={handleEditorDidMount}
          />
        </div>
      </div>
    </div>
  );
};

export default IO;
