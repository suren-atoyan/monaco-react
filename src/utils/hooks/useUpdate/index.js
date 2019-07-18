import { useEffect, useRef } from 'react';

const useUpdate = (effect, deps, applyChanges = true) => {
  const isInitialMount = useRef(true);

  useEffect(
    isInitialMount.current || !applyChanges
      ? _ => { isInitialMount.current = false }
      : effect,
    deps
  );
};

export default useUpdate;
