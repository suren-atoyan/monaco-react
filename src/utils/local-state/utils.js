function compose(...fns) {
  return x => fns.reduceRight((y, f) => f(y), x);
}

function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...nextArgs) => curried.apply(this, [...args, ...nextArgs]);
  }
}

function isObject(value) {
  return ({}).toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

export { compose, curry, isObject, isEmpty, isFunction };
