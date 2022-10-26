
const modelUsage = {};

function decrementModelUsage(model) {
  if (modelUsage[model.uri]) {
    modelUsage[model.uri] -= 1;
  }
}

function incrementModelUsage(model) {
  const uri = model.uri;
  if (modelUsage[uri] == null) {
    modelUsage[uri] = 0;
  }
  modelUsage[uri] = modelUsage[uri] + 1;
}

function shouldDisposeModel(model) {
  return !modelUsage[model.uri] || modelUsage[model.uri] == null;
}

export { decrementModelUsage, incrementModelUsage, shouldDisposeModel };
