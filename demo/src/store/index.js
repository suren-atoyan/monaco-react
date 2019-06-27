import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

import { initialState } from './state';
import * as actions from './actions';

export const store = createOvermind({
  state: initialState,
  actions,
});

export const useStore = createHook();
