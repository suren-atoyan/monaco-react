import { ChangeEvent, useRef } from 'react';
import MonacoEditor, { Monaco } from '@monaco-editor/react';
import { useAtom } from 'jotai';
import monacoThemes from 'monaco-themes/themes/themelist';
import toast from 'react-hot-toast';
import type { editor } from 'monaco-editor';
import { Button } from '../../styled';
import { EditorContainer } from '../styled';
import { Container, Description, Select, SubTitle, Title, Section } from './styled';
import { languageAtom, optionsAtom, themeAtom } from '../atoms';
import { defaultThemes, Language } from '../../config';
import {
  defineTheme,
  generateDefaultOptionsJson,
  generateOptionsJsonSchema,
  MonacoOption,
} from './utils';

function Settings() {
  const [language, setLanguage] = useAtom(languageAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  const [options, setOptions] = useAtom(optionsAtom);
  const editorRef = useRef<editor.IStandaloneCodeEditor>(null);

  function applyOptions() {
    try {
      setOptions(JSON.parse(editorRef.current?.getValue() || ''));
      toast('Options applied', {
        icon: '🚀',
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    } catch {
      toast('Options are not valid JSON', {
        icon: '❌',
        style: { background: '#333', color: '#fff' },
      });
    }
  }

  function selectLanguage(ev: ChangeEvent<HTMLSelectElement>) {
    setLanguage(ev.target.value as Language);
  }

  async function selectTheme(ev: ChangeEvent<HTMLSelectElement>) {
    const theme = ev.target.value;

    if (!defaultThemes.includes(theme)) {
      await defineTheme(theme);
    }

    setTheme(theme);
  }

  function handleDidMount(editor: editor.IStandaloneCodeEditor, monaco: Monaco) {
    editorRef.current = editor;

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      setOptions(JSON.parse(editor.getValue()));
    });
  }

  function handleWillMount(monaco: Monaco) {
    const options = generateDefaultOptionsJson(
      monaco.editor.EditorOptions as unknown as MonacoOption[],
    );

    setOptions(options);

    const jsonSchema = generateOptionsJsonSchema(
      monaco.editor.EditorOptions as unknown as MonacoOption[],
    );

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'monaco-editor-options-schema.json',
          fileMatch: ['monaco-editor-options.json'],
          schema: jsonSchema,
        },
      ],
    });
  }

  return (
    <Container>
      <Title>Settings</Title>

      <Section>
        <SubTitle>Languages</SubTitle>
        <Select value={language} onChange={selectLanguage}>
          {Object.values(Language).map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </Select>
      </Section>
      <Section>
        <SubTitle>Themes</SubTitle>
        <Select value={theme} onChange={selectTheme}>
          <option disabled>Default Themes</option>
          {defaultThemes.map((theme) => (
            <option key={theme}>{theme}</option>
          ))}
          <option disabled>Custom Themes</option>
          {Object.entries(monacoThemes).map(([themeName, themeId]) => (
            <option key={themeId}>{themeName}</option>
          ))}
        </Select>
      </Section>
      <Section>
        <SubTitle>Options</SubTitle>
        <Description>
          For more information on options, visit the{' '}
          <a
            href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html"
            target="_blank"
            rel="noreferrer"
          >
            Monaco Editor documentation
          </a>
        </Description>
        <EditorContainer>
          <MonacoEditor
            height={450}
            value={JSON.stringify(options, null, 2)}
            options={{
              automaticLayout: true,
              scrollbar: {
                alwaysConsumeMouseWheel: false,
              },
            }}
            language="json"
            theme="vs-dark"
            path="monaco-editor-options.json"
            onMount={handleDidMount}
            beforeMount={handleWillMount}
          />
        </EditorContainer>
        <Button sx={{ marginTop: 8 }} onClick={applyOptions}>
          Apply
        </Button>
      </Section>
    </Container>
  );
}

export default Settings;
