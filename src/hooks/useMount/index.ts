import { useEffect, type EffectCallback } from 'react';

function useMount(effect: EffectCallback) {
  useEffect(effect, []);
}

export default useMount;
