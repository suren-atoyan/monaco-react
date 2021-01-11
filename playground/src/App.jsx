import React from 'react'

import Editor, { x } from '../../lib/es'

console.log(x);

function App() {
  return (
    <Editor
      height="100vh"
      language="javascript"
      value="// some comment"
    />
  )
}

export default App
