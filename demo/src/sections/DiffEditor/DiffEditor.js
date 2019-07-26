import React from 'react';

import { DiffEditor as MonacoDiffEditor } from '@monaco-editor/react';

import { useStore } from 'store';
import config from 'config';
import examples from 'config/diff';

import useStyles from './useStyles';

const DiffEditor = _ => {
  const { state: {
    monacoTheme,
    diffEditor: { selectedLanguageId },
  } } = useStore();
  const classes = useStyles();

  return <div className={classes.root}>
    <MonacoDiffEditor
      original={examples.original}
      modified={examples.modified}
      language={config.supportedLanguages.find(({ id }) => id === selectedLanguageId).name}
      theme={monacoTheme}
    />
  </div>;
}

export default DiffEditor;
