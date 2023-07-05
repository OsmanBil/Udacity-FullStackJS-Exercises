// How to import a module
const util = require('./utilities/util1');

const { lgNum, cut3 } = require('./utilities/util2');

const numArr = [3, 4, 5, 6];
const wordArr= ['cat', 'dog', 'rabbit', 'bird'];

// Add numbers in an array
console.log(util.sum(numArr));

// Concatenate two arrays
console.log(util.concat(numArr, wordArr));

// Find the largest number in an array
console.log(lgNum(numArr));

// Remove the 3rd item from an array
console.log(cut3(wordArr));