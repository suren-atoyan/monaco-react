/* eslint-disable */
import rTabs from '../utils/rTabs';

const examples = {
  original: rTabs(`
    # @monaco-editor/react &middot; [![monthly downloads](https://img.shields.io/npm/dm/@monaco-editor/react)](https://www.npmjs.com/package/@monaco-editor/react) [![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/suren-atoyan/monaco-react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@monaco-editor/react.svg?style=flat)](https://www.npmjs.com/package/@monaco-editor/react) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/suren-atoyan/monaco-react/pulls)
    Monaco Editor for React
    
    :tada: the new section [Development / Playground](#development-playground) has been created - now you can run the playground and play with the internals of the library
    <br />
    :tada: &middot; version **v3.8.2** is here and it's already integrated with [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader)
    
    ## Synopsis
    
    Monaco editor wrapper for easy/one-line integration with React applications without needing to use webpack's (or any other module bundler's) configuration files.
    
    ## Motivation
    There is a well-known web technology based code editor called [Monaco Editor](https://microsoft.github.io/monaco-editor/) that powers [VS Code](https://code.visualstudio.com/). [There are also many ways to integrate](https://github.com/Microsoft/monaco-editor-samples/) it provided by monaco creators. But there were tons of problems with the integration of monaco with modern technologies; e.g React.
    
    There do already exist solutions for integration with React; e.g [this one](https://github.com/react-monaco-editor/react-monaco-editor) and [this one](https://github.com/jaywcjlove/react-monacoeditor). But they need custom webpack configuration for Monaco to fully work, which is not the "best" solution for things like create-react-app - [CRA](https://facebook.github.io/create-react-app/).
    
    **With this solution, you don't need webpack configuration files and it works great with React apps created by CRA or anything else.**
    
    #### Demo
    [Check it out!](https://monaco-react.surenatoyan.com/)
    
    ## Documentation
    
    #### Contents
    
    * [Installation](#installation)
    * [Introduction](#introduction)
    * [Usage](#usage)
      * [Simple Usage](#simple-usage)
      * [Get Value](#get-value)
      * [Monaco Instance](#monaco-instance)
        * [Config](#config)
      * [Editor Instance](#editor-instance)
      * [Controlled Editor](#controlled-editor)
      * [Notes](#notes)
        * [For \`electron\` users](#for-electron-users)
        * [For \`Next.js\` users](#for-nextjs-users)
      * [Create your own editor!](#create-your-own-editor)
    * [Development / Playground](#development-playground)
    * [Props](#props)
      * [Editor](#editor)
      * [Diff Editor](#diffeditor)
      * [Controlled Editor](#controlled-editor) 
    
    ### Installation
    
    \`\`\`bash
    npm install @monaco-editor/react 
    \`\`\`
    
    or
    
    \`\`\`bash
    yarn add @monaco-editor/react
    \`\`\`
    
    NOTE: For TypeScript type definitions, this package uses the [monaco-editor](https://www.npmjs.com/package/monaco-editor) package as a peer dependency. So, if you need types and don't already have the [monaco-editor](https://www.npmjs.com/package/monaco-editor) package installed, you will need to do so.
    
    ### Introduction
    
    Besides types, three main components are also exported from the package:
    
    * Editor
    * DiffEditor
    * ControlledEditor
    
    As well as the utility which gives you the ability to access the monaco instance (simply called "monaco")
    
    ### Usage
    
    #### Simple Usage
    
    Here is an example of a simple integration of monaco editor with a react project.
    You just need to import and render the Editor component.
    You can play with it [here](https://codesandbox.io/s/dreamy-lumiere-c8pib?fontsize=14)
    
    \`\`\`js
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from '@monaco-editor/react';
    
    const App = () => <Editor height="90vh" language="javascript" />;
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    <details><summary>Extended example</summary>
    
    \`\`\`js
    import React, { useState } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    import { FillSpinner as Loader } from "react-spinners-kit";
    
    import examples from "./examples";
    
    function App() {
      const [theme, setTheme] = useState("light");
      const [language, setLanguage] = useState("javascript");
      const [isEditorReady, setIsEditorReady] = useState(false);
    
      function handleEditorDidMount() {
        setIsEditorReady(true);
      }
    
      function toggleTheme() {
        setTheme(theme === "light" ? "vs-dark" : "light");
      }
    
      function toggleLanguage() {
        setLanguage(language === "javascript" ? "python" : "javascript");
      }
    
      return (
        <>
          <button onClick={toggleTheme} disabled={!isEditorReady}>
            Toggle theme
          </button>
          <button onClick={toggleLanguage} disabled={!isEditorReady}>
            Toggle language
          </button>
    
          <Editor
            height="90vh" // By default, it fully fits with its parent
            theme={theme}
            language={language}
            loading={<Loader />}
            value={examples[language]}
            editorDidMount={handleEditorDidMount}
            options={{ lineNumbers: "off" }}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    You can play with it [here](https://codesandbox.io/s/monaco-editor-react-u0fyv?fontsize=14)
    
    </details>
    
    #### Get Value
    
    You may ask, "how can we get the value of the editor". There is a prop called \`editorDidMount\`. It gets two arguments: the first is a function to get the editor value, the second is the editor instance.
    Here is an example of how you can implement it:
    You can play with it [here](https://codesandbox.io/s/example-for-issue-2-1hzz8?fontsize=14)
    
    \`\`\`js
    import React, { useRef, useState } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const [isEditorReady, setIsEditorReady] = useState(false);
      const valueGetter = useRef();
    
      function handleEditorDidMount(_valueGetter) {
        setIsEditorReady(true);
        valueGetter.current = _valueGetter;
      }
    
      function handleShowValue() {
        alert(valueGetter.current());
      }
    
      return (
        <>
          <button onClick={handleShowValue} disabled={!isEditorReady}>
            Show value
          </button>
    
          <Editor
            height="90vh"
            language="javascript"
            value="// write your code here"
            editorDidMount={handleEditorDidMount}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    #### Monaco Instance
    
    If you want to create your own language or theme, or modify existing ones you may need to access to the monaco instance. So, to that purpose, there is a utility called "monaco" exported from library and you can use it like this:
    
    \`\`\`js
    import { monaco } from '@monaco-editor/react';
    
    monaco
      .init()
      .then(monaco => {/* here is the instance of monaco, so you can use the \`monaco.languages\` or whatever you want */})
      .catch(error => console.error('An error occurred during initialization of Monaco: ', error));
    \`\`\`
    
    You can play with it [here](https://codesandbox.io/s/monaco-editorreact---monaco-instance-5pbmx?fontsize=14&hidenavigation=1&theme=dark)
    
    #### Config
    
    By default, monaco files are being downloaded from CDN. There is an ability to change this behavior, and other things concerning the AMD loader. We have a default [config file](./src/config/index.js) you can modify it by the shown way.
    
    \`\`\`js
    import { monaco } from '@monaco-editor/react';
    
    // you can change the source of the monaco files
    monaco.config({ paths: { vs: '...' } });
    
    // you can configure the locales
    monaco.config({ 'vs/nls': { availableLanguages: { '*': 'de' } } });
    
    // or
    monaco.config({
      paths: {
        vs: '...',
      },
      'vs/nls' : {
        availableLanguages: {
          '*': 'de',
        },
      },
    });
    \`\`\`
    
    NOTE: your passed object will be deeply merged with the [default one](./src/config/index.js).
    
    #### Editor Instance
    
    It's handy to have access to the editor instance for some reason.
    
    As we have already mentioned, the \`editorDidMount\` prop gets the editor instance as a second argument.
    Here is an example of how you can use the editor instance.
    You can play with it [here](https://codesandbox.io/s/monaco-editorreact---editor-instance-zgh90)
    
    \`\`\`js
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const editorRef = useRef();
    
      function handleEditorDidMount(_, editor) {
        editorRef.current = editor;
        // Now you can use the instance of monaco editor
        // in this component whenever you want
      }
    
      function listenEditorChanges() {
        editorRef.current.onDidChangeModelContent(ev => {
          console.log(editorRef.current.getValue());
        });
      }
    
      return (
        <>
          <button onClick={listenEditorChanges} disabled={!!editorRef.current}>
            Press to listen editor changes (see console)
          </button>
          <Editor
            height="90vh"
            editorDidMount={handleEditorDidMount}
            language="javascript"
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    #### Controlled Editor
    
    The default export of the library is uncontrolled react component:
    
    \`\`\`import Editor from '@monaco-editor/react' \`\`\`
    
    We make it by default uncontrolled to keep the nature of the monaco editor as much as it is possible. And based on our experience we can say that in most cases it will cover your needs, as you can see in the examples above. And we highly recommend using that one.
    
    But in any case, if you want a controlled one, there is an option for that. The library exports \`ControlledEditor\` (as named export). It is the same as the default one (\`Editor\`), plus it has \`onChange\` method. It is working a little bit different comparing with, for example, the controlled \`input\` field.
    
    Here is \`onChange\` prop, it will be called each time when the content of the editor is changed. It gets two arguments, first one is the "event" object of monaco, the second one is the current value of the editor.
    
    You can use it without circulating the data, and just by returning it from \`onChange\` simple setting the new value; see the example (You can play with it [here](https://codesandbox.io/s/monaco-editorreact---controlled-editor-2-7iqpv?fontsize=14))
    
    \`\`\`js
    import React from "react";
    import ReactDOM from "react-dom";
    
    import { ControlledEditor } from "@monaco-editor/react";
    
    const BAD_WORD = "eval";
    const WARNING_MESSAGE = " <- hey man, what's this?";
    
    function App() {
      const handleEditorChange = (ev, value) => {
        return value.includes(BAD_WORD) && !value.includes(WARNING_MESSAGE)
          ? value.replace(BAD_WORD, BAD_WORD + WARNING_MESSAGE)
          : value.includes(WARNING_MESSAGE) && !value.includes(BAD_WORD)
            ? value.replace(WARNING_MESSAGE, "")
            : value;
      };
    
      return (
        <ControlledEditor
          height="90vh"
          value="// try to write e%v%a%l somewhere 😈 \n"
          onChange={handleEditorChange}
          language="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    Or like in usual controlled components; see the example (You can play with it [here](https://codesandbox.io/s/monaco-editorreact---controlled-editor-yg5il?fontsize=14))
    
    \`\`\`js
    import React, { useState } from "react";
    import ReactDOM from "react-dom";
    
    import { ControlledEditor } from "@monaco-editor/react";
    
    const BAD_WORD = "eval";
    const WARNING_MESSAGE = " <- hey man, what's this?";
    
    function App() {
      const [value, setValue] = useState("// try to write e%v%a%l somewhere 😈 \n");
    
      const handleEditorChange = (ev, value) => {
        setValue(
          value.includes(BAD_WORD) && !value.includes(WARNING_MESSAGE)
            ? value.replace(BAD_WORD, BAD_WORD + WARNING_MESSAGE)
            : value.includes(WARNING_MESSAGE) && !value.includes(BAD_WORD)
              ? value.replace(WARNING_MESSAGE, "")
              : value
        );
      };
    
      return (
        <ControlledEditor
          height="90vh"
          value={value}
          onChange={handleEditorChange}
          language="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    <details><summary>Another example</summary>
    
    \`\`\`js
    import React from "react";
    import ReactDOM from "react-dom";
    
    import { ControlledEditor } from "@monaco-editor/react";
    
    function App() {
      const handleEditorChange = (ev, value) => {
        return \`"it doesn't matter what you are writing, I am staying here!!!"\`;
      };
    
      return (
        <ControlledEditor
          height="90vh"
          onChange={handleEditorChange}
          language="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    You can play with it [here](https://codesandbox.io/s/monaco-editorreact---controlled-editor-3-h0uro?fontsize=14)
    
    </details>
    
    #### Notes
    
    ##### For \`electron\` users
    
    As a usual React component, this one also works fine with an electron-react environment, without need to have a webpack configuration or other extra things. But there are several cases that developers usually face to and sometimes it can be confusing. Here they are:
    
    1) **You see loading screen stuck**
    Usually, it's because your environment doesn't allow you to load external sources. By default, it loads monaco sources from CDN. You can see the [default configuration](https://github.com/suren-atoyan/monaco-react/blob/master/src/config/index.js#L3). But sure you can change that behavior; the library is fully configurable. Read about it [here](https://github.com/suren-atoyan/monaco-react#config). So, if you want to download it from your local files, you can do it like this:
    
    \`\`\`javascript
    import { monaco } from '@monaco-editor/react';
    
    monaco.config({ paths: { vs: '../path-to-monaco' } });
    \`\`\`
    
    2) **Based on your electron environment it can be required to have an absolute URL**
    The utility function taken from [here](https://github.com/microsoft/monaco-editor-samples/blob/master/electron-amd-nodeIntegration/electron-index.html) can help you to achieve that. Let's imagine you have \`monaco-editor\` package installed and you want to load monaco from the \`node_modules\` rather than from CDN: in that case, you can write something like this:
    
    \`\`\`javascript
    function ensureFirstBackSlash(str) {
        return str.length > 0 && str.charAt(0) !== '/'
            ? '/' + str
            : str;
    }
    
    function uriFromPath(_path) {
        const pathName = path.resolve(_path).replace(/\\/g, '/');
        return encodeURI('file://' + ensureFirstBackSlash(pathName));
    }
    
    monaco.config({
      paths: {
        vs: uriFromPath(
          path.join(__dirname, '../node_modules/monaco-editor/min/vs')
        )
      }
    });
    \`\`\`
    
    There were several issues about this topic that can be helpful too - [1](https://github.com/suren-atoyan/monaco-react/issues/48) [2](https://github.com/suren-atoyan/monaco-react/issues/12) [3](https://github.com/suren-atoyan/monaco-react/issues/58) [4](https://github.com/suren-atoyan/monaco-react/issues/87)
    
    And if you use \`electron\` with \`monaco\` and \`react\` and have faced an issue different than the above-discribed ones, please let us know to make this section more helpful.
    
    ##### For \`Next.js\` users
    
    Like other React components, this one also works with \`Next.js\` without a hitch. The part of the source that should be pre-parsed is optimized for server-side rendering, so, in usual cases, it will work fine, but if you want to have access, for example, to [\`monacoInstance\`](https://github.com/suren-atoyan/monaco-react#monaco-instance) you should be aware that it wants to access the \`document\` object, and it requires browser environment. Basically you just need to avoid running that part out of browser environment, there are several ways to do that. The one is described [here](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr).
    
    And if you use \`monaco\` with \`Next.js\` and have faced an issue different than the above-described one, please let us know to make this section more helpful.
    
    #### Create your own editor
    
    First, let's understand what exactly the library provides us. There are two major parts exported from the library: the \`Editor\` component and the \`monaco\` utility.
    
    The \`Editor\` is a React component; it's a logic of bindings between monaco editor and the React environment. It receives props and organizes their appliance to the monaco.
    
    The \`monaco\` utility is a collection of functions that are being used to setup monaco editor into your browser. \`monaco.init()\`  handles the whole initialization process and returns to you the instance of the monaco editor - \`monaco.init().then(monacoInstance => ...)\`. The \`Editor\` component uses this utility, gains access to \`monacoInstance\`, and creates the editor. Here is the implementation of the \`Editor\` component. You can use the same technique to create your own \`Editor\`. You can just import the \`monaco\` utility, access to \`monacoInstance\`, and create your own editor with your own custom logic. The shortest way to do it:
    
    \`\`\`javascript
    import { monaco } from '@monaco-editor/react';
    
    monaco.init().then(monacoInstance => {
      const wrapper = document.getElementById("root");
      const properties = {
        value: "function hello() {\n\talert('Hello world!');\n}",
      language:  "javascript",
      }
      
      monacoInstance.editor.create(wrapper,  properties);
    });
    \`\`\`
    
    That's all. You can wrap it into a React component, or Vue, or Angular or leave it as vanilla one or whatever you want; it's written in pure js.
    
    You can play with the example [here](https://codesandbox.io/s/create-your-own-editor-fvi5x?file=/src/index.js)
    
    ### Development-Playground
    
    It's always important to have a place, where you can play with the internals of the library. The \`playground\` is a minimal \`React\` app that directly uses the sources of the library. So, if you are going to open a PR, or want to check something, or just want to try the freshest state of the library, you can run the playground and enjoy it
    
    - clone the repository
    
    \`\`\`bash
    git clone https://github.com/suren-atoyan/monaco-react.git
    \`\`\`
    
    - go to the library folder
    
    \`\`\`bash
    cd monaco-react
    \`\`\`
    
    - install the library's dependencies
    
    \`\`\`bash
    npm install # yarn
    \`\`\`
    
    - go to the playground
    
    \`\`\`bash
    cd playground
    \`\`\`
    
    - install the playground's dependencies
    
    \`\`\`bash
    npm install # yarn
    \`\`\`
    
    - and run the playground
    
    \`\`\`bash
    npm run dev # yarn dev
    \`\`\`
    
        monaco-react
        ├── playground
        │   ├── src/      # playground sources
        ├── src/          # library sources
        └── ...
    
    If you want to change something in the library, go to \`monaco-react/src/...\`, the library will be automatically re-built and the playground will use the latest build
    
    ### Props
    
    #### Editor
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | value | string || The editor value |
    | language | enum: ... | | All languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor |
    | editorDidMount | func | noop | **Signature: function(getEditorValue: func, monaco: object) => void** <br/> This function will be called right after monaco editor is mounted and is ready to work. It will get the editor instance as a second argument |
    | theme | enum: 'light' \| 'vs-dark' | 'light' | Default themes of monaco |
    | line | number |  | The line to jump on it |
    | width | union: number \| string | '100%' | The width of the editor wrapper |
    | height | union: number \| string | '100%' | The height of the editor wrapper |
    | loading | union: React element \| string | 'Loading...' | The loading screen before the editor is loaded |
    | options | object | {} | [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html) |
    | className | string || monaco container className |
    | wrapperClassName | string || monaco container wrapper className |
    
    #### DiffEditor
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | original | string || The original source (left one) value |
    | modified | string || The modified source (right one) value |
    | language | enum: ... | | All languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor |
    | originalLanguage | enum: ... | *language | This prop gives you the opportunity to specify the language of the \`original\` source separately, otherwise, it will get the value of \`language\` property. (Possible values are the same as \`language\`) |
    | modifiedLanguage | enum: ... | *language | This prop gives you the opportunity to specify the language of the \`modified\` source separately, otherwise, it will get the value of \`language\` property. (Possible values are the same as \`language\`) |
    | editorDidMount | func | noop | **Signature: function(getModifiedEditorValue: func, getOriginalEditorValue: func, monaco: object) => void** <br/> This function will be called right after monaco editor is mounted and is ready to work. It will get the editor instance as a third argument |
    | theme | enum: 'light' \| 'vs-dark' | 'light' | Default themes of monaco |
    | width | union: number \| string | '100%' | The width of the editor wrapper |
    | height | union: number \| string | '100%' | The height of the editor wrapper |
    | loading | union: React element \| string | 'Loading...' | The loading screen before the editor is loaded |
    | options | object | {} | [IDiffEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffeditorconstructionoptions.html) |
    | className | string || monaco container className |
    | wrapperClassName | string || monaco container wrapper className |
    
    #### Controlled Editor
    
    Extended from Editor (the same props as in Editor plus onChange introduced below)
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | onChange | func | noop | **Signature: function(ev: any, value: string \| undefined) => string \| undefined** onChange method of monaco editor. It will be called right after the content of the current model is changed. It gets two arguments: first one is the "event" object of monaco, second one is the current value. NOTE: onChange can return the new value, which will be inserted to editor |
    
    ## License
    
    [MIT](./LICENSE)
  `),
  modified: rTabs(`
    # @monaco-editor/react &middot; [![monthly downloads](https://img.shields.io/npm/dm/@monaco-editor/react)](https://www.npmjs.com/package/@monaco-editor/react) [![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/suren-atoyan/monaco-react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@monaco-editor/react.svg?style=flat)](https://www.npmjs.com/package/@monaco-editor/react) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/suren-atoyan/monaco-react/pulls)
    Monaco Editor for React &middot; use the [monaco-editor](https://microsoft.github.io/monaco-editor/) in **any** [React](https://reactjs.org/) application without needing to use \`webpack\` (or \`rollup\`/\`parcel\`/etc) configuration files / plugins
    
    <hr />
    
    :zap: [multi-model editor](#multi-model-editor) is already supported; enjoy it :tada:
    <br />
    :tada: version \`v4\` is here - to see what's new in the new version and how to migrate from \`v3\`, please read this [doc](./v4.changes.md) (also, if you need the old version \`README\`, it's [here](https://github.com/suren-atoyan/monaco-react/blob/v3.8.3/README.md))
    <br />
    :tada: the new section [Development / Playground](#development-playground) has been created - now you can run the playground and play with the internals of the library
    <br />
    :tada: it's already integrated with [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader)
    
    <hr />
    
    ## Synopsis
    
    \`Monaco\` editor wrapper for easy/one-line integration with any \`React\` application without needing to use \`webpack\` (or any other module bundler) configuration files / plugins. It can be used with apps generated by \`create-react-app\`, \`create-snowpack-app\`, \`vite\`, \`Next.js\` or any other app generators - **you don't need to eject or rewire them**. [You can use it even from CDN without bundlers](https://codesandbox.io/s/cdn-example-fnhfr?file=/index.html)
    
    ## Motivation
    
    The [monaco-editor](https://microsoft.github.io/monaco-editor/) is a well-known web technology based code editor that powers [VS Code](https://code.visualstudio.com/). This library handles the setup process of the \`monaco-editor\` and provides a clean \`API\` to interact with \`monaco\` from any \`React\` environment
    
    #### Demo
    [Check it out!](https://monaco-react.surenatoyan.com/)
    
    ## Documentation
    
    * [Installation](#installation)
    * [Introduction](#introduction)
    * [Usage](#usage)
      * [Simple usage](#simple-usage)
      * [Get value](#get-value)
      * [\`editor instance\`](#editor-instance)
      * [\`monaco instance\`](#monaco-instance)
      * [\`useMonaco\`](#usemonaco)
      * [\`loader/config\`](#loader-config)
      * [Multi-model editor](#multi-model-editor)
      * [\`onValidate\`](#onvalidate)
      * [Notes](#notes)
        * [For \`electron\` users](#for-electron-users)
        * [For \`Next.js\` users](#for-nextjs-users)
      * [Create your own editor!](#create-your-own-editor)
    * [Development / Playground](#development-playground)
    * [Props](#props)
      * [\`Editor\`](#editor)
      * [\`Diff Editor\`](#diffeditor)
    
    ### Installation
    
    \`\`\`bash
    npm install @monaco-editor/react 
    \`\`\`
    
    or
    
    \`\`\`bash
    yarn add @monaco-editor/react
    \`\`\`
    
    or you can use \`CDN\`. [Here is an example](https://codesandbox.io/s/cdn-example-fnhfr?file=/index.html)
    
    **NOTE**: For \`TypeScript\` type definitions, this package uses the [monaco-editor](https://www.npmjs.com/package/monaco-editor) package as a peer dependency. So, if you need types and don't already have the [monaco-editor](https://www.npmjs.com/package/monaco-editor) package installed, you will need to do so
    
    ### Introduction
    
    Besides types, the library exports \`Editor\`and \`DiffEditor\` components, as well as the \`loader\` utility and the \`useMonaco\` hook:
    
    \`\`\`javascript
    import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
    \`\`\`
    
    ### Usage
    
    #### Simple usage
    
    Here is an example of a simple integration of \`monaco\` editor with a \`React\` project.
    <br />
    You just need to import and render the \`Editor\` component:
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      return (
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/simple-usage-uyf5n?file=/src/App.js)
    
    <details><summary>Extended example</summary>
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      function handleEditorChange(value, event) {
        // here is the current value
      }
    
      function handleEditorDidMount(editor, monaco) {
        console.log("onMount: the editor instance:", editor);
        console.log("onMount: the monaco instance:", monaco)
      }
    
      function handleEditorWillMount(monaco) {
        console.log("beforeMount: the monaco instance:", monaco);
      }
    
      function handleEditorValidation(markers) {
        // model markers
        // markers.forEach(marker => console.log('onValidate:', marker.message));
      }
    
      return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          onValidate={handleEditorValidation}
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/simple-usage-extended-3ivw2?file=/src/App.js)
    
    </details>
    
    #### Get value
    
    There are two options to get the current value:
    
    1) get the current model value from the \`editor\` instance
    
    \`\`\`javascript
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const editorRef = useRef(null);
    
      function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor; 
      }
      
      function showValue() {
        alert(editorRef.current.getValue());
      }
    
      return (
      <>
        <button onClick={showValue}>Show value</button>
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={handleEditorDidMount}
        />
      </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/get-value-r9be5?file=/src/App.js)
    
    2) get the current model value via \`onChange\` prop
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      function handleEditorChange(value, event) {
        console.log("here is the current model value:", value);
      }
    
      return (
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/onchange-4nf6g?file=/src/App.js)
    
    <details><summary>(get the \`DiffEditor\` values via \`editor\` instance)</summary>
    
    \`\`\`javascript
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import { DiffEditor } from "@monaco-editor/react";
    
    function App() {
      const diffEditorRef = useRef(null);
    
      function handleEditorDidMount(editor, monaco) {
        diffEditorRef.current = editor;
      }
    
      function showOriginalValue() {
        alert(diffEditorRef.current.getOriginalEditor().getValue());
      }
    
      function showModifiedValue() {
        alert(diffEditorRef.current.getModifiedEditor().getValue());
      }
    
      return (
        <>
          <button onClick={showOriginalValue}>show original value</button>
          <button onClick={showModifiedValue}>show modified value</button>
          <DiffEditor
            height="90vh"
            defaultLanguage="javascript"
            original="// the original code"
            modified="// the modified code"
            onMount={handleEditorDidMount}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/get-values-diffeditor-c6xrg?file=/src/App.js)
    
    </details>
    
    #### \`editor instance\`
    
    The \`editor\` instance is exposed from the \`onMount\` prop as a first parameter, the second is the \`monaco\` instance
    
    \`\`\`javascript
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const editorRef = useRef(null);
    
      function handleEditorDidMount(editor, monaco) {
        // here is the editor instance
        // you can store it in \`useRef\` for further usage
        editorRef.current = editor; 
      }
    
      return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onMount={handleEditorDidMount}
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/editor-instance-354cr?file=/src/App.js)
    
    #### \`monaco instance\`
    
    There are three options to get the \`monaco\` instance:
    
    1) via \`onMount/beforeMount\`
    
    \`\`\`javascript
    import React, { useRef } from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const monacoRef = useRef(null);
    
      function handleEditorWillMount(monaco) {
        // here is the monaco instance
        // do something before editor is mounted
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      }
    
      function handleEditorDidMount(editor, monaco) {
        // here is another way to get monaco instance
        // you can also store it in \`useRef\` for further usage
        monacoRef.current = editor; 
      }
    
      return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/simple-usage-forked-il8kt?file=/src/App.js)
    
    2) via \`loader\` utility
    
    \`\`\`javascript
    import { loader } from "@monaco-editor/react";
    
    loader.init().then(monaco => console.log("here is the monaco isntance:", monaco));
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/monaco-instance-loader-ndzu9?file=/src/App.js)
    
    3) via \`useMonaco\` hook
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor, { useMonaco } from "@monaco-editor/react";
    
    function App() {
      const monaco = useMonaco();
      
      useEffect(() => {
        if (monaco) {
          console.log("here is the monaco isntance:", monaco);
        }
      }, [monaco]);
    
      return (
        <Editor
          height="90vh"
          defaultValue="// some comment"
          defaultLanguage="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/monaco-instance-usemonaco-88eml?file=/src/App.js)
    
    #### \`useMonaco\`
    
    \`useMonaco\` is a \`React\` hook that returns the instance of the \`monaco\`. But there is an important note that should be considered: the initialization process is being handled by the \`loader\` utility (the reference of [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader)): that process is being done asynchronously and only once. So, if the first initiator of the initialization is \`useMonaco\` hook, the first returned value will be null, due to its asynchronous installation. Just check the returned value of \`useMonaco\`
    
    \`\`\`javascript
    import React, { useEffect } from "react";
    import ReactDOM from "react-dom";
    
    import Editor, { useMonaco } from "@monaco-editor/react";
    
    function App() {
      const monaco = useMonaco();
      
      useEffect(() => {
        // do conditional chaining
        monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
        // or make sure that it exists by other ways
        if (monaco) {
          console.log("here is the monaco instance:", monaco);
        }
      }, [monaco]);
    
      return (
        <Editor
          height="90vh"
          defaultValue="// some comment"
          defaultLanguage="javascript"
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/usemonaco-9rpc4)
    
    #### \`loader-config\`
    
    The library exports (named) the utility called \`loader\`. Basically, it's the reference of [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader). By default, \`monaco\` files are being downloaded from \`CDN\`. There is an ability to change this behavior, and other things concerning the \`AMD\` loader of \`monaco\`. We have a default [config file](https://github.com/suren-atoyan/monaco-loader/blob/master/src/config/index.js) that you can modify by the way shown below:
    
    \`\`\`js
    import { loader } from "@monaco-editor/react";
    
    // you can change the source of the monaco files
    loader.config({ paths: { vs: "..." } });
    
    // you can configure the locales
    loader.config({ "vs/nls": { availableLanguages: { "*": "de" } } });
    
    // or
    loader.config({
      paths: {
        vs: "...",
      },
      "vs/nls" : {
        availableLanguages: {
          "*": "de",
        },
      },
    });
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/loader-ry1bb?file=/src/App.js)
    
    **NOTE**: your passed object will be deeply merged with the [default one](https://github.com/suren-atoyan/monaco-loader/blob/master/src/config/index.js)
    
    #### Multi-model editor
    
    When you render the \`Editor\` component, a default model is being created. It's important to mention that when you change the \`language\` or \`value\` props, they affect the same model that has been auto-created at the mount of the component. In most cases it's okay, but the developers face problems when they want to implement a multi-model editor to support tabs/files like in \`IDE\`s. And previously to handle multiple models they had to do it manually and out of the component. Now, the multi-model \`API\` is supported :tada: Let's check how it works. There are three parameters to create a model - \`value\`, \`language\` and \`path\` (\`monaco.editor.createModel(value, language, monaco.Uri.parse(path))\`). You can consider last one (\`path\`) as an identifier for the model. The \`Editor\` component, now, has a \`path\` prop. When you specify a \`path\` prop, the \`Editor\` component checks if it has a model by that path or not. If yes, the existing model will be shown, otherwise, a new one will be created (and stored). Using this technique you can correspond your files with paths, and create a fully multi-model editor. You can open your file, do some changes, choose another file, and when you come back to the first one the previous model will be shown with the whole view state, text selection, undo stack, scroll position, etc. ([simple demo](https://codesandbox.io/s/multi-model-editor-kugi6?file=/src/App.js))
    
    Here is a simple example: let's imagine we have a \`JSON\` like representation of some file structure, something like this:
    
    \`\`\`javascript
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
    }
    \`\`\`
    
    And here is our simple multi-model editor implementation:
    
    \`\`\`javascript
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      const [fileName, setFileName] = useState("script.js");
    
      const file = files[fileName];
    
      return (
        <>
          <button disabled={fileName === "script.js"} onClick={() => setFileName("script.js")}>script.js</button>
          <button disabled={fileName === "style.css"} onClick={() => setFileName("style.css")}>style.css</button>
          <button disabled={fileName === "index.html"} onClick={() => setFileName("index.html")}>index.html</button>
          <Editor
            height="80vh"
            theme="vs-dark"
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
          />
        </>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    The properties:
    
    - \`defaultValue\`
    - \`defaultLanguage\`
    - \`defaultPath\`
    - \`value\`
    - \`language\`
    - \`path\`
    - \`saveViewState\`
    
    will give you more flexibility in working with a multi-model editor.
    
    **NOTE**
    
    \`defaultValue\`, \`defaultLanguage\`, and \`defaultPath\` are being considered **only** during a new model creation
    <br />
    \`value\`, \`language\`, and \`path\` are being tracked the **whole time**
    <br />
    \`saveViewState\` is an indicator whether to save the models' view states between model changes or not
    
    [codesandbox](https://codesandbox.io/s/multi-model-editor-kugi6?file=/src/App.js)
    
    #### \`onValidate\`
    
    \`onValidate\` is an additional property. An event is emitted when the content of the current model is changed and the current model markers are ready. It will be fired with the current model markers
    
    \`\`\`js
    import React from "react";
    import ReactDOM from "react-dom";
    
    import Editor from "@monaco-editor/react";
    
    function App() {
      function handleEditorValidation(markers) {
        // model markers
        markers.forEach(marker => console.log("onValidate:", marker.message));
      }
    
      return (
        <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// let's write some broken code 😈"
          onValidate={handleEditorValidation}
        />
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    \`\`\`
    
    [codesandbox](https://codesandbox.io/s/onvalidate-4t5c2?file=/src/App.js)
    
    It's important to mention that according to [monaco-editor](https://microsoft.github.io/monaco-editor/), the whole supported languages are divided into two groups:
    
    1) languages that have rich \`IntelliSense\` and validation
    
    - \`TypeScript\`
    - \`JavaScript\`
    - \`CSS\`
    - \`LESS\`
    - \`SCSS\`
    - \`JSON\`
    - \`HTML\`
    
    2) languages with only basic syntax colorization
    
    - \`XML\`
    - \`PHP\`
    - \`C#\`
    - \`C++\`
    - \`Razor\`
    - \`Markdown\`
    - \`Diff\`
    - \`Java\`
    - \`VB\`
    - \`CoffeeScript\`
    - \`Handlebars\`
    - \`Batch\`
    - \`Pug\`
    - \`F#\`
    - \`Lua\`
    - \`Powershell\`
    - \`Python\`
    - \`Ruby\`
    - \`SASS\`
    - \`R\`
    - \`Objective-C\`
    
    **As you can guess, \`onValidate\` prop will work only with the languages from the first group**
    
    #### Notes
    
    ##### For \`electron\` users
    
    As a usual \`React\` component, this one also works fine with an electron-react environment, without need to have a \`webpack\` configuration or other extra things. But there are several cases that developers usually face to and sometimes it can be confusing. Here they are:
    
    1) **You see loading screen stuck**
    Usually, it's because your environment doesn't allow you to load external sources. By default, it loads \`monaco\` sources from \`CDN\`. You can see the [default configuration](https://github.com/suren-atoyan/monaco-loader/blob/master/src/config/index.js). But sure you can change that behavior; the library is fully configurable. Read about it [here](https://github.com/suren-atoyan/monaco-react#config). So, if you want to download it from your local files, you can do it like this:
    
    \`\`\`javascript
    import { loader } from "@monaco-editor/react";
    
    loader.config({ paths: { vs: "../path-to-monaco" } });
    \`\`\`
    
    2) **Based on your electron environment it can be required to have an absolute URL**
    The utility function taken from [here](https://github.com/microsoft/monaco-editor-samples/blob/master/electron-amd-nodeIntegration/electron-index.html) can help you to achieve that. Let's imagine you have \`monaco-editor\` package installed and you want to load monaco from the \`node_modules\` rather than from CDN: in that case, you can write something like this:
    
    \`\`\`javascript
    function ensureFirstBackSlash(str) {
        return str.length > 0 && str.charAt(0) !== "/"
            ? "/" + str
            : str;
    }
    
    function uriFromPath(_path) {
        const pathName = path.resolve(_path).replace(/\\/g, "/");
        return encodeURI("file://" + ensureFirstBackSlash(pathName));
    }
    
    loader.config({
      paths: {
        vs: uriFromPath(
          path.join(__dirname, "../node_modules/monaco-editor/min/vs")
        )
      }
    });
    \`\`\`
    
    There were several issues about this topic that can be helpful too - [1](https://github.com/suren-atoyan/monaco-react/issues/48) [2](https://github.com/suren-atoyan/monaco-react/issues/12) [3](https://github.com/suren-atoyan/monaco-react/issues/58) [4](https://github.com/suren-atoyan/monaco-react/issues/87)
    
    And if you use \`electron\` with \`monaco\` and \`react\` and have faced an issue different than the above-discribed ones, please let us know to make this section more helpful
    
    ##### For \`Next.js\` users
    
    Like other React components, this one also works with \`Next.js\` without a hitch. The part of the source that should be pre-parsed is optimized for server-side rendering, so, in usual cases, it will work fine, but if you want to have access, for example, to [\`monaco instance\`](https://github.com/suren-atoyan/monaco-react#monaco-instance) you should be aware that it wants to access the \`document\` object, and it requires browser environment. Basically you just need to avoid running that part out of browser environment, there are several ways to do that. The one is described [here](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr)
    
    And if you use \`monaco\` with \`Next.js\` and have faced an issue different than the above-described one, please let us know to make this section more helpful
    
    #### Create your own editor
    
    Under the hood this library uses [@monaco-editor/loader](https://github.com/suren-atoyan/monaco-loader) that provides a utility called \`loader\`. The \`loader\` utility is a collection of functions that are being used to setup \`monaco\` editor into your browser. \`loader.init()\`  handles the whole initialization process and returns the instance of the \`monaco\` - \`loader.init().then(monaco => console.log("here is the monaco isntance:", monaco))\`. The \`Editor\` component uses this utility, gains access to \`monaco instance\` and creates the editor. [Here](https://github.com/suren-atoyan/monaco-react/blob/master/src/Editor/Editor.js) is the implementation of the \`Editor\` component. You can use the same technique to create your own \`Editor\`. You can just import the \`loader\` utility, access to \`monaco instance\`, and create your own editor with your own custom logic. The shortest way to do it:
    
    \`\`\`javascript
    import loader from "@monaco-editor/loader";
    
    loader.init().then(monaco => {
      const wrapper = document.getElementById("root");
      wrapper.style.height = "100vh";
      const properties = {
        value: "function hello() {\n\talert(\"Hello world!\");\n}",
        language:  "javascript",
      }
      
      monaco.editor.create(wrapper,  properties);
    });
    \`\`\`
    
    That's all. You can wrap it into a \`React\` component, or \`Vue\`, or \`Angular\` or leave it as vanilla one or whatever you want; it's written in pure \`js\`
    
    [codesandbox](https://codesandbox.io/s/create-your-own-editor-pd01u?file=/src/index.js)
    
    ### Development-Playground
    
    It's always important to have a place, where you can play with the internals of the library. The \`playground\` is a minimal \`React\` app that directly uses the sources of the library. So, if you are going to open a \`PR\`, or want to check something, or just want to try the freshest state of the library, you can run the playground and enjoy it
    
    - clone the repository
    
    \`\`\`bash
    git clone https://github.com/suren-atoyan/monaco-react.git
    \`\`\`
    
    - go to the library folder
    
    \`\`\`bash
    cd monaco-react
    \`\`\`
    
    - install the library's dependencies
    
    \`\`\`bash
    npm install # yarn
    \`\`\`
    
    - go to the playground
    
    \`\`\`bash
    cd playground
    \`\`\`
    
    - install the playground's dependencies
    
    \`\`\`bash
    npm install # yarn
    \`\`\`
    
    - and run the playground
    
    \`\`\`bash
    npm run dev # yarn dev
    \`\`\`
    
        monaco-react
        ├── playground
        │   ├── src/      # playground sources
        ├── src/          # library sources
        └── ...
    
    If you want to change something in the library, go to \`monaco-react/src/...\`, the library will be automatically re-built and the playground will use the latest build
    
    ### Props
    
    #### \`Editor\`
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | defaultValue | string || Default value of the current model |
    | defaultLanguage | string || Default language of the current model |
    | defaultPath | string || Default path of the current model. Will be passed as the third argument to \`.createModel\` method - \`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))\` |
    | value | string || Value of the current model |
    | language | enum: ... | | Language of the current model (all languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor) |
    | path | string || Path of the current model. Will be passed as the third argument to \`.createModel\` method - \`monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultPath))\` |
    | theme | enum: "light" \| "vs-dark" | "light" | The theme for the monaco. Available options "vs-dark" \| "light". Define new themes by \`monaco.editor.defineTheme\` |
    | line | number |  | The line to jump on it |
    | loading | React Node | "Loading..." | The loading screen before the editor will be mounted
    | options | object | {} | [IStandaloneEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.istandaloneeditorconstructionoptions.html) |
    | overrideServices | object | {} | [IEditorOverrideServices ](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroverrideservices.html) |
    | saveViewState | boolean | true | Indicator whether to save the models' view states between model changes or not |
    | keepCurrentModel | boolean | false | Indicator whether to dispose the current model when the Editor is unmounted or not |
    | width | union: number \| string | "100%" | Width of the editor wrapper |
    | height | union: number \| string | "100%" | Height of the editor wrapper |
    | className | string || Class name for the editor container |
    | wrapperClassName | string || Class name for the editor container wrapper |
    | beforeMount | func | noop | **Signature: function(monaco: Monaco) => void** <br/> An event is emitted before the editor is mounted. It gets the \`monaco\` instance as a first argument|
    | onMount | func | noop | **Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void** <br/> An event is emitted when the editor is mounted. It gets the \`editor\` instance as a first argument and the \`monaco\` instance as a second|
    | onChange | func || **Signature: function(value: string \| undefined, ev: monaco.editor.IModelContentChangedEvent) => void** <br/> An event is emitted when the content of the current model is changed|
    | onValidate | func | noop | **Signature: function(markers: monaco.editor.IMarker[]) => void** <br/> An event is emitted when the content of the current model is changed and the current model markers are ready|
    
    #### \`DiffEditor\`
    
    | Name   |      Type      |  Default |  Description |
    |:----------|:-------------|:------|:------|
    | original | string || The original source (left one) value |
    | modified | string || The modified source (right one) value |
    | language | enum: ... | | Language for the both models - original and modified (all languages that are [supported](https://github.com/microsoft/monaco-languages) by monaco-editor) |
    | originalLanguage | enum: ... | | This prop gives you the opportunity to specify the language of the original source separately, otherwise, it will get the value of the language property |
    | modifiedLanguage | enum: ... | | This prop gives you the opportunity to specify the language of the modified source separately, otherwise, it will get the value of language property |
    | originalModelPath | string || Path for the "original" model. Will be passed as a third argument to \`.createModel\` method - \`monaco.editor.createModel(..., ..., monaco.Uri.parse(originalModelPath))\` |
    | modifiedModelPath | string || Path for the "modified" model. Will be passed as a third argument to \`.createModel\` method - \`monaco.editor.createModel(..., ..., monaco.Uri.parse(modifiedModelPath))\` |
    | keepCurrentOriginalModel | boolean | false | Indicator whether to dispose the current original model when the DiffEditor is unmounted or not |
    | keepCurrentModifiedModel | boolean | false | Indicator whether to dispose the current modified model when the DiffEditor is unmounted or not |
    | theme | enum: "light" \| "vs-dark" | "light" | The theme for the monaco. Available options "vs-dark" \| "light". Define new themes by \`monaco.editor.defineTheme\` |
    | line | number |  | The line to jump on it |
    | loading | React Node | "Loading..." | The loading screen before the editor will be mounted
    | options | object | {} | [IDiffEditorConstructionOptions](https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.idiffeditorconstructionoptions.html) |
    | width | union: number \| string | "100%" | Width of the editor wrapper |
    | height | union: number \| string | "100%" | Height of the editor wrapper |
    | className | string || Class name for the editor container |
    | wrapperClassName | string || Class name for the editor container wrapper |
    | beforeMount | func | noop | **Signature: function(monaco: Monaco) => void** <br/> An event is emitted before the editor mounted. It gets the \`monaco\` instance as a first argument|
    | onMount | func | noop | **Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void** <br/> An event is emitted when the editor is mounted. It gets the \`editor\` instance as a first argument and the \`monaco\` instance as a second|
    
    ## License
    
    [MIT](./LICENSE)
  `),
};

export default examples;
