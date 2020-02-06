import config from 'config';

const initalTheme = localStorage.getItem('themeMode') || 'dark';

const initialState = {
  themeMode: initalTheme,

  isEditorReady: false,

  notifications: config.notifications.defaultState,

  editor: {
    selectedLanguageId: 19, // 19 is the id of javasctipt
    options: {
      acceptSuggestionOnCommitCharacter: true,
      acceptSuggestionOnEnter: 'on',
      accessibilitySupport: 'auto',
      autoIndent: false,
      automaticLayout: true,
      codeLens: true,
      colorDecorators: true,
      contextmenu: true,
      cursorBlinking: 'blink',
      cursorSmoothCaretAnimation: false,
      cursorStyle: 'line',
      disableLayerHinting: false,
      disableMonospaceOptimizations: false,
      dragAndDrop: false,
      fixedOverflowWidgets: false,
      folding: true,
      foldingStrategy: 'auto',
      fontLigatures: false,
      formatOnPaste: false,
      formatOnType: false,
      hideCursorInOverviewRuler: false,
      highlightActiveIndentGuide: true,
      links: true,
      mouseWheelZoom: false,
      multiCursorMergeOverlapping: true,
      multiCursorModifier: 'alt',
      overviewRulerBorder: true,
      overviewRulerLanes: 2,
      quickSuggestions: true,
      quickSuggestionsDelay: 100,
      readOnly: false,
      renderControlCharacters: false,
      renderFinalNewline: true,
      renderIndentGuides: true,
      renderLineHighlight: 'all',
      renderWhitespace: 'none',
      revealHorizontalRightPadding: 30,
      roundedSelection: true,
      rulers: [],
      scrollBeyondLastColumn: 5,
      scrollBeyondLastLine: true,
      selectOnLineNumbers: true,
      selectionClipboard: true,
      selectionHighlight: true,
      showFoldingControls: 'mouseover',
      smoothScrolling: false,
      suggestOnTriggerCharacters: true,
      wordBasedSuggestions: true,
      // eslint-disable-next-line
      wordSeparators: `~!@#$%^&*()-=+[{]}\|;:'",.<>/?`,
      wordWrap: 'off',
      wordWrapBreakAfterCharacters: '\t})]?|&,;',
      wordWrapBreakBeforeCharacters: '{([+',
      wordWrapBreakObtrusiveCharacters: '.',
      wordWrapColumn: 80,
      wordWrapMinified: true,
      wrappingIndent: 'none',
    },
  },

  monacoTheme: initalTheme,

  diffEditor: {
    selectedLanguageId: 24, // 24 is the id of markdown
  },
};

export { initialState };
