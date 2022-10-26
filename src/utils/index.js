import { decrementModelUsage, incrementModelUsage, shouldDisposeModel } from "./track-model-usage";

function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  const uri = path && createModelUri(monaco, path);
  const model = getModel(monaco, uri) || createModel(monaco, value, language, uri);
  incrementModelUsage(model);

  return model;
}

function getModel(monaco, uri) {
  return monaco
    .editor
    .getModel(uri);
}

function createModel(monaco, value, language, path) {
  return monaco
    .editor
    .createModel(value, language, path && createModelUri(monaco, path));
}

function createModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}

function disposeModel(model) {
  if (!model) {
    return;
  }
  decrementModelUsage(model);
  if (shouldDisposeModel(model)) {
    model.dispose();
  }
}

export { noop, getOrCreateModel, isUndefined, disposeModel };
