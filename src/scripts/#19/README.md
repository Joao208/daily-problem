# Word Search

You are given a 2D array of characters, and a target string. Return whether or not the word target word exists in the matrix. Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.

### Sample Input
```
[
  ["F", "A", "C", "I"],
  ["O", "B", "Q", "P"],
  ["A", "N", "O", "B"],
  ["M", "A", "S", "S"],
]


FOAM
```
### Sample Output
```
true
```
### Explanation
Given this matrix, and the target word FOAM, you should return true, as it can be found going up-to-down in the first column.

### Solution
```js
function word_search(matrix, word) {
  if (matrix.length !== word.length) return false;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].join("") === word) return true;

    if (matrix.map((x) => x[i]).join("") === word) return true;
  }

  return false;
}

const matrix = [
  ["F", "A", "C", "I"],
  ["O", "B", "Q", "P"],
  ["A", "N", "O", "B"],
  ["M", "A", "S", "S"],
];

const result = word_search(matrix, "FOAM");

console.log(`Result: ${result}`);
```
