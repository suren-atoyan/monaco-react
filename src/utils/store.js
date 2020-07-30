function store(initial, handlers = {}) {
  if (!initial) {
    throw new Error('initial state is required');
  }

  const _ = {
    state: initial,
    setState,
  };

  function setState(changes) {
    // check only in development
    validateChanges(initial, changes);
    Object.assign(_.state, changes);
    Object.keys(changes).forEach(field => handlers[field] && handlers[field](changes[field]));
  }

  return _;
}

function validateChanges(initial, changes) {
  if (typeof changes !== 'object') {
    throw new Error('provided value of changes should be an object');
  }

  if (Object.keys(changes).some(field => !initial.hasOwnProperty(field))) {
    throw new Error('It seams you want to change a field in the state that is not specified in the "initial" state');
  }
}

export default store;
