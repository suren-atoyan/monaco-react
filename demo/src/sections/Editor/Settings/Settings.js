import React, { useState, useRef } from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import Editor from '@monaco-editor/react';

import { useStore } from 'store';
import config from 'config';
import { noop } from 'utils';
import { useUpdate } from 'utils/hooks';

import useStyles from './useStyles';

const Settings = _ => {
  const classes = useStyles();
  const [isEditorReady, setIsEditorReady] = useState(false);
  const {
    state: { editor: { selectedLanguageId, options }, themeMode },
    actions: { editor: { setSelectedLanguageId, setOptions }, showNotification },
  } = useStore();
  const [getEditorValue, setGetEditorValue] = useState(noop);
  const editorRef = useRef();

  function handleLanguageChange(ev) {
    setSelectedLanguageId(ev.target.value);    
  }

  function handleEditorDidMount(valueGetter, editor) {
    setGetEditorValue(_ => valueGetter);
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  useUpdate(_ => {
    editorRef.current && editorRef.current.getAction('editor.action.formatDocument').run();
  });

  function handleBeautifyJSON() {
    editorRef.current.getAction('editor.action.formatDocument').run();
  }

  function handleApply() {
    let oprions;
    try {
      oprions = JSON.parse(getEditorValue());
      setOptions(oprions);
    } catch {
      showNotification({ message: config.messages.invalidOptions, variant: 'error'})
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">Settings</Typography>
      <Divider />
      <div className={classes.languages}>
        <Typography className={classes.title} variant="h6">Languages</Typography>
        <TextField
          select
          variant="filled"
          value={selectedLanguageId}
          onChange={handleLanguageChange}
          className="full-width"
          label="Language"
        >
          {config.supportedLanguages.map(language => (
            <MenuItem key={language.id} value={language.id}>
              {language.name}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div>
        <Typography className={classes.title} variant="h6">Options</Typography>
        <Typography variant="subtitle2" gutterBottom>
          For full list of options with descriptions visit <Link
            href={config.urls.IEditorOptions}
            rel="noreferrer"
            target="_blank"
          >
            here
          </Link>
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Now you can change options below, press apply and see result in the left side editor
        </Typography>
        <div className={classes.editor}>
          <Editor
            theme={themeMode}
            language="json"
            height={400}
            value={JSON.stringify(options, null, 2)}
            editorDidMount={handleEditorDidMount}
          />
        </div>
        <Button variant="outlined" disabled={!isEditorReady} onClick={handleApply}>Apply</Button>
        <Button variant="outlined" disabled={!isEditorReady} onClick={handleBeautifyJSON}>Beautify JSON</Button>
      </div>
    </div>
  );
};

export default Settings;
