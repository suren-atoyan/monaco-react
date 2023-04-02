import { useEffect, useRef, type DependencyList, type EffectCallback } from 'react';

function useUpdate(effect: EffectCallback, deps: DependencyList, applyChanges = true) {
  const isInitialMount = useRef(true);

  useEffect(
    isInitialMount.current || !applyChanges
      ? () => {
          isInitialMount.current = false;
        }
      : effect,
    deps,
  );
}

export default useUpdate;
