# Longest Palindromic Substring

A palindrome is a sequence of characters that reads the same backwards and forwards. Given a string, s, find the longest palindromic substring in s.

### Sample Input
```
banana
```
### Sample Output
```
anana
```
### Explanation

The palindrome inside `banana` is `anana`

### Solution
```js
class Solution {
longestPalindrome(str) {
    // @ts-ignore
    String.prototype.isPalindrome = function () {
    const reversed = this.split("").reverse().join("");

    return this === reversed;
    };

    while (!str.isPalindrome()) {
    str = str.substring(1);
    str = str.substring(0, str.length - 1);
    }

    return str;
}
}

const str = "tracecars";
const result = new Solution().longestPalindrome(str);

console.log(`Result: ${result}`);
```