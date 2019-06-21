import React from 'react';

import { DiffEditor as MonacoDiffEditor } from 'monaco-react';

import { useStore } from 'store';
import config from 'config';
import examples from 'config/diff';

import useStyles from './useStyles';

const DiffEditor = _ => {
  const { state: {
    themeMode,
    diffEditor: { selectedLanguageId },
  } } = useStore();
  const classes = useStyles();

  return <div className={classes.root}>
    <MonacoDiffEditor
      original={examples.original}
      modified={examples.modified}
      language={config.supportedLanguages.find(({ id }) => id === selectedLanguageId).name}
      theme={themeMode}
    />
  </div>;
}

export default DiffEditor;
