# Number of Ways to Climb Stairs

You are given a positive integer N which represents the number of steps in a staircase. You can either climb 1 or 2 steps at a time. Write a function that returns the number of unique ways to climb the stairs.

### Sample Input
```
4
5
```
### Sample Output
```
5
8
```
### Explanation
It is useful to understand that to get to step # N, you can either climb 1 step from step # N-1 or 2 steps from step # N-2. That is, staircase(n) = staircase(n-1) + staircase(n-2). This is just the Fibonacci sequence. One solution then is to just solve the problem recursively.

### Solution
```js
function staircase(n) {
  if (n <= 1) return 1;

  return staircase(n - 1) + staircase(n - 2);
}

const result1 = staircase(4);
const result2 = staircase(5);

console.log(`Result: ${result1}, ${result2}`);
```
