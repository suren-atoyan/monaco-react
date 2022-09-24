### Versions

## 4.4.6
###### *Sep 24, 2022*

- fix onChange: unconditionally call onChange inside onDidChangeModelContent
- add preventCreation flag
- update lock files

## 4.4.5
###### *May 11, 2022*

- loader: update `@monaco-editor/loader` version (1.3.2)

## 4.4.4
###### *Apr 23, 2022*

- package: fix npm prepublish step

## 4.4.3
###### *Apr 23, 2022*

- loader: update `@monaco-editor/loader` version (1.3.1)

## 4.4.2
###### *Apr 12, 2022*

- package: support react/react-dom v18 as a peer dependency

## 4.4.1
###### *Mar 29, 2022*

- types: add missing type `monaco` in `loader.config`

## 4.4.0
###### *Mar 28, 2022*

- loader: update `@monaco-editor/loader` version (1.3.0); using `monaco` from `node_modules` is supported
- playground: update playground packages

## 4.3.1
###### *Oct 3, 2021*

- types: update types according to the new `loader` version and the new `wrapperProps` property

## 4.3.0
###### *Oct 3, 2021*

- Editor/DiffEditor: add `wrapperProps` property
- DiffEditor: allow `DiffEditor` to use existing models
- package.json: update `@monaco-editor/loader` version to `v1.2.0` (monaco version 0.28.1)

## 4.2.2
###### *Aug 9, 2021*

- Editor: `onValidate` integrate `onDidChangeMarkers` (released in `v0.22.0`)
- package.json: after `onDidChangeMarkers` integration `state-local` became redundant; remove it

## 4.2.1
###### *Jun 21, 2021*

- loader: update `@monaco-editor/loader` package version to the latest one (v1.1.1)
- monaco-editor: set `monaco-editor` peerDependency version to `>= 0.25.0 < 1`
- tests: update snapshots

## 4.2.0
###### *Jun 13, 2021*

- loader: update `@monaco-editor/loader` package version to the latest one (v1.1.0)
- demo: update demo examples
- tests: update snapshots

## 4.1.3
###### *Apr 21, 2021*

- types: add `keepCurrentOriginalModel` and `keepCurrentModifiedModel` to type definition

## 4.1.2
###### *Apr 19, 2021*

- DiffEditor: add `keepCurrentOriginalModel` and `keepCurrentModifiedModel` properties; indicator whether to dispose the current original/modified model when the DiffEditor is unmounted or not
- package.json: update monaco-editor peerDependency to the lates one (0.23.0)

## 4.1.1
###### *Apr 2, 2021*

- DiffEditor: update `DiffEditor`'s `modified` value by `executeEdits`
- README: add an example for getting the values of `DiffEditor`

## 4.1.0
###### *Mar 15, 2021*

- loader: update @monaco-editor/loader dependency to version 1.0.1
- types: fix Theme type; vs-dark instead of dark

## 4.0.11
###### *Feb 27, 2021*

- Editor: add an additional check in case if `line` is undefined

## 4.0.10
###### *Feb 16, 2021*

- Editor: use `revealLine` for line update instead of `setScrollPosition`

## 4.0.9
###### *Jan 29, 2021*

- Editor: save and restore current model view state, if `keepCurrentModel` is true

## 4.0.8
###### *Jan 29, 2021*

- Editor: add `keepCurrentModel` property to the `Editor` component; indicator whether to dispose the current model when the Editor is unmounted or not

## 4.0.7
###### *Jan 21, 2021*

- Editor: fire `onValidate` unconditionally, always, with the current model markers

## 4.0.6
###### *Jan 19, 2021*

- DiffEditor: check if `originalModelPath` and `modifiedModelPath` exist in `setModels` function
- DiffEditor: remove `originalModelPath` and `modifiedModelPath` from `defaultProps`

## 4.0.5
###### *Jan 19, 2021*

- utils: check if `path` exists in `createModel` utility function
- Editor: remove `defaultPath` from `defaultProps`

## 4.0.4
###### *Jan 18, 2021*

- package.json: update husky precommit hook to remove lib folder

## 4.0.3
###### *Jan 18, 2021*

- Editor: enable multi-model support
- types: add `path`, `defaultLanguage` and `saveViewState` for multi-model support

## 4.0.2
###### *Jan 18, 2021*

- types: declare and export `useMonaco` type

## 4.0.1
###### *Jan 18, 2021*

- Editor: dispose the current model if the Editor component is unmounted

## 4.0.0
###### *Jan 16, 2021*

- package.json: update dependency (`@monaco-editor/loader`) version to - `v1.0.0`
- hooks: create `useMonaco` hook
- lib: export (named) `useMonaco` from the entry file
- monaco: rename the main utility: monaco -> loader
- Editor/Diff: rename `editorDidMount` to `onMount`
- Editor/Diff: expose monaco instance from `onMount` as a second argument (first is the editor instance)
- Editor/Diff: add `beforeMount` prop: function with a single argument -> monaco instance
- Editor: add `defaultModelPath` prop, use it as a default model path
- Editor: add `defaultValue` prop and use it during default model creation
- Editor: add subscription (`onChange` prop) to listen default model content change
- Editor: remove `_isControlledMode` prop
- Diff: add `originalModelPath` and `modifiedModelPath` props, use them as model paths for original/modified models
- ControlledEditor: remove; the `Editor` component, now, handles both controlled and uncontrolled modes
- package.json: move `prop-types` to dependencies
- types: fix types according to changed
- Editor: add `onValidate` prop: an event emitted when the length of the model markers of the current model isn't 0

## 3.8.3
###### *Jan 8, 2021*

- README: fix DiffEditor `options` prop type name
- types: rename index.d.ts to types.d.ts

## 3.8.2
###### *Jan 7, 2021*

- package.json: add `@monaco-editor/loader` as a dependency
- Editor/Diff Editor components: use `@monaco-editor/loader` instead of `monaco` utility
- utilities: remove utilities that were being replaced by the `@monaco-editor/loader`
- utilities: collect remaining utilities all in the entry file / add some new ones for the next version
- config: remove config as it's already replaced by the `@monaco-editor/loader`
- hooks: create `usePrevious` hook
- cs: coding style fixes
- build: use `Rollup` as a build system; now, we have bundles for `cjs/es/umd`

## 3.7.5
###### *Jan 3, 2021*

- utilities (monaco): fix `state-local` import

## 3.7.4
###### *Dec 16, 2020*

- Editor/Diff Editor components: fix `componentDidMount` call order
- src: (minor) some corrections according to coding style

## 3.7.3
###### *Dec 15, 2020*

- Editor component: set `forceMoveMarkers` `true` in `executeEdits`

## 3.7.2
###### *Dec 5, 2020*

- package: add react/react-dom 17 version as a peer dependency

## 3.7.1
###### *Nov 29, 2020*

- editor: fix - remove unnecessary `value set` before language update

## 3.7.0
###### *Nov 11, 2020*

- monaco: update monaco version to 0.21.2

## 3.6.3
###### *Sep 22, 2020*

- types: add missing props; `className` and `wrapperClassName`

## 3.6.2
###### *Aug 19, 2020*

- eslint: update eslint rules: add 'eslint:recommended' and 'no-unused-vars' -> 'error'
- src: refactor according to new eslint rules
- package.json: update github username, add author email

## 3.6.1
###### *Aug 18, 2020*

- ControlledEditor: store current value in ref instead of making it a dependency of `handleEditorModelChange`

## 3.6.0
###### *Aug 18, 2020*

- ControlledEditor: fix onChange handler issue; dispose prev listener and attach a new one for every new onChange
- ControlledEditor: do not trigger onChange in programmatic changes

## 3.5.7
###### *Aug 9, 2020*

- utilities (monaco): remove intermediate function for injecting scripts

## 3.5.6
###### *Aug 6, 2020*

- dependencies: add `state-local` as a dependency (replace with `local-state` util)

## 3.5.5
###### *Aug 3, 2020*

- dependencies: move `@babel/runtime` from peer dependencies to dependencies

## 3.5.4
###### *Aug 3, 2020*

- dependencies: add `@babel/runtime` as a peer dependency

## 3.5.3
###### *Aug 3, 2020*

- babel: update babel version (v.7.11.0) / activate helpers (decrease bundle size)
- hooks: move out hooks from utils to root
- utilities: remove utils/store to utils/local-state

## 3.5.2
###### *Aug 2, 2020*

- utilities: redesign `store` utility

## 3.5.1
###### *July 30, 2020*

- utilities (monaco): correct config obj name

## 3.5.0
###### *July 30, 2020*

- utilities (monaco): redesign utility `monaco`; get rid of class, make it more fp
- utilities: create `compose` utility
- utilities: create `store` utility; for internal usage (in other utilities)

## 3.4.2
###### *July 15, 2020*

- controlled editor: fix undo/redo issue

## 3.4.1
###### *July 3, 2020*

- editor: improve initialization error handling

## 3.4.0
###### *June 28, 2020*

- editor: fix 'readOnly' option check
- editor: add className and wrapperClassName props
- diffEditor: add className and wrapperClassName props

## 3.3.2
###### *June 20, 2020*

- utils: (monaco) add a possibility to pass src of config script

## 3.3.1
###### *May 30, 2020*

- editor: add overrideServices prop

## 3.2.1
###### *Apr 13, 2020*

- package: update default package version to 0.20.0

## 3.2.1
###### *Mar 31, 2020*

- types: fix monaco.config types

## 3.2.0
###### *Mar 31, 2020*

- fix: check the existence of target[key] in deepMerge
- config: deprecate indirect way of configuration and add deprecation message
- config: create a new structure of the configuration; the passed object will be directly passed to require.config
- readme: redesign the config section according to the new structure

## 3.1.2
###### *Mar 16, 2020*

- diff editor: remove line prop as it's not used (and can't be used)

## 3.1.1
###### *Feb 25, 2020*

- package: update devDependencies
- demo: update all dependencies

## 3.1.0
###### *Feb 6, 2020*

- monaco: update monaco version to 0.19.0
- utils: create new util - makeCancelable (for promises)
- editor/diffEditor: cancel promise before unmount
- demo: make "dark" default theme, update package version

## 3.0.1
###### *Dec 26, 2019*

- readme: update installation section

## 3.0.0
###### *Dec 24, 2019*

- monaco: update monaco version to 0.19.0

## 2.6.1
###### *Dec 23, 2019*

- versions: fix version

## 2.5.1
###### *Dec 23, 2019*

- types: fix type of "loading"

## 2.5.0
###### *Dec 19, 2019*

- types: fix type of theme; user should be able to pass any kind of theme (string)

## 2.4.0
###### *Dec 11, 2019*

- types: add config into namespace monaco
- types: change type of "loading" from React.ElementType to React.ReactNode

## 2.3.5
###### *Dec 10, 2019*

- optimize babel build with runtime transform

## 2.3.4
###### *Dec 10, 2019*

- add xxx.spec.js.snap files to npmignore

## 2.3.2 & 3
###### *Dec 10, 2019*

- fix typo in npmignore

## 2.3.1
###### *Dec 10, 2019*

- add unnecessary files to npmignore

## 2.3.0
###### *Nov 9, 2019*

- prevent onchange in case of undo/redo (controlled editor)
- create separate component for MonacoContainer

## 2.2.0
###### *Nov 9, 2019*

- force additional tokenization in controlled mode to avoid blinking

## 2.1.1
###### *Oct 25, 2019*

- fix "options" types

## 2.1.0
###### *Oct 25, 2019*

- add monaco-editor as peer dependency for proper type definitions
- write more proper types

## 2.0.0
###### *Oct 9, 2019*

- set the default version of monaco to 0.18.1
- set last value by .setValue method before changing the language

## 1.2.3
###### *Oct 7, 2019*

- (TYPES) add "void" to the "ControlledEditorOnChange" return types

## 1.2.2
###### *Oct 3, 2019*

- update dev dependencies
- check editor existence in "removeEditor" function
- replace "jest-dom" with "@testing-library/jest-dom"

## 1.2.1
###### *Aug 20, 2019*

- Set editor value directly in case of read only

## 1.2.0
###### *Aug 16, 2019*

- Add method to modify default config

## 1.1.0
###### *July 26, 2019*

- Apply edit by using `executeEdits` method
- Correct ControlledEditor usage examples in Docs

## 1.0.8
###### *July 24, 2019*

- Export utility 'monaco' to be able to access to the monaco instance

## 1.0.7
###### *July 21, 2019*

- Add controlled version of editor component

## 1.0.5
###### *July 19, 2019*

- Add a possibility to interact with Editor before it is mounted

## 1.0.4
###### *July 13, 2019*

 - FIX: add "types" fild to package.json

## 1.0.3
###### *July 13, 2019*

 - Add basic support for TypeScript

## 1.0.2
###### *June 26, 2019*

 - Update package description

## 1.0.1
###### *June 26, 2019*

 - Move from 'unpkg.com' to 'cdn.jsdelivr.net' (NOTE: in the future, it will be configurable)

## 1.0.0
###### *June 25, 2019*

:tada: First stable version :tada:

 - Add monaco version to CDN urls to avoid 302 redirects

## 0.0.3
###### *June 22, 2019*

 - Remove redundant peer dependency

## 0.0.2
###### *June 22, 2019*

 - Make text-align of the wrapper of editors independent from outside

## 0.0.1
###### *June 21, 2019*

First version of the library
