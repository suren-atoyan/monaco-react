import React, { useState, useEffect, useRef, useCallback } from "react";
import loader from "@monaco-editor/loader";
import useMount from "../hooks/useMount";
import useUpdate from "../hooks/useUpdate";
import usePrevious from "../hooks/usePrevious";
import { noop, getOrCreateModel } from "../utils";
import { type CodeEditor, type EditorProps } from "./types";
import { type Monaco } from "..";
import MonacoContainer from "../MonacoContainer";

const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,
  /* === */
  theme = "light",
  line,
  loading = "Loading...",
  options = {},
  overrideServices = {},
  saveViewState = true,
  keepCurrentModel = false,
  /* === */
  width = "100%",
  height = "100%",
  className,
  wrapperProps = {},
  /* === */
  beforeMount = noop,
  onMount = noop,
  onChange,
  onValidate = noop,
}: EditorProps) {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isMonacoMounting, setIsMonacoMounting] = useState(true);
  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<CodeEditor | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onMountRef = useRef(onMount);
  const beforeMountRef = useRef(beforeMount);
  const subscriptionRef = useRef<any>(null);
  const valueRef = useRef(value);
  const previousPath = usePrevious(path);
  const preventCreation = useRef(false);

  useMount(() => {
    const cancelable = loader.init();

    cancelable
      .then(
        (monaco) => (monacoRef.current = monaco) && setIsMonacoMounting(false)
      )
      .catch(
        (error) =>
          error?.type !== "cancelation" &&
          console.error("Monaco initialization: error:", error)
      );

    return () => (editorRef.current ? disposeEditor() : cancelable.cancel());
  });

  useUpdate(
    () => {
      const model = getOrCreateModel(
        monacoRef.current!,
        defaultValue || value || "",
        defaultLanguage || language || "",
        path || defaultPath || ""
      );

      if (model !== editorRef.current?.getModel()) {
        if (saveViewState)
          viewStates.set(previousPath, editorRef.current?.saveViewState());
        editorRef.current?.setModel(model);
        if (saveViewState)
          editorRef.current?.restoreViewState(viewStates.get(path));
      }
    },
    [path],
    isEditorReady
  );

  useUpdate(
    () => {
      editorRef.current?.updateOptions(options);
    },
    [options],
    isEditorReady
  );

  useUpdate(
    () => {
      if (!editorRef.current || value === undefined) return;
      if (
        editorRef.current.getOption(
          monacoRef.current!.editor.EditorOption.readOnly
        )
      ) {
        editorRef.current.setValue(value);
      } else if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits("", [
          {
            range: editorRef.current.getModel()!.getFullModelRange(),
            text: value,
            forceMoveMarkers: true,
          },
        ]);

        editorRef.current.pushUndoStop();
      }
    },
    [value],
    isEditorReady
  );

  useUpdate(
    () => {
      const model = editorRef.current?.getModel();
      if (model && language)
        monacoRef.current?.editor.setModelLanguage(model, language);
    },
    [language],
    isEditorReady
  );

  useUpdate(
    () => {
      // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
      if (line !== undefined) {
        editorRef.current?.revealLine(line);
      }
    },
    [line],
    isEditorReady
  );

  useUpdate(
    () => {
      monacoRef.current?.editor.setTheme(theme);
    },
    [theme],
    isEditorReady
  );

  const createEditor = useCallback(() => {
    if (!containerRef.current || !monacoRef.current) return;
    if (!preventCreation.current) {
      beforeMountRef.current(monacoRef.current);
      const autoCreatedModelPath = path || defaultPath;

      const defaultModel = getOrCreateModel(
        monacoRef.current,
        value || defaultValue || "",
        defaultLanguage || language || "",
        autoCreatedModelPath || ""
      );

      editorRef.current = monacoRef.current?.editor.create(
        containerRef.current,
        {
          model: defaultModel,
          automaticLayout: true,
          ...options,
        },
        overrideServices
      );

      saveViewState &&
        editorRef.current.restoreViewState(
          viewStates.get(autoCreatedModelPath)
        );

      monacoRef.current.editor.setTheme(theme);

      setIsEditorReady(true);
      preventCreation.current = true;
    }
  }, [
    defaultValue,
    defaultLanguage,
    defaultPath,
    value,
    language,
    path,
    options,
    overrideServices,
    saveViewState,
    theme,
  ]);

  useEffect(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current!, monacoRef.current!);
    }
  }, [isEditorReady]);

  useEffect(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription
  valueRef.current = value;

  // onChange
  useEffect(() => {
    if (isEditorReady && onChange) {
      subscriptionRef.current?.dispose();
      subscriptionRef.current = editorRef.current?.onDidChangeModelContent(
        (event) => {
          onChange(editorRef.current!.getValue(), event);
        }
      );
    }
  }, [isEditorReady, onChange]);

  // onValidate
  useEffect(() => {
    if (isEditorReady) {
      const changeMarkersListener =
        monacoRef.current!.editor.onDidChangeMarkers((uris) => {
          const editorUri = editorRef.current!.getModel()?.uri;

          if (editorUri) {
            const currentEditorHasMarkerChanges = uris.find(
              (uri) => uri.path === editorUri.path
            );
            if (currentEditorHasMarkerChanges) {
              const markers = monacoRef.current!.editor.getModelMarkers({
                resource: editorUri,
              });
              onValidate?.(markers);
            }
          }
        });

      return () => {
        changeMarkersListener?.dispose();
      };
    }
    return () => {
      // eslint happy
    };
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    subscriptionRef.current?.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current!.saveViewState());
    } else {
      editorRef.current!.getModel()?.dispose();
    }

    editorRef.current!.dispose();
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

export default Editor;
