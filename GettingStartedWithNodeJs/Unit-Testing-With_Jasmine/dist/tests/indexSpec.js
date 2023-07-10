"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = __importDefault(require("../utilities/strings")); // this is the import statement from the test file
var numbers_1 = __importDefault(require("../utilities/numbers")); // this is the import statement from the test file
var arrays_1 = __importDefault(require("../utilities/arrays")); // this is the import statement from the test file
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
it('should capitalize a string', function () {
    expect(strings_1.default.capitalize('a sentence')).toEqual('A Sentence');
});
it('should be a sum greater than 10', function () {
    expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
});
it('multiply 3 by 5 and be 15', function () {
    expect(numbers_1.default.multiply(3, 5)).toEqual(15);
});
it('should add numbers in array and be truthy', function () {
    expect(arrays_1.default.addArr(numArr)).toBeTruthy();
});
it('should concatenate 2 arrays to not equal just 1', function () {
    expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
});
it('should not contain the third index', function () {
    expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
});
it('should return the original array if it has less than 3 elements', function () {
    expect(arrays_1.default.cut3(['apple', 'banana'])).toEqual(['apple', 'banana']);
});
