# Length Of Longest Substring

Given a string, find the length of the longest substring without repeating characters.

### Sample Input
```
abrkaabcdefghijjxxx
```
### Sample Output
```
10
```
### Explanation

The length of substring `abcdefghij` inside of string `abrkaabcdefghijjxxx` is 10

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