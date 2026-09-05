import React, { useEffect, useState } from 'react';
import { render, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Editor from '.';

/**
 * What a controlled `value` may and may not write over.
 *
 * A parent that feeds `value` from `onChange` is always at least one render
 * behind the editor, so a prop can arrive holding text the editor has already
 * moved on from. Writing that back replaces the whole model: it reverts the
 * edits made since, collapses every decoration tracking them onto one point, and
 * reports nothing, because the write suppresses onChange.
 */

// vi.mock is hoisted above the imports, so the stand-in and the assertions have
// to share state through vi.hoisted to be looking at the same objects.
const stub = vi.hoisted(() => ({
  modelValue: '',
  contentListener: null as ((event: unknown) => void) | null,
  executeEdits: vi.fn(),
  setValue: vi.fn(),
}));

vi.mock('@monaco-editor/loader', () => {
  const model = {
    getFullModelRange: () => ({}),
    uri: { path: '' },
    dispose: () => undefined,
  };
  const editor = {
    getValue: () => stub.modelValue,
    setValue: (text: string) => stub.setValue(text),
    executeEdits: (source: string, edits: unknown[]) => stub.executeEdits(source, edits),
    pushUndoStop: () => undefined,
    getOption: () => false,
    getModel: () => model,
    setModel: () => undefined,
    onDidChangeModelContent: (callback: (event: unknown) => void) => {
      stub.contentListener = callback;
      return { dispose: () => undefined };
    },
    restoreViewState: () => undefined,
    saveViewState: () => undefined,
    revealLine: () => undefined,
    updateOptions: () => undefined,
    dispose: () => undefined,
  };
  const monaco = {
    editor: {
      create: () => editor,
      createModel: () => model,
      getModel: () => null,
      setModelLanguage: () => undefined,
      setTheme: () => undefined,
      onDidChangeMarkers: () => ({ dispose: () => undefined }),
      getModelMarkers: () => [],
      EditorOption: { readOnly: 'readOnly' },
    },
    Uri: { parse: (path: string) => ({ path }) },
  };

  return {
    default: {
      init: () => Object.assign(Promise.resolve(monaco), { cancel: () => undefined }),
    },
  };
});

const harness: { setValue: (value: string) => void } = { setValue: () => undefined };

function Harness({ initial }: { initial: string }) {
  const [value, setStateValue] = useState(initial);

  useEffect(() => {
    harness.setValue = setStateValue;
  }, []);

  // onChange is deliberately not wired back to the state: these tests drive the
  // prop by hand so a render can be held behind the model on purpose.
  return <Editor value={value} onChange={() => undefined} />;
}

// An edit: the model moves on, and the editor tells its consumer about it.
function type(text: string) {
  act(() => {
    stub.modelValue = text;
    stub.contentListener?.({});
  });
}

async function renderEditor(initial: string) {
  stub.modelValue = initial;
  render(<Harness initial={initial} />);
  await waitFor(() => expect(stub.contentListener).not.toBeNull());
}

describe('<Editor /> controlled value', () => {
  beforeEach(() => {
    stub.executeEdits.mockClear();
    stub.setValue.mockClear();
    stub.contentListener = null;
    stub.modelValue = '';
  });

  it('does not write back a value the editor just emitted', async () => {
    await renderEditor('a');

    type('ab');
    act(() => harness.setValue('ab'));

    expect(stub.executeEdits).not.toHaveBeenCalled();
  });

  it('does not write back a value that lags several edits behind', async () => {
    await renderEditor('a');

    type('ab');
    type('abc');
    type('abcd');

    // Renders arriving behind the keystrokes, each carrying text the model has
    // already passed. Against the model these look like changes from outside.
    act(() => harness.setValue('ab'));
    act(() => harness.setValue('abc'));

    expect(stub.executeEdits).not.toHaveBeenCalled();
    expect(stub.modelValue).toBe('abcd');
  });

  it('writes a value that did not come from the editor', async () => {
    await renderEditor('a');

    type('ab');
    act(() => harness.setValue('ab'));

    act(() => harness.setValue('set from elsewhere'));

    expect(stub.executeEdits).toHaveBeenCalledTimes(1);
    expect(stub.executeEdits.mock.calls[0][1][0]).toMatchObject({
      text: 'set from elsewhere',
    });
  });

  it('leaves the model alone when the value already matches it', async () => {
    await renderEditor('a');

    act(() => harness.setValue('a'));

    expect(stub.executeEdits).not.toHaveBeenCalled();
  });
});
