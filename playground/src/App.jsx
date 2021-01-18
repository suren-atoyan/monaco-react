import React, { useState, useRef, useCallback } from 'react';
import { TreeView, TreeItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import Fb from './Fb';
import { someCSSCodeExample, someHTMLCodeExample, someJSCodeExample } from './files';
import Editor, { useMonaco } from '../../lib/es';
// import Editor from '@monaco-editor/react';

const files = {
  "script.js": {
    name: "script.js",
    language: "javascript",
    value: someJSCodeExample,
  },
  "style.css": {
    name: "style.css",
    language: "css",
    value: someCSSCodeExample,
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: someHTMLCodeExample,
  },
};

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
});

function App() {
  const [fileName, setFileName] = useState('script.js');

  const file = files[fileName];

  const handleEditorChange = useCallback((markers) => {
    markers.forEach(marker => console.log(marker.message))
  }, []);

  return (
    <React.Fragment>
      <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>script.js</button>
      <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>style.css</button>
      <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>index.html</button>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onValidate={handleEditorChange}
      />
    </React.Fragment>
  );
}

function getFile(files, fileName) {
  let file;

  function _getFile(files, fileName) {
    files?.forEach(item => {
      if (item.children) {
        return _getFile(item.children, fileName);
      } else {
        if (item.name === fileName) {
          file = item;
        };
      }
    });
  }

  _getFile(files, fileName);

  return file;
}

const rTabs = (str) => {
  if (!str) return '';
  const firstLine = str.split('\n')[1];
  let tabsSize = 0;

  if (firstLine) {
    const lengthBefore = firstLine.length;
    const trimedFirstLine = firstLine.trimLeft();
    const lengthAfter = trimedFirstLine.length;

    tabsSize = lengthBefore - lengthAfter;
  }

  return str.trim().replace(new RegExp(`^ {${tabsSize}}`, 'gm'), '');
}

export default App;
