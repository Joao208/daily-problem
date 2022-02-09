# Sum two linked lists

You are given two linked-lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

### Sample Input
```
(2 -> 4 -> 3) + (5 -> 6 -> 4)
```
### Sample Output
```
7 0 8
```
### Explanation

The sum of `342` + `465` is `807`

### Solution
```js
class Solution {
lengthOfLongestSubstring(s) {
    const letters = {};
    let lastRepetedIndex = -1;
    let index = 0;
    let result = 0;

    while (index < s.length) {
    if (s[index] in letters) {
        lastRepetedIndex = Math.max(lastRepetedIndex, letters[s[index]]);
    }

    letters[s[index]] = index;
    result = Math.max(result, index - lastRepetedIndex);
    index++;
    }

    return result;
}
}

const result = new Solution().lengthOfLongestSubstring("abrkaabcdefghijjxxx");

console.log(`Result: ${result}`);
```