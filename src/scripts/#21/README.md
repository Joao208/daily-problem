# Ways to Traverse a Grid

You 2 integers n and m representing an n by m grid, determine the number of ways you can get from the top-left to the bottom-right of the matrix y going only right or down.

### Sample Input
```
n = 2, m = 2
```
### Sample Output
```
2
```
### Explanation
This should return 2, since the only possible routes are:
Right, down
Down, right.

### Solution
```js
function num_ways(n, m) {
  if ([n, m].includes(1)) return 1

  return num_ways(n - 1, m) + num_ways(n, m - 1)
}

const result = num_ways(2, 2)

console.log(`Result: ${result}`)
```
