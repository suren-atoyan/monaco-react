import { loader } from '@monaco-editor/react';

// Themes should be imported like shown below
// import monacoThemes from 'monaco-themes/themes/themelist';
// But there is a build problem in server
// It's a temprorary solution

const monacoThemes = {"active4d":"Active4D","all-hallows-eve":"All Hallows Eve","amy":"Amy","birds-of-paradise":"Birds of Paradise","blackboard":"Blackboard","brilliance-black":"Brilliance Black","brilliance-dull":"Brilliance Dull","chrome-devtools":"Chrome DevTools","clouds-midnight":"Clouds Midnight","clouds":"Clouds","cobalt":"Cobalt","dawn":"Dawn","dreamweaver":"Dreamweaver","eiffel":"Eiffel","espresso-libre":"Espresso Libre","github":"GitHub","idle":"IDLE","katzenmilch":"Katzenmilch","kuroir-theme":"Kuroir Theme","lazy":"LAZY","magicwb--amiga-":"MagicWB (Amiga)","merbivore-soft":"Merbivore Soft","merbivore":"Merbivore","monokai-bright":"Monokai Bright","monokai":"Monokai","night-owl":"Night Owl","oceanic-next":"Oceanic Next","pastels-on-dark":"Pastels on Dark","slush-and-poppies":"Slush and Poppies","solarized-dark":"Solarized-dark","solarized-light":"Solarized-light","spacecadet":"SpaceCadet","sunburst":"Sunburst","textmate--mac-classic-":"Textmate (Mac Classic)","tomorrow-night-blue":"Tomorrow-Night-Blue","tomorrow-night-bright":"Tomorrow-Night-Bright","tomorrow-night-eighties":"Tomorrow-Night-Eighties","tomorrow-night":"Tomorrow-Night","tomorrow":"Tomorrow","twilight":"Twilight","upstream-sunburst":"Upstream Sunburst","vibrant-ink":"Vibrant Ink","xcode-default":"Xcode_default","zenburnesque":"Zenburnesque","iplastic":"iPlastic","idlefingers":"idleFingers","krtheme":"krTheme","monoindustrial":"monoindustrial"};

const defineTheme = theme => {
  return new Promise(res => {
    Promise.all(
      [
        loader.init(),
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
