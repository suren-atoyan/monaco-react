function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco
    .editor
    .getModel(crateModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco
    .editor
    .createModel(value, language, path && crateModelUri(monaco, path));
}

function crateModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}

export { noop, getOrCreateModel, isUndefined };
