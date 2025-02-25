import MonacoEditor from '@monaco-editor/react';
import { useAtom } from 'jotai';
import monacoThemes from 'monaco-themes/themes/themelist';
import { Button } from '../../styled';
import { EditorContainer } from '../styled';
import { Container, Description, Select, SubTitle, Title, Section } from './styled';
import { languageAtom, themeAtom } from '../atoms';
import { defaultThemes, Language } from '../../config';
import { defineTheme } from './utils';

const options = {
  acceptSuggestionOnCommitCharacter: true,
  acceptSuggestionOnEnter: 'on',
  accessibilityPageSize: 1000,
  accessibilitySupport: 'auto',
  ariaLabel: 'Editor',
  ariaRequired: false,
  autoClosingBrackets: 'languageDefined',
  autoClosingComments: 'languageDefined',
  autoClosingDelete: 'auto',
  autoClosingOvertype: 'auto',
  autoClosingQuotes: 'auto',
  autoIndent: 'advanced',
  autoSurround: 'languageDefined',
  automaticLayout: true,
  bracketPairColorization: {
    enabled: false,
  },
};

function Settings() {
  const [language, setLanguage] = useAtom(languageAtom);
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <Container>
      <Title>Settings</Title>

      <Section>
        <SubTitle>Languages</SubTitle>
        <Select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value as Language);
          }}
        >
          {Object.values(Language).map((lang) => (
            <option key={lang}>{lang}</option>
          ))}
        </Select>
      </Section>
      <Section>
        <SubTitle>Themes</SubTitle>
        <Select
          value={theme}
          onChange={async (e) => {
            const theme = e.target.value;

            if (!defaultThemes.includes(theme)) {
              await defineTheme(theme);
            }

            setTheme(theme);
          }}
        >
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
          />
        </EditorContainer>
        <Button sx={{ marginTop: 8 }}>Apply</Button>
      </Section>
    </Container>
  );
}

export default Settings;
