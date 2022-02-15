#  Sorting a list with 3 unique numbers

Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

### Sample Input
```
[3, 3, 2, 1, 3, 2, 1]
```
### Sample Output
```
[1, 1, 2, 2, 3, 3, 3]
```
### Explanation

`[3, 3, 2, 1, 3, 2, 1]` sorted is `[1, 1, 2, 2, 3, 3, 3]`

### Solution
```js
function sortNumbers(numbers) {
  const obj = {};

  const newArray = [];

  for (const n of numbers) {
    if (!obj[n]) obj[n] = 0;

    obj[n]++;
  }

  for (const [key, count] of Object.entries(obj)) {
    newArray.push(...Array(count).fill(key));
  }

  return newArray;
}

const result = sortNumbers([3, 3, 2, 1, 3, 2, 1]);

console.log(`Result: [${result}]`);
```
