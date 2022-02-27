# Minimum Size Subarray Sum

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

### Sample Input
```
s = 7, nums = [2,3,1,2,4,3]
```
### Sample Output
```
2
```
### Explanation
The subarray [4,3] has the minimal length under the problem constraint.

### Solution
```js
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
```
