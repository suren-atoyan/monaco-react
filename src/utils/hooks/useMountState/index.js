import { useEffect } from 'react';

const mountedRef = useRef(false);

useEffect(_ => {
  mountedRef.current = true;
  return _ => {
    mountedRef.current = false;
  };
});

const useMountState = {
  isMounted: mountedRef.current,
  isUnmounted: !mountedRef.current,
};

export default useMountState;
