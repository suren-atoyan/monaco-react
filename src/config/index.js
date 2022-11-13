const config = {
  links: {
    github: "https://github.com/SurenAt93/monaco-react",
  },

  notifications: {
    props: {
      anchorOrigin: { vertical: "top", horizontal: "right" },
      autoHideDuration: 2500,
    },
    defaultState: {
      isActive: false,
      message: "",
      variant: "info",
      opt: {},
    },
  },

  messages: {
    errorBoundary: {
      somethingWentWrong:
        "Oooops... Sorry, I guess, something went wrong. You can:",
      resetApp: "Press here to reset the application",
      openIssue: "Press here to open issue about it on GitHub",
    },
    invalidOptions:
      "Seems like options file is not a valid json, please double check it.",
  },

  urls: {
    octocatIcon: "/icons/octocat.png",
    themeModeIcon: "/icons/theme-mode.png",
  },

  supportedLanguages: [
    { id: 1, name: "c" },
    { id: 2, name: "cpp" },
    { id: 3, name: "csharp" },
    { id: 4, name: "go" },
    { id: 5, name: "java" },
    { id: 6, name: "javascript" },
    { id: 7, name: "php" },
    { id: 8, name: "python" },
    { id: 9, name: "r" },
  ],
};

export default config;
