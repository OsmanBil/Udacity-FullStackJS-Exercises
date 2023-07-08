import strings from "../utilities/strings"; // this is the import statement from the test file
import numbers from "../utilities/numbers"; // this is the import statement from the test file
import arrays from "../utilities/arrays"; // this is the import statement from the test file

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it ('should capitalize a string', () => {
    expect(strings.capitalize('a sentence')).toEqual('A Sentence');
});

it ('should be a sum greater than 10', () => {
    expect(numbers.sum(3,10)).toBeGreaterThan(10);
});

it ('multiply 3 by 5 and be 15', () => {
    expect(numbers.multiply(3,5)).toEqual(15);
});

it ('should add numbers in array and be truthy', () => {
    expect(arrays.addArr(numArr)).toBeTruthy();
});

it ('should concatenate 2 arrays to not equal just 1', () => {
    expect(arrays.concatArr(numArr, wordArr)).not.toEqual(numArr);
});

it ('should not contain the third index', () => {
    expect(arrays.cut3(wordArr)).not.toContain('rabbit');
});

it('should return the original array if it has less than 3 elements', () => {
    expect(arrays.cut3(['apple', 'banana'])).toEqual(['apple', 'banana']);
  });