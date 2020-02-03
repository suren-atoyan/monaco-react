import { useEffect } from 'react';

const mountedRef = useRef(false);

useEffect(_ => {
  mountedRef.current = true;
  return _ => {
    mountedRef.current = false;
  };
});

const useUnmount = {
  isMounted: mountedRef.current,
  isUnmounted: !mountedRef.current,
};

export default useUnmount;
