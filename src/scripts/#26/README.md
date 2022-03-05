# Witness of The Tall People

There are n people lined up, and each have a height represented as an integer. A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened. How many witnesses are there?

### Sample Input
```
[3, 6, 3, 4, 1]
```
### Sample Output
```
3
```
### Explanation
Explanation: Only [6, 4, 1] were able to see in front of them.

```
 #
 #
 # #
####
####
#####
36341                                 x (murder scene)
```

### Solution
```js
function witness(heights) {
  let witness_count = 0
  let tallest = 0

  for (const height of heights.reverse()) {
    if (height > tallest) {
      tallest = height
      witness_count++
    }
  }

  return witness_count
}

const result = witness([3, 6, 3, 4, 1])

console.log(`Result: ${result}`)
```
