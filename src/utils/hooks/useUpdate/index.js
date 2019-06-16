import { useEffect, useRef } from 'react';

const useUpdate = (effect, deps) => {
  const isInitialMount = useRef(true);

  useEffect(
    isInitialMount.current
      ? _ => { isInitialMount.current = false }
      : effect,
    deps
  );
};

export default useUpdate;
