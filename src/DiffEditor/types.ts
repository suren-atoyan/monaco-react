import { type editor } from 'monaco-editor';
import { type ReactNode } from 'react';
import { type Monaco } from '..';

export type MonacoDiffEditor = editor.IStandaloneDiffEditor;

export type DiffOnMount = (editor: MonacoDiffEditor, monaco: Monaco) => void;

export type DiffBeforeMount = (monaco: Monaco) => void;

export type DiffEditorProps = {
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
   * Path for the "original" model
   * Will be passed as a third argument to `.createModel` method
   * `monaco.editor.createModel(..., ..., monaco.Uri.parse(originalModelPath))`
   */
  originalModelPath?: string;

  /**
   * Path for the "modified" model
   * Will be passed as a third argument to `.createModel` method
   * `monaco.editor.createModel(..., ..., monaco.Uri.parse(modifiedModelPath))`
   */
  modifiedModelPath?: string;

  /**
   * Indicator whether to dispose the current original model when the DiffEditor is unmounted or not
   * @default false
   */
  keepCurrentOriginalModel?: boolean;

  /**
   * Indicator whether to dispose the current modified model when the DiffEditor is unmounted or not
   * @default false
   */
  keepCurrentModifiedModel?: boolean;


  /**
   * The loading screen before the editor will be mounted
   * @default "loading..."
   */
  loading?: ReactNode;

  /**
   * IDiffEditorConstructionOptions
   */
  options?: editor.IDiffEditorConstructionOptions;

  /**
   * Width of the editor wrapper
   * @default "100%"
   */
  width?: number | string;

  /**
   * Height of the editor wrapper
   * @default "100%"
   */
  height?: number | string;

  /**
   * Class name for the editor container
   */
  className?: string;

  /**
   * Props applied to the wrapper element
   */
  wrapperProps?: object;

  /**
   * Signature: function(monaco: Monaco) => void
   * An event is emitted before the editor is mounted
   * It gets the monaco instance as a first argument
   * Defaults to "noop"
   */
  beforeMount?: DiffBeforeMount;

  /**
   * Signature: function(editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => void
   * An event is emitted when the editor is mounted
   * It gets the editor instance as a first argument and the monaco instance as a second
   * Defaults to "noop"
   */
  onMount?: DiffOnMount;
};
