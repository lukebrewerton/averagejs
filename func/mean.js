const reducer = (accumulator, currentValue) => accumulator + currentValue;

exports.mean = i => {
  const total = i.reduce(reducer);
  const count = i.length;
  return total / count;
};
