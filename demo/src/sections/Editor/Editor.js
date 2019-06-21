import React from 'react';

import MonacoEditor from 'monaco-react';
import Settings from './Settings';

import { useStore } from 'store';
import examples from 'config/examples';
import config from 'config';

import useStyles from './useStyles';

const Editor = _ => {
  const classes = useStyles();
  const { state: { editor: { selectedLanguageId, options } } } = useStore();

  return <div className={classes.root}>
    <MonacoEditor
      value={examples[selectedLanguageId] || ''}
      language={config.supportedLanguages.find(({ id }) => id === selectedLanguageId).name}
      options={options}
    />
    <Settings />
  </div>;
}

export default Editor;
