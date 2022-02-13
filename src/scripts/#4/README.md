# Balanced Brackets

Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
- Note that an empty string is also considered valid.

### Sample Input
```
((()))
```
### Sample Output
```
True
```
### Explanation

The string of brackets is balanced

### Solution
```js
class Solution {
  isValid(str) {
    if (str.length % 2 !== 0) return false;

    const stacks = [];
    const brackets = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
    const closing = [")", "}", "]"];

    for (const bracket of str) {
      if (closing.includes(bracket)) {
        if (!stacks.length || stacks.pop() !== brackets[bracket]) return false;
      } else {
        stacks.push(bracket);
      }
    }

    return !stacks.length;
  }
}

const solution = new Solution();

const result1 = solution.isValid("()(){(())");
const result2 = solution.isValid("");
const result3 = solution.isValid("([{}])()");

console.log(`Result: ${result1} ${result2} ${result3}`);
```