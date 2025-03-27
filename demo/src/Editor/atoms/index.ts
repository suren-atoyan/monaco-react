import { atom } from 'jotai';
import { Language } from '../../config';
import type { editor } from 'monaco-editor';

const languageAtom = atom<Language>(Language.YAML);

const themeAtom = atom('vs-dark');

const optionsAtom = atom<Partial<editor.IStandaloneEditorConstructionOptions>>({});

export { languageAtom, themeAtom, optionsAtom };
