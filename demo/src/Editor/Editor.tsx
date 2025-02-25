import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useAtomValue } from 'jotai';
import { useMediaQuery } from 'usehooks-ts';
import MonacoEditor from '@monaco-editor/react';
import { Container, EditorContainer } from './styled';
import Settings from './Settings';
import { languageAtom, optionsAtom, themeAtom } from './atoms';
import examples from '../config/examples';

function Editor() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const language = useAtomValue(languageAtom);
  const theme = useAtomValue(themeAtom);
  const options = useAtomValue(optionsAtom);

  const editorProps = {
    value: examples[language],
    language,
    theme,
    path: `${language}-example`,
    options: {
      automaticLayout: true,
      ...options,
      scrollbar: {
        alwaysConsumeMouseWheel: false,
        ...(options?.scrollbar || {}),
      },
    },
  };

  if (isDesktop) {
    return (
      <Container>
        <PanelGroup direction="horizontal">
          <Panel minSize={20}>
            <EditorContainer>
              <MonacoEditor height="100%" {...editorProps} />
            </EditorContainer>
          </Panel>
          <PanelResizeHandle className="resize-handle" hitAreaMargins={{ fine: 5, coarse: 5 }} />
          <Panel defaultSize={30} minSize={20}>
            <Settings />
          </Panel>
        </PanelGroup>
      </Container>
    );
  }

  return (
    <Container sx={{ flexDirection: 'column', gap: 16 }}>
      <Settings />
      <EditorContainer sx={{ minHeight: 900 }}>
        <MonacoEditor height="100%" {...editorProps} />
      </EditorContainer>
    </Container>
  );
}

export default Editor;
