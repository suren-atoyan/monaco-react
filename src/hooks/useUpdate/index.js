import { useEffect, useRef } from 'react';

function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = useRef(true);

  useEffect(
    isInitialMount.current || !applyChanges
      ? () => { isInitialMount.current = false }
      : effect,
    deps
  );
}

export default useUpdate;
