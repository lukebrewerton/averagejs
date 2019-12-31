const mean = require('./func/mean');
const median = require('./func/median');
const mode = require('./func/mode');

const testArray = [1, 2, 3, 6, 21, 2, 3, 3];

const meanResult = mean.mean(testArray);
const medianResult = median.median(testArray);
const modeResult = mode.mode(testArray);

console.log(`the mean of the array is ${meanResult}`);
console.log(`the median of the array is ${medianResult}`);
console.log(`the mode of the array is ${modeResult}`);
