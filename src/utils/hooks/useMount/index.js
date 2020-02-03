import { useEffect } from 'react';
import useMountState from '../useMountState';

const { isMounted } = useMountState();

const useMount = effect => useEffect(()=>{
    effect(isMounted);
}, []);

export default useMount;
