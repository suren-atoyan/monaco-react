import { createOvermind } from 'overmind';
import { createHook } from 'overmind-react';

import { initialState } from './state';
import * as actions from './actions';
import * as effects from './effects';

export const store = createOvermind({
  state: initialState,
  actions,
  effects,
});

export const useStore = createHook();
