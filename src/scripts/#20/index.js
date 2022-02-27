/**
 * @challenge
 * @day 20 (27/02/2022)
 * @description Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.
 * @complexity O(1)
 * @time 0.2ms
 */
function dayTwenty() {
  console.log('Expected: 2')
  console.time('Tempo de execução')

  class Solution {
    minSubArrayLen(nums, s) {
      let l = 0
      let r = -1
      let sum = 0
      let res = nums.length + 1

      while (l < nums.length) {
        if (sum < s && r + 1 < nums.length) {
          r++
          sum += nums[r]
        } else {
          sum -= nums[l]
          l++
        }

        if (sum >= s) {
          res = Math.min(res, r - l + 1)
        }
      }

      if (res == nums.length + 1) {
        return 0
      }

      return res
    }
  }

  const result = new Solution().minSubArrayLen([2, 3, 1, 2, 4, 3], 7)

  console.log(`Result: ${result}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayTwenty
