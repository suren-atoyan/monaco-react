// TODO: the whole content should be improved in the next version.

import * as React from 'react';
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';

// default themes
type Theme =
  | 'dark'
  | 'light';

// monaco
export type Monaco = typeof monacoEditor;

// Editor
export type OnMount = (
  editor: monacoEditor.editor.IStandaloneCodeEditor,
  monaco: Monaco,
) => void;

export type BeforeMount = (
  monaco: Monaco,
) => void;

export type OnChange = (
  value: string | undefined,
  ev: monacoEditor.editor.IModelContentChangedEvent,
) => void;

export interface EditorProps {
  /**
   * The initial value of the default (auto created) model
   */
  defaultValue?: string;

  /**
   * Value of the current model
   */
  value?: string;

  /**
   * Language of the current model
   */
  language?: string;

  /**
   * path for the default (auto create) model
   * will be passed as a third argument to `.createModel` method
   * `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultModelPath))`
   */
  defaultModelPath?: string;

  /**
   * The theme for the monaco
   * Available options "vs-dark" | "light"
   * Define new themes by `monaco.editor.defineTheme`
   * Defaults to "light"
   */
  theme?: Theme | string;

  /**
   * The line to jump on it
   */
  line?: number;

  /**
   * The loading screen before the editor will be mounted
   * Defaults to 'loading...'
   */
  loading?: React.ReactNode;

  /**
   * IStandaloneEditorConstructionOptions
   */
  options?: monacoEditor.editor.IStandaloneEditorConstructionOptions;

  /**
   * IEditorOverrideServices
   */
  overrideServices?: monacoEditor.editor.IEditorOverrideServices;

  /**
   * Width of the editor wrapper
   * Defaults to 100%
   */
  width?: number | string;

  /**
   * Height of the editor wrapper
   * Defaults to 100%
   */
  height?: number | string;

  /**
   * Class name for the editor container
   */
  className?: string;

  /**
   * Class name for the editor container wrapper
   */
  wrapperClassName?: string;

  /**
   * Signature: function(monaco: object) => void
   * An event emitted before the editor mounted
   * It gets the monaco instance as a first argument
   * Defaults to "noop"
   */
  beforeMount?: BeforeMount;

  /**
   * Signature: function(editor: object, monaco: object) => void
   * An event emitted when the editor has been mounted
   * It gets the editor instance as a first argument and the monaco instance as a second
   * Defaults to "noop"
   */
  onMount?: OnMount;

  /**
   * Signature: function(value: string | undefined, ev: monacoEditor.editor.IModelContentChangedEvent) => void
   * An event emitted when the content of the current model has changed
   */
  onChange?: ControlledEditorOnChange;
}

declare const Editor: React.FC<EditorProps>;

export default Editor;

// Diff Editor

export type DiffOnMount = (
  editor: monacoEditor.editor.IStandaloneDiffEditor,
  monaco: Monaco,
) => void;

export type DiffBeforeMount = (
  monaco: Monaco,
) => void;

export interface DiffEditorProps {
  /**
   * The original source (left one) value
   */
  original?: string;

  /**
   * The modified source (right one) value
   */
  modified?: string;

  /**
   * Language for the both models - original and modified
   */
  language?: string;

  /**
   * This prop gives you the opportunity to specify the language of the
   * original source separately, otherwise, it will get the value of the language property
   */
  originalLanguage?: string;

  /**
   * This prop gives you the opportunity to specify the language of the
   * modified source separately, otherwise, it will get the value of language property
   */
  modifiedLanguage?: string;

  /**
   * path for the "original" model
   * will be passed as a third argument to `.createModel` method
   * `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultModelPath))`
   */
  originalModelPath?: string;

  /**
   * path for the "modified" model
   * will be passed as a third argument to `.createModel` method
   * `monaco.editor.createModel(..., ..., monaco.Uri.parse(defaultModelPath))`
   */
  modifiedModelPath?: string;

  /**
   * The theme for the monaco
   * Available options "vs-dark" | "light"
   * Define new themes by `monaco.editor.defineTheme`
   * Defaults to "light"
   */
  theme?: Theme | string;

  /**
   * The loading screen before the editor will be mounted
   * Defaults to 'loading...'
   */
  loading?: React.ReactNode;

  /**
   * IDiffEditorConstructionOptions
   */
  options?: monacoEditor.editor.IDiffEditorConstructionOptions;

  /**
   * Width of the editor wrapper
   * Defaults to 100%
   */
  width?: number | string;

  /**
   * Height of the editor wrapper
   * Defaults to 100%
   */
  height?: number | string;

  /**
   * Class name for the editor container
   */
  className?: string;

  /**
   * Class name for the editor container wrapper
   */
  wrapperClassName?: string;

  /**
   * Signature: function(monaco: object) => void
   * An event emitted before the editor mounted
   * It gets the monaco instance as a first argument
   * Defaults to "noop"
   */
  beforeMount?: DiffBeforeMount;

  /**
   * Signature: function(editor: object, monaco: object) => void
   * An event emitted when the editor has been mounted
   * It gets the editor instance as a first argument and the monaco instance as a second
   * Defaults to "noop"
   */
  onMount?: DiffOnMount;
}

declare const DiffEditor: React.FC<DiffEditorProps>;

export { DiffEditor };

// loader
declare namespace loader {
  function init(): Promise<Monaco>;
  function config(params: {
    paths?: {
      vs?: string,
    },
    'vs/nls'?: {
      availableLanguages?: object,
    },
  }): void
}

export { loader };
