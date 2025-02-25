import { DiffEditor as MonacoDiffEditor } from '@monaco-editor/react';

import diffExample from '../config/diff';
import { useAtomValue } from 'jotai';
import { themeAtom } from '../Editor/atoms';
import { EditorContainer } from '../Editor/styled';

function DiffEditor() {
  const theme = useAtomValue(themeAtom);

  return (
    <EditorContainer>
      <MonacoDiffEditor
        height="100vh"
        theme={theme}
        original={diffExample.original}
        modified={diffExample.modified}
        language="markdown"
      />
    </EditorContainer>
  );
}

export default DiffEditor;
