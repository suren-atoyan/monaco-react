import { useEffect } from 'react';

function useMount(effect) {
  useEffect(effect, []);
}

export default useMount;
