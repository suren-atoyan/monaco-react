const merge = (target, source) => {
  Object.keys(source).forEach(key => {
    if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]));
  });

  return { ...target, ...source };
}

export default merge;
