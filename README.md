# monaco-react
Monaco Editor for React

[![NPM](https://nodei.co/npm/@monaco-editor/react.png.png)](https://nodei.co/npm/@monaco-editor/react.png/)

## Synopsis

Monaco editor wrapper for painless integration with React applications without need of webpack (or other module bundler) configuration files.

## Motivation
There is a well-known web technology based code editor called [Monaco Editor](https://microsoft.github.io/monaco-editor/) that powers [VS Code](https://code.visualstudio.com/). [There are also many ways to integrate](https://github.com/Microsoft/monaco-editor-samples/) it provided by monaco creators. But there were tons of problems with integration of monaco with modern technologies; e.g React.

There also exist solutions for integration with React; e.g [this one](https://github.com/react-monaco-editor/react-monaco-editor) and [this one](https://github.com/jaywcjlove/react-monacoeditor). But they need some custom webpack configuration to make Monaco fully work, which is not the "best" solution for such kind of things like create-react-app - [CRA](https://facebook.github.io/create-react-app/).

With this solution, you don't need any kind of webpack configuration files and it works great with React apps created by CRA or created by something else.

## Installation

```bash
yarn add @monaco-editor/react # or npm install @monaco-editor/react
```

## [Demo](https://monaco-react.surenatoyan.com/)

## Usage

Example
```js
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const examples = { python: '# python example', javascript: '// javascript example' };

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('javascript');
  const [isEditorReady, setIsEditorReady] = useState(false);

  function handleEditorDidMount() {
    setIsEditorReady(true);
  }
  
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  
  function toggleLanguage() {
    setLanguage(language === 'javascript' ? 'python' : 'javascript');
  }

  return (
    <>
      <button onClick={toggleTheme} disabled={!isEditorReady}>Toggle theme</button>
      <button onClick={toggleLanguage} disabled={!isEditorReady}>Toggle language</button>

      <Editor
        height={500} // By default, it fully fits with its parent
        theme={theme}
        language={language}
        value={examples[language]}
        editorDidMount={handleEditorDidMount}
        loading={'Loading...'}
      />
    </>
  );
}

export default App;
```

#### MonacoEditor instance

The second argument of `editorDidMount` is the instance of the editor. So, you can use it to get the full control on the editor if you need it.

## Props

#### Editor

| Name   |      Type      |  Default |  Description |
|:----------|:-------------|:------|:------|
| value | string || The editor value |
| language | enum: ... | | All languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor |
| editorDidMount | func | noop | **Signature: function(getEditorValue: func, monaco: object) => void** <br/> This function will be called right after monaco editor will be mounted and ready to work. It will get the editor instance as a second argument |
| theme | enum: 'light' \| 'dark' | 'light' | Default themes of monaco |
| line | number |  | The line to jump on it |
| width | union: number \| string | '100%' | The width of the editor wrapper |
| height | union: number \| string | '100%' | The height of the editor wrapper |
| loading | union: React element \| string | 'Loading...' | The loading screen before the editor will be loaded |
| options | object | {} | [IEditorOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html) |

#### DiffEditor

| Name   |      Type      |  Default |  Description |
|:----------|:-------------|:------|:------|
| original | string || The original source (left one) value |
| modified | string || The modified source (right one) value |
| language | enum: ... | | All languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor |
| originalLanguage | enum: ... | *language | This prop gives you the opportunity to specify the language of the `original` source separately, otherwise, it will get the value of `language` property. (Possible values are the same as `language`) |
| modifiedLanguage | enum: ... | *language | This prop gives you the opportunity to specify the language of the `modified` source separately, otherwise, it will get the value of `language` property. (Possible values are the same as `language`) |
| editorDidMount | func | noop | **Signature: function(getOriginalEditorValue: func, getModifiedEditorValue: func, monaco: object) => void** <br/> This function will be called right after monaco editor will be mounted and ready to work. It will get the editor instance as a third argument |
| theme | enum: 'light' \| 'dark' | 'light' | Default themes of monaco |
| line | number |  | The line to jump on it |
| width | union: number \| string | '100%' | The width of the editor wrapper |
| height | union: number \| string | '100%' | The height of the editor wrapper |
| loading | union: React element \| string | 'Loading...' | The loading screen before the editor will be loaded |
| options | object | {} | [IDiffEditorOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffeditorconstructionoptions.html) |

## License

[MIT](./LICENSE)
