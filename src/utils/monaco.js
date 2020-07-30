import defaultConfig from '../config';
import {
  compose,
  deepMerge,
  makeCancelable,
  store,
} from '../utils';

const { state, setState } = store({
  config: defaultConfig,
  isInitialized: false,
  configScriptSrc: null,
  resolve: null,
  reject: null,
});

const MONACO_INIT = 'monaco_init';

function config({ src, ...config }) {
  setState({
    configScriptSrc: src,
    config: deepMerge(
      defaultConfig,
      validateConfig(config),
    ),
  });
}

function init() {
  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      return Promise.resolve(window.monaco);
    }

    document.addEventListener(MONACO_INIT, handleConfigScriptLoad);

    compose(
      injectScriptsIntoBody,
      createMonacoLoaderScript,
      createConfigScript,
    )();

    setState({ isInitialized: true });
  }

  return makeCancelable(wrapperPromise);
}

function validateConfig(config) {
  if (config.urls) {
    informAboutDepreciation();
    return { paths: { vs: config.urls.monacoBase } };
  }

  return config;
}

function injectScripts(container) {
  return script => container.appendChild(script);
}

const injectScriptsIntoBody = injectScripts(document.body);

function createScript(src) {
  const script = document.createElement('script');
  return (src && (script.src = src), script);
}

function handleConfigScriptLoad() {
  document.removeEventListener(MONACO_INIT, handleConfigScriptLoad);
  state.resolve(window.monaco);
}

function createMonacoLoaderScript(configScript) {
  const loaderScript = createScript(`${state.config.paths.vs}/loader.js`);
  loaderScript.onload = () => injectScriptsIntoBody(configScript);

  loaderScript.onerror = state.reject;

  return loaderScript;
}

function createConfigScript() {
  const configScript = createScript();

  if (state.configScriptSrc) {
    // it will be helpfull in case of CSP, which doesn't allow
    // inline script execution
    configScript.src = state.configScriptSrc;
  } else {
    configScript.innerHTML = `
      require.config(${JSON.stringify(state.config)});
      require(['vs/editor/editor.main'], function() {
        document.dispatchEvent(new Event('monaco_init'));
      });
    `;
  }

  configScript.onerror = state.reject;

  return configScript;
}

function informAboutDepreciation() {
  console.warn(`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-react#config
  `);
}

const wrapperPromise = new Promise((resolve, reject) => setState({ resolve, reject }));

export default { config, init };
