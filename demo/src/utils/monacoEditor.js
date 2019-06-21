import config from 'config';

class Monaco {
  init() {

    // add more checks
    if (window.monaco && window.monaco.editor) {
      return new Promise((res, rej) => res(window.monaco));
    }

    document.addEventListener('monaco_init', this.handleMainScriptLoad);

    const mainScript = this.createMainScript();

    const loaderScript = this.createMonacoLoaderScript(mainScript);

    this.injectScripts(loaderScript);

    return new Promise((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
  }

  injectScripts(script) {
    document.body.appendChild(script);
  }

  handleMainScriptLoad = () => {
    document.removeEventListener('monaco_init', this.handleMainScriptLoad);
    this.resolve(window.monaco);
  }

  createScript(src) {
    const script = document.createElement('script');
    return (src && (script.src = src), script);
  }

  createMonacoLoaderScript(mainScript) {
    const loaderScript = this.createScript(config.urls.monacoLoader);
    loaderScript.onload = _ => this.injectScripts(mainScript);

    loaderScript.onerror = this.reject;

    return loaderScript;
  }

  createMainScript() {
    const mainScript = this.createScript();

    mainScript.innerHTML = `
      require.config({ paths: { 'vs': '/monaco-editor/vs' }});
      require(['vs/editor/editor.main'], function() {
        document.dispatchEvent(new Event('monaco_init'));
      });
    `;

    mainScript.onerror = this.reject;

    return mainScript;
  }
}

export default new Monaco();
