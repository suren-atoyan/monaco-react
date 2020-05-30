### Versions

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
