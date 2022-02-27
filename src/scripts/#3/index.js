/**
 * @challenge
 * @day 3 (10/02/2022)
 * @description A palindrome is a sequence of characters that reads the same backwards and forwards. Given a string, s, find the longest palindromic substring in s.
 * @time 0.2ms
 * @complexity O(n^2)
 */
function dayThree() {
  console.log('Expected: racecar')
  console.time('Tempo de execução')

  class Solution {
    longestPalindrome(str) {
      function isPalindrome(str) {
        const reversed = str.split('').reverse().join('')

        return str === reversed
      }

      while (!isPalindrome(str)) {
        str = str.substring(1)
        str = str.substring(0, str.length - 1)
      }

      return str
    }
  }

  const str = 'tracecars'
  const result = new Solution().longestPalindrome(str)

  console.log(`Result: ${result}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayThree
