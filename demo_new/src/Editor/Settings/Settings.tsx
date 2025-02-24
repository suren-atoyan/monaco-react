import { Button } from '../../styled';
import { EditorContainer } from '../styled';
import { Container, Description, Select, SubTitle, Title, Section } from './styled';
import MonacoEditor from '@monaco-editor/react';

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
  return (
    <Container>
      <Title>Settings</Title>

      <Section>
        <SubTitle>Languages</SubTitle>
        <Select>
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>Python</option>
          <option>Java</option>
          <option>Go</option>
          <option>PHP</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>SCSS</option>
          <option>JSON</option>
          <option>YAML</option>
          <option>Markdown</option>
        </Select>
      </Section>
      <Section>
        <SubTitle>Themes</SubTitle>
        <Select>
          <option>Light</option>
          <option>Dark</option>
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
