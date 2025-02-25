import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Editor from './Editor';
import DiffEditor from './DiffEditor';
import { Actions, Body, Button, Container, Header } from './styled';

enum EditorMode {
  Editor = 'editor',
  DiffEditor = 'diff-editor',
}

function App() {
  const [editorMode, setEditorMode] = useState(EditorMode.Editor);

  return (
    <>
      <Container>
        <Header>
          <h3>Monaco React</h3>
          <Actions>
            <Button
              onClick={() => setEditorMode(EditorMode.Editor)}
              disabled={editorMode === EditorMode.Editor}
            >
              Editor
            </Button>
            <Button
              onClick={() => setEditorMode(EditorMode.DiffEditor)}
              disabled={editorMode === EditorMode.DiffEditor}
            >
              Diff Editor
            </Button>
          </Actions>
        </Header>

        <Body>{editorMode === EditorMode.Editor ? <Editor /> : <DiffEditor />}</Body>
      </Container>
      <Toaster />
    </>
  );
}

export default App;
