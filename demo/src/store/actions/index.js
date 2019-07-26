const setIsEditorReady = ({ state }, isReady) => {
  state.isEditorReady = isReady;
};

const setThemeMode = ({ state }, themeMode) => {
  state.themeMode = themeMode;
  localStorage.setItem('themeMode', themeMode); // Current solution is temporary
  // TODO: Design proper solution
  // to sync state (or a field of state) with localStorage
};

const showNotification = ({ state }, { message, variant = 'info', opt = {} }) => {
  state.notifications = {
    isActive: true,
    message,
    variant,
    opt,
  }; // now designed for only one message
};

const hideNotification = ({ state }) => {
  state.notifications.isActive = false;
};

const setSelectedLanguageId = type => ({ state }, id) => {
  state[type].selectedLanguageId = id;
};

const editor = {
  setSelectedLanguageId: setSelectedLanguageId('editor'),
  setOptions({ state }, options) {
    state.editor.options = options;
  },
  setMonacoTheme({ state }, theme) {
    state.monacoTheme = theme;
  },
};

const diffEditor = {
  setSelectedLanguageId: setSelectedLanguageId('diffEditor'),
};

export {
  hideNotification,
  setThemeMode,
  setIsEditorReady,
  showNotification,
  editor, diffEditor,
};
