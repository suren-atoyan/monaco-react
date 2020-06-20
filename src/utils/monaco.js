import config from '../config';
import { deepMerge, makeCancelable } from '../utils';

class Monaco {
  constructor({ src, ...config }) {
    this.configScriptSrc = src;
    this.__config = config;
  }

  config({ src, ...config } = {}) {
    this.configScriptSrc = src;

    this.__config = deepMerge(
      this.__config,
      this.validateConfig(config),
    );

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

  handleConfigScriptLoad = _ => {
    document.removeEventListener('monaco_init', this.handleConfigScriptLoad);
    this.resolve(window.monaco);
  }

  createScript(src) {
    const script = document.createElement('script');
    return (src && (script.src = src), script);
  }

  createMonacoLoaderScript(configScript) {
    const loaderScript = this.createScript(`${this.__config.paths.vs}/loader.js`);
    loaderScript.onload = _ => this.injectScripts(configScript);

    loaderScript.onerror = this.reject;

    return loaderScript;
  }

  createConfigScript() {
    const configScript = this.createScript();

    if (this.configScriptSrc) {
      // it will be helpfull in case of CSP, which doesn't allow
      // inline script execution
      configScript.src = this.configScriptSrc;
    } else {
      configScript.innerHTML = `
        require.config(${JSON.stringify(this.__config)});
        require(['vs/editor/editor.main'], function() {
          document.dispatchEvent(new Event('monaco_init'));
        });
      `;
    }

    configScript.onerror = this.reject;

    return configScript;
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

      document.addEventListener('monaco_init', this.handleConfigScriptLoad);

      const configScript = this.createConfigScript();

      const loaderScript = this.createMonacoLoaderScript(configScript);

      this.injectScripts(loaderScript);
    }

    this.isInitialized = true;

    return makeCancelable(this.wrapperPromise);
  }
}

export default new Monaco(config);
