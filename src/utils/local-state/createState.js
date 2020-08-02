import { compose, curry, isObject, isFunction, isEmpty } from './utils';

function createState(initial, handler = {}) {
  validateInitial(initial);
  validateHandler(handler);

  const state = { current: initial };

  const didUpdate = curry(didStateUpdate)(state, handler);
  const update = curry(updateState)(state);
  const validate = curry(validateChanges)(initial);
  const getChanges = curry(extractChanges)(state);

  function getState(selector = state => state) {
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(
      didUpdate,
      update,
      validate,
      getChanges,
    )(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges)
    ? causedChanges(state.current)
    : causedChanges;
}

function updateState(state, changes) {
  state.current = { ...state.current, ...changes };

  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler)
    ? handler(state.current)
    : Object.keys(changes)
        .forEach(field => handler[field]?.(state.current[field]));

  return changes;
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(field => !initial.hasOwnProperty(field))) errorHandler('changeField');

  return changes;
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

const errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the store which is not specified in the "initial" state',
  default: 'an unknown error has occurred in `local-storer` package',
};

function errorHandler(type) {
  throw new Error(errorHandler[type] || errorMessages.default);
}

export default createState;
