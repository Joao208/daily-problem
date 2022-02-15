# Two-Sum

You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.

### Sample Input
```
[4, 7, 1 , -3, 2]  k = 5
```
### Sample Output
```
true
```
### Explanation

`4` + `1` = `5`

### Solution
```js
function twoSum(numbers, target) {
  const obj = {};

  for (const n of numbers) {
    if (obj[n]) return true;

    obj[target - n] = n;
  }

  return false;
}

const result = twoSum([4, 7, 1, -3, 2], 5);

console.log(`Result: ${result}`);
```
