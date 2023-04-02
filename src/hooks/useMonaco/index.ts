import { useState } from "react";
import loader from "@monaco-editor/loader";

import useMount from "../useMount";

function useMonaco() {
  const [monaco, setMonaco] = useState(loader.__getMonacoInstance());

  useMount(() => {
    let cancelable: ReturnType<typeof loader.init>;

    if (!monaco) {
      cancelable = loader.init();

      cancelable.then((monaco) => {
        setMonaco(monaco);
      });
    }

    return () => cancelable?.cancel();
  });

  return monaco;
}

export default useMonaco;
