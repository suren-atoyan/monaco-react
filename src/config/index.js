const config = {
  urls: {
    monacoLoader: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.17.1/min/vs/loader.js',
    monacoBase: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.17.1/min/vs'
  },

  theme: {
    'night-dark': {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#202124',
      },
    },
  },
}

export default config;
