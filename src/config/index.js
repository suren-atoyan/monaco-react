const config = {
  urls: {
    monacoLoader: '/monaco-editor/vs/loader.js',
    monacoBase: '/monaco-editor/vs',
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
