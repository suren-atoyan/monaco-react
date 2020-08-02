function createStore(initial, handlers = {}) {
  if (!initial) {
    throw new Error('initial state is required');
  }

  const state = { current: initial };

  function getState(selector = state => state) {
    return selector(state.current);
  }

  function setState(causedChanges) {
    const changes = typeof causedChanges === 'function'
      ? causedChanges(state.current)
      : causedChanges;

    // check only in development
    validateChanges(initial, changes);
    Object.assign(state.current, changes);
    Object.keys(changes).forEach(field => handlers[field] && handlers[field](changes[field]));
  }

  return [getState, setState];
}

function validateChanges(initial, changes) {
  if (typeof changes !== 'object') {
    throw new Error('provided value of changes should be an object');
  }

  if (Object.keys(changes).some(field => !initial.hasOwnProperty(field))) {
    throw new Error('It seams you want to change a field in the store which is not specified in the "initial" state');
  }
}

export default createStore;
