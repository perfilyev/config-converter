const supported = ['json', 'yml', 'xml'];

module.exports = (type) => {
  if (supported.some(available => available === type)) {
    return type;
  }
  throw new Error(`Unsupported type ${type}`);
};
