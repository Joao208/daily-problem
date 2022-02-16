# Find the non-duplicate number

Given a list of numbers, where every number shows up twice except for one number, find that one number.

### Sample Input
```
[4, 3, 2, 4, 1, 3, 2]
```
### Sample Output
```
1
```
### Explanation

`1` is the unique number in array

### Solution
```js
function singleNumber(nums) {
  const obj = {};

  nums.forEach((n) => (obj[n] ? obj[n]++ : (obj[n] = 1)));

  return Object.entries(obj).filter(([, value]) => value === 1)[0][0];
}

const result = singleNumber([4, 3, 2, 4, 1, 3, 2]);

console.log(`Result: ${result}`);
```
