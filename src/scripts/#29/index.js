/**
 * @challenge
 * @day 29 (08/03/2022)
 * @description Given a list, find the k-th largest element in the list.
 * @complexity O(n^2)
 * @time 0.2ms
 */
function dayTwentyNine() {
  console.log(`Expected: 5`)
  console.time('Tempo de execução')

  function findKthLargest(nums, k) {
    let done = 0

    while (!done) {
      done = 1

      for (let i = 1; i < nums.length; i += 1) {
        if (nums[i - 1] > nums[i]) {
          done = 0
          const tmp = nums[i - 1]
          nums[i - 1] = nums[i]
          nums[i] = tmp
        }
      }
    }

    return nums[k]
  }

  const result = findKthLargest([3, 5, 2, 4, 6, 8], 3)

  console.log(`Result: ${result}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayTwentyNine
