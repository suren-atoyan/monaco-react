import { atom } from 'jotai';
import { Language } from '../../config';

const languageAtom = atom<Language>(Language.JAVASCRIPT);

const themeAtom = atom('vs-dark');

export { languageAtom, themeAtom };
