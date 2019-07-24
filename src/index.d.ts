// TODO: the whole content should be improved in the next version.

import * as React from "react";

type Theme =
  | "dark"
  | "light";

// Editor

export type EditorDidMount = (
  getEditorValue: () => string,
  editor: any,
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
  loading?: React.ElementType | string;

  /**
   * IEditorOptions
   */
  options?: object;
}

declare const Editor: React.FC<EditorProps>;

export default Editor;

// Controlled Editor

export type ControlledEditorOnChange = (
  ev: any,
  value: string | undefined,
) => string | undefined;

export interface ControlledEditorProps extends EditorProps {
  /**
   * Signature: function(ev: any, value: string | undefined) => string | undefined;
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
  getOriginalEditorValue: () => string,
  getModifiedEditorValue: () => string,
  editor: any,
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
   * Signature: function(getOriginalEditorValue: func, getModifiedEditorValue: func, editor: object) => void
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
  loading?: React.ElementType | string;

  /**
   * IDiffEditorOptions
   */
  options?: object;
}

declare const DiffEditor: React.FC<DiffEditorProps>;

export { DiffEditor };

// monaco

export type Monaco = any;

declare namespace monaco {
  function init(): Promise<Monaco>;
}

export { monaco };
