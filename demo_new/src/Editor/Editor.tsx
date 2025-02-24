import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { useMediaQuery } from 'usehooks-ts';
import MonacoEditor from '@monaco-editor/react';
import { Container, EditorContainer } from './styled';
import Settings from './Settings';

// long code for demo
// code shows a standard library (std) implementation in js
const code = `// the code example from https://github.com/suren-atoyan/state-local

import { compose, curry, isFunction } from '../utils';
import validators from '../validators';

function create(initial, handler = {}) {
  validators.initial(initial);
  validators.handler(handler);

  const state = { current: initial };

  const didUpdate = curry(didStateUpdate)(state, handler);
  const update = curry(updateState)(state);
  const validate = curry(validators.changes)(initial);
  const getChanges = curry(extractChanges)(state);

  function getState(selector = state => state) {
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(
      didUpdate,
      update,
      validate,
      getChanges,
    )(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges)
    ? causedChanges(state.current)
    : causedChanges;
}

function updateState(state, changes) {
  state.current = { ...state.current, ...changes };

  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler)
    ? handler(state.current)
    : Object.keys(changes)
        .forEach(field => handler[field]?.(state.current[field]));

  return changes;
}

export { create };
`;

function Editor() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  if (isDesktop) {
    return (
      <Container>
        <PanelGroup direction="horizontal">
          <Panel minSize={20}>
            <EditorContainer>
              <MonacoEditor
                height="100%"
                value={code}
                options={{
                  automaticLayout: true,
                  scrollbar: {
                    alwaysConsumeMouseWheel: false,
                  },
                }}
                language="javascript"
                theme="vs-dark"
              />
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
        <MonacoEditor
          height="100%"
          value={code}
          options={{
            automaticLayout: true,
            scrollbar: {
              alwaysConsumeMouseWheel: false,
            },
          }}
          language="javascript"
          theme="vs-dark"
        />
      </EditorContainer>
    </Container>
  );
}

export default Editor;
