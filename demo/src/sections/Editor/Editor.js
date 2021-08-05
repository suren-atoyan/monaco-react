import React from 'react';

import MonacoEditor from '@monaco-editor/react';
import Settings from './Settings';

import { useStore } from 'store';
import { isMobile } from 'utils';
import examples from 'config/examples';
import config from 'config';

import useStyles from './useStyles';

const Editor = _ => {
  const classes = useStyles();
  const { state: { editor: { selectedLanguageId, options }, monacoTheme } } = useStore();

  const language = config.supportedLanguages.find(({ id }) => id === selectedLanguageId).name;

  function handleEditorWillMount(monaco) {
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.Latest,
      module: monaco.languages.typescript.ModuleKind.ES2015,
      allowNonTsExtensions: true,
      lib: ['es2018'],
    });
  }

  return <div className={classes.root}>
    {
      !isMobile && (
        <MonacoEditor
          theme={monacoTheme}
          height="100vh"
          path={language}
          defaultValue={examples[selectedLanguageId] || ''}
          defaultLanguage={language}
          options={options}
          beforeMount={handleEditorWillMount}
        />
      )
    }
    <Settings />
  </div>;
}

export default Editor;
