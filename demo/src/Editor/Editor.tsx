import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useAtomValue } from 'jotai';
import { useMediaQuery } from 'usehooks-ts';
import MonacoEditor from '@monaco-editor/react';
import { useState } from 'react';
import { Container, EditorContainer, ToggleButton } from './styled';
import Settings from './Settings';
import { languageAtom, optionsAtom, themeAtom } from './atoms';
import examples from '../config/examples';

function Editor() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const language = useAtomValue(languageAtom);
  const theme = useAtomValue(themeAtom);
  const options = useAtomValue(optionsAtom);
  const [showSettings, setShowSettings] = useState(false);

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
          <Panel minSize={50}>
            <EditorContainer>
              <MonacoEditor height="100%" {...editorProps} />
            </EditorContainer>
          </Panel>
          {showSettings && (
            <>
              <PanelResizeHandle className="resize-handle" hitAreaMargins={{ fine: 5, coarse: 5 }} />
              <Panel defaultSize={20} minSize={15}>
                <Settings />
              </Panel>
            </>
          )}
        </PanelGroup>
        <ToggleButton 
          onClick={() => setShowSettings(!showSettings)}
          title={showSettings ? '隐藏设置' : '显示设置'}
          $showSettings={showSettings}
        />
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
