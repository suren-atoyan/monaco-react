import { monaco } from '@monaco-editor/react';

const defineTheme = theme => {
  return new Promise(res => {
    Promise.all(
      [
        monaco.init(),
        import(`monaco-themes/themes/${theme}.json`),
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
