import * as React from "react";

type Theme =
  | "dark"
  | "light";

// Editor

export type EditorDidMount = (
  getEditorValue: () => string,
  monaco: any,
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
   * Signature: function(getEditorValue: func, monaco: object) => void 
   * This function will be called right after monaco editor will be mounted and ready to work.
   * It will get the editor instance as a second argument. Defaults to "noop"
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
  loading?: React.Element | string;

  /**
   * IEditorOptions
   */
  options?: object;
}

declare const Editor: React.FC<EditorProps>;

export default Editor;

// Diff Editor

export type DiffEditorDidMount = (
  getOriginalEditorValue: () => string,
  getModifiedEditorValue: () => string,
  monaco: any,
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
   * Signature: function(getOriginalEditorValue: func, getModifiedEditorValue: func, monaco: object) => void
   * This function will be called right after monaco editor will be mounted and ready to work.
   * It will get the editor instance as a third argument
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
  loading?: React.Element | string;

  /**
   * IDiffEditorOptions
   */
  options?: object;
}

declare const DiffEditor: React.FC<DiffEditorProps>;

export { DiffEditor };
