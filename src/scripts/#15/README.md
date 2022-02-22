# Find Pythagorean Triplets

Given a list of numbers, find if there exists a pythagorean triplet in that list. A pythagorean triplet is 3 variables a, b, c where a2 + b2 = c2

### Sample Input
```
[3, 5, 12, 5, 13]
```
### Sample Output
```
True
```
### Explanation
A brute force solution would require 3 nested for loops to test every combination with 3 variables. However upon closer inspection, we can see that by creating a set of squares of all nums, we can search combinations for just 2 numbers (a and b) instead and see if the sum exists.

### Solution
```js
function findPythagoreanTriplets(nums) {
  const squares = nums.map((n) => n ** 2);

  for (const n of nums) {
    for (const n2 of nums) {
      if (squares.includes(n ** 2 + n2 ** 2)) return true;
    }
  }

  return false;
}

const result = findPythagoreanTriplets([3, 12, 5, 13]);

console.log(`Result: ${result}`);
```
