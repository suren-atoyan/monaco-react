// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325

const CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled',
};

const makeCancelable = promise => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val => hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val));
    promise.catch(reject);
  });

  return (wrappedPromise.cancel = _ => (hasCanceled_ = true), wrappedPromise);
};

export default makeCancelable;
