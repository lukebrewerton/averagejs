exports.mode = arr => {
  const counter = {};
  let mode = [];
  let max = 0;
  for (const i in arr) {
    if (!(arr[i] in counter)) counter[arr[i]] = 0;
    counter[arr[i]]++;

    if (counter[arr[i]] == max) mode.push(arr[i]);
    else if (counter[arr[i]] > max) {
      max = counter[arr[i]];
      mode = [arr[i]];
    }
  }
  return mode;
};
