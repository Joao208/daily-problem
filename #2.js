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

console.log(new Solution().lengthOfLongestSubstring("abrkaabcdefghijjxxx"));
