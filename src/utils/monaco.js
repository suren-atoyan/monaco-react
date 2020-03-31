import config from '../config';
import { deepMerge, makeCancelable } from '../utils';

class Monaco {
  constructor(config = {}) {
    this.__config = config;
  }

  config(config) {
    if (config) {
      this.__config = deepMerge(
        this.__config,
        this.validateConfig(config),
      );
    }

    return this;
  }

  validateConfig(config) {
    if (config.urls) {
      this.informAboutDepreciation();
      return { paths: { vs: config.urls.monacoBase } };
    }

    return config;
  }

  informAboutDepreciation() {
    console.warn(`Deprecation warning!
      You are using deprecated way of configuration.

      Instead of using
        monaco.config({ urls: { monacoBase: '...' } })
      use
        monaco.config({ paths: { vs: '...' } })

      For more please check the link https://github.com/suren-atoyan/monaco-react#config
    `);
  }

  injectScripts(script) {
    document.body.appendChild(script);
  }

  handleMainScriptLoad = _ => {
    document.removeEventListener('monaco_init', this.handleMainScriptLoad);
    this.resolve(window.monaco);
  }

  createScript(src) {
    const script = document.createElement('script');
    return (src && (script.src = src), script);
  }

  createMonacoLoaderScript(mainScript) {
    const loaderScript = this.createScript(`${this.__config.paths.vs}/loader.js`);
    loaderScript.onload = _ => this.injectScripts(mainScript);

    loaderScript.onerror = this.reject;

    return loaderScript;
  }

  createMainScript() {
    const mainScript = this.createScript();

    mainScript.innerHTML = `
      require.config(${JSON.stringify(this.__config)});
      require(['vs/editor/editor.main'], function() {
        document.dispatchEvent(new Event('monaco_init'));
      });
    `;

    mainScript.onerror = this.reject;

    return mainScript;
  }

  isInitialized = false;

  wrapperPromise = new Promise((res, rej) => {
    this.resolve = res;
    this.reject = rej;
  });

  init() {
    if (!this.isInitialized) {
      if (window.monaco && window.monaco.editor) {
        return new Promise((res, rej) => res(window.monaco));
      }

      document.addEventListener('monaco_init', this.handleMainScriptLoad);

      const mainScript = this.createMainScript();

      const loaderScript = this.createMonacoLoaderScript(mainScript);

      this.injectScripts(loaderScript);
    }

    this.isInitialized = true;

    return makeCancelable(this.wrapperPromise);
  }
}

export default new Monaco(config);
