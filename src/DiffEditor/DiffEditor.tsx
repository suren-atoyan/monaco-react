'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import loader from '@monaco-editor/loader';

import MonacoContainer from '../MonacoContainer';
import useMount from '../hooks/useMount';
import useUpdate from '../hooks/useUpdate';
import { noop, getOrCreateModel } from '../utils';
import { type DiffEditorProps, type MonacoDiffEditor } from './types';
import { type Monaco } from '..';

function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,
  originalModelPath,
  modifiedModelPath,
  keepCurrentOriginalModel = false,
  keepCurrentModifiedModel = false,
  loading = 'Loading...',
  options = {},
  height = '100%',
  width = '100%',
  className,
  wrapperProps = {},
  beforeMount = noop,
  onMount = noop,
}: DiffEditorProps) {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const editorRef = useRef<MonacoDiffEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onMountRef = useRef(onMount);
  const beforeMountRef = useRef(beforeMount);
  const preventCreation = useRef(false);

  useMount(() => {
    const cancelable = loader.init();

    cancelable
      .then((monaco) => (monacoRef.current = monaco) && setIsMonacoMounting(false))
      .catch(
        (error) =>
          error?.type !== 'cancelation' && console.error('Monaco initialization: error:', error),
      );

    return () => (editorRef.current ? disposeEditor() : cancelable.cancel());
  });

  useUpdate(
    () => {
      if (editorRef.current && monacoRef.current) {
        const originalEditor = editorRef.current.getOriginalEditor();
        const model = getOrCreateModel(
          monacoRef.current,
          original || '',
          originalLanguage || language || 'text',
          originalModelPath || '',
        );

        if (model !== originalEditor.getModel()) {
          originalEditor.setModel(model);
        }
      }
    },
    [originalModelPath],
    isEditorReady,
  );

  useUpdate(
    () => {
      if (editorRef.current && monacoRef.current) {
        const modifiedEditor = editorRef.current.getModifiedEditor();
        const model = getOrCreateModel(
          monacoRef.current,
          modified || '',
          modifiedLanguage || language || 'text',
          modifiedModelPath || '',
        );

        if (model !== modifiedEditor.getModel()) {
          modifiedEditor.setModel(model);
        }
      }
    },
    [modifiedModelPath],
    isEditorReady,
  );

  useUpdate(
    () => {
      const modifiedEditor = editorRef.current!.getModifiedEditor();
      if (modifiedEditor.getOption(monacoRef.current!.editor.EditorOption.readOnly)) {
        modifiedEditor.setValue(modified || '');
      } else {
        if (modified !== modifiedEditor.getValue()) {
          modifiedEditor.executeEdits('', [
            {
              range: modifiedEditor.getModel()!.getFullModelRange(),
              text: modified || '',
              forceMoveMarkers: true,
            },
          ]);

          modifiedEditor.pushUndoStop();
        }
      }
    },
    [modified],
    isEditorReady,
  );

  useUpdate(
    () => {
      editorRef.current?.getModel()?.original.setValue(original || '');
    },
    [original],
    isEditorReady,
  );

  useUpdate(
    () => {
      const { original, modified } = editorRef.current!.getModel()!;

      monacoRef.current!.editor.setModelLanguage(original, originalLanguage || language || 'text');
      monacoRef.current!.editor.setModelLanguage(modified, modifiedLanguage || language || 'text');
    },
    [language, originalLanguage, modifiedLanguage],
    isEditorReady,
  );

  useUpdate(
    () => {
      editorRef.current?.updateOptions(options);
    },
    [options],
    isEditorReady,
  );

  const setModels = useCallback(() => {
    if (!monacoRef.current) return;
    beforeMountRef.current(monacoRef.current);
    const originalModel = getOrCreateModel(
      monacoRef.current,
      original || '',
      originalLanguage || language || 'text',
      originalModelPath || '',
    );

    const modifiedModel = getOrCreateModel(
      monacoRef.current,
      modified || '',
      modifiedLanguage || language || 'text',
      modifiedModelPath || '',
    );

    editorRef.current?.setModel({
      original: originalModel,
      modified: modifiedModel,
    });
  }, [
    language,
    modified,
    modifiedLanguage,
    original,
    originalLanguage,
    originalModelPath,
    modifiedModelPath,
  ]);

  const createEditor = useCallback(() => {
    if (!preventCreation.current && containerRef.current) {
      editorRef.current = monacoRef.current!.editor.createDiffEditor(containerRef.current, {
        automaticLayout: true,
        ...options,
      });

      setModels();

      setIsEditorReady(true);
      preventCreation.current = true;
    }
  }, [options, setModels]);

  useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current!, monacoRef.current!);
    }
  }, [isEditorReady]);

  useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  function disposeEditor() {
    const models = editorRef.current?.getModel();

    if (!keepCurrentOriginalModel) {
      models?.original?.dispose();
    }

    if (!keepCurrentModifiedModel) {
      models?.modified?.dispose();
    }

    editorRef.current?.dispose();
  }

  return (
    <MonacoContainer
      width={width}
      height={height}
      isEditorReady={isEditorReady}
      loading={loading}
      _ref={containerRef}
      className={className}
      wrapperProps={wrapperProps}
    />
  );
}

export default DiffEditor;
