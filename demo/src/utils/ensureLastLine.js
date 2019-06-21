const ensureLastLine = str => str + (str.slice(-1) === '\n' ? '' : '\n');

export default ensureLastLine;
