import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import githubMarkIcon from './assets/github-mark.svg';
import monacoReactLogo from './assets/logo.svg';
import Editor from './Editor';
import DiffEditor from './DiffEditor';
import { Actions, Body, Button, Container, GitHubButton, Header } from './styled';
import ErrorBoundary from './ErrorBoundary';

enum EditorMode {
  Editor = 'editor',
  DiffEditor = 'diff-editor',
}

function App() {
  const [editorMode, setEditorMode] = useState(EditorMode.Editor);

  return (
    <ErrorBoundary>
      <Container>
        <Header>
          <img src={monacoReactLogo} alt="Monaco React" height={32} />
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
            <GitHubButton
              onClick={() => window.open('https://github.com/suren-atoyan/monaco-react', '_blank')}
            >
              <img src={githubMarkIcon} alt="GitHub" />
            </GitHubButton>
          </Actions>
        </Header>

        <Body>{editorMode === EditorMode.Editor ? <Editor /> : <DiffEditor />}</Body>
      </Container>
      <Toaster />
    </ErrorBoundary>
  );
}

export default App;
