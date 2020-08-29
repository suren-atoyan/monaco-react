import { monaco } from '@monaco-editor/react';
import monacoThemes from 'monaco-themes/themes/themelist';

const defineTheme = theme => {
  return new Promise(res => {
    Promise.all(
      [
        monaco.init(),
        import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
      ]
    ).then(
      ([monaco, themeData]) => {
        monaco.editor.defineTheme(theme, themeData);
        res();
      }
    );
  });
};

export { defineTheme };
