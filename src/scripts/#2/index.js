/**
 * @challenge
 * @day 2 (09/02/2022)
 * @description Given a string, find the length of the longest substring without repeating characters.
 * @time 0.3ms
 * @complexity O(n)
 */
function dayTwo() {
  console.log('Expected: 10')
  console.time('Tempo de execução')

  class Solution {
    lengthOfLongestSubstring(s) {
      const letters = {}
      let lastRepeatedIndex = -1
      let index = 0
      let result = 0

      while (index < s.length) {
        if (s[index] in letters) {
          lastRepeatedIndex = Math.max(lastRepeatedIndex, letters[s[index]])
        }

        letters[s[index]] = index
        result = Math.max(result, index - lastRepeatedIndex)
        index++
      }

      return result
    }
  }

  const result = new Solution().lengthOfLongestSubstring('abrkaabcdefghijjxxx')

  console.log(`Result: ${result}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayTwo
