import loader from '@monaco-editor/loader';
export { loader };

import DiffEditor from './DiffEditor';
export * from './DiffEditor/types';
export { DiffEditor };

import useMonaco from './hooks/useMonaco';
export { useMonaco };

import Editor from './Editor';
export * from './Editor/types';
export { Editor };
export default Editor;

// Monaco
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
export type Monaco = typeof monaco;

// Default themes
export type Theme = 'vs-dark' | 'light';
