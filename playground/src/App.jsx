import React from 'react';

import Editor from '../../lib/es';

function App() {
  return (
    <Editor
      height="100vh"
      language="javascript"
      value="// some comment"
    />
  );
}

export default App;
