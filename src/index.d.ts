// TODO: the whole content should be improved in the next version.

import * as React from "react";
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';

// default themes
type Theme =
  | "dark"
  | "light";

// Editor

export type EditorDidMount = (
  getEditorValue: () => string,
  editor: monacoEditor.editor.IStandaloneCodeEditor,
) => void;

export interface EditorProps {
  /**
   * The editor value
   */
  value?: string | null;

  /**
   * All languages that are supported by monaco-editor
   */
  language?: string;

  /**
   * Signature: function(getEditorValue: func, editor: object) => void
   * This function will be called right after monaco editor will be mounted and ready to work.
   * It gets the editor instance as a second argument. Defaults to "noop"
   */
  editorDidMount?: EditorDidMount;

  /**
   * Default themes of monaco. Defaults to "light"
   */
  theme?: Theme | string;

  /**
   * The line to jump on it
   */
  line?: number;

  /**
   * The width of the editor wrapper. Defaults 100%
   */
  width?: number | string;

  /**
   * The height of the editor wrapper. Defaults 100%
   */
  height?: number | string;

  /**
   * The loading screen before the editor will be loaded. Defaults 'loading...'
   */
  loading?: React.ReactNode;

  /**
   * IEditorConstructionOptions
   */
  options?: monacoEditor.editor.IEditorConstructionOptions;

  /**
   * IEditorOverrideServices
   */
  overrideServices?: monacoEditor.editor.IEditorOverrideServices;

  /**
   * Class name for the editor container
   */
  className?: string;

  /**
   * Class name for the editor container wrapper
   */
  wrapperClassName?: string;
}

declare const Editor: React.FC<EditorProps>;

export default Editor;

// Controlled Editor

export type ControlledEditorOnChange = (
  ev: monacoEditor.editor.IModelContentChangedEvent,
  value: string | undefined,
) => string | void;

export interface ControlledEditorProps extends EditorProps {
  /**
   * Signature: function(ev: monacoEditor.editor.IModelContentChangedEvent, value: string | undefined) => string | undefined;
   * onChange method of monaco editor. It will be called right after content of current model will be changed.
   * It gets two arguments: first one is the "event" object of monaco, second one the current value
   * NOTE: onChange can return the new value, which will be inserted to editor
   */
  onChange?: ControlledEditorOnChange;
}

declare const ControlledEditor: React.FC<ControlledEditorProps>;

export { ControlledEditor };

// Diff Editor

export type DiffEditorDidMount = (
  getModifiedEditorValue: () => string,
  getOriginalEditorValue: () => string,
  editor: monacoEditor.editor.IStandaloneDiffEditor,
) => void;

export interface DiffEditorProps {
  /**
   * The original source (left one) value
   */
  original?: string | null;

  /**
   * The modified source (right one) value
   */
  modified?: string | null;

  /**
   * All languages that are supported by monaco-editor
   */
  language?: string;

  /**
   * This prop gives you the opportunity to specify the language of the
   * original source separately, otherwise, it will get the value of language property.
   * (Possible values are the same as language)
   */
  originalLanguage?: string;

  /**
   * This prop gives you the opportunity to specify the language of the
   * modified source separately, otherwise, it will get the value of language property.
   * (Possible values are the same as language)
   */
  modifiedLanguage?: string;

  /**
   * Signature: function(getModifiedEditorValue: func, getOriginalEditorValue: func, editor: object) => void
   * This function will be called right after monaco editor will be mounted and ready to work.
   * It gets the editor instance as a third argument
   */
  editorDidMount?: DiffEditorDidMount;

  /**
   * Default themes of monaco. Defaults to "light"
   */
  theme?: Theme;

  /**
   * The line to jump on it
   */
  line?: number;

  /**
   * The width of the editor wrapper. Defaults 100%
   */
  width?: number | string;

  /**
   * The height of the editor wrapper. Defaults 100%
   */
  height?: number | string;

  /**
   * The loading screen before the editor will be loaded. Defaults 'loading...'
   */
  loading?: React.ReactNode;

  /**
   * IDiffEditorConstructionOptions
   */
  options?: monacoEditor.editor.IDiffEditorConstructionOptions;

  /**
   * Class name for the editor container
   */
  className?: string;

  /**
   * Class name for the editor container wrapper
   */
  wrapperClassName?: string;
}

declare const DiffEditor: React.FC<DiffEditorProps>;

export { DiffEditor };

// monaco

export type Monaco = typeof monacoEditor;

declare namespace monaco {
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

export { monaco };
