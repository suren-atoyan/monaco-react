import React from "react";

import Editor from "../..";

function App() {
  return (
    <Editor
      height="100vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}

export default App;
