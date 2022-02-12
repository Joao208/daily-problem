# First and Last Indices of an Element in a Sorted Array

Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

### Sample Input
```
A = [1,3,3,5,7,8,9,9,9,15], target = 9
```
### Sample Output
```
[6,8]
```
### Explanation

The index of first element equal target and the index of last element equal target

### Solution
```js
class Solution {
  getRange(arr, x) {
    let index = 0;
    const array = [];

    while (index < arr.length) {
      if (arr[index] === x) array.push(index);

      index++;
    }

    const firstElement = array[0] || -1;
    const lastElement = array[array.length - 1] || -1;

    return `${[firstElement, lastElement]}`;
  }
}

const solution = new Solution();

const arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
const x = 2;

const result = solution.getRange(arr, x);

console.log(`Result: ${result}`);
```
