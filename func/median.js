exports.median = i => {
  if (i.length === 0) return 0;

  i.sort(function(a, b) {
    return a - b;
  });

  const half = Math.floor(i.length / 2);

  if (i.length % 2) return i[half];

  return (i[half - 1] + i[half]) / 2.0;
};
