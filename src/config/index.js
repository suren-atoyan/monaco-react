const config = {
  urls: {
    monacoLoader: 'https://unpkg.com/monaco-editor@0.17.1/min/vs/loader.js',
    monacoBase: 'https://unpkg.com/monaco-editor@0.17.1/min/vs'
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
