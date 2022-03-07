/**
 * @challenge
 * @day 28 (07/03/2022)
 * @description Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @complexity O(n2)
 * @time 0.2ms
 */
function dayTwentyEight() {
  console.log(`Expected: [2, 1, 3, 4, 0, 0, 0, 0, 0, 0]`)
  console.time('Tempo de execução')

  class Solution {
    moveZeros(nums) {
      let index = 0

      for (const n of nums) {
        if (n !== 0) {
          nums[index++] = n
        }
      }

      for (index = index; index < nums.length; index++) {
        nums[index] = 0
      }

      return nums
    }
  }

  const nums = [0, 0, 0, 2, 0, 1, 3, 4, 0, 0]

  const result = new Solution().moveZeros(nums)

  console.log(`Result: [${result}]`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayTwentyEight
