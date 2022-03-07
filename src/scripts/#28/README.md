# Move Zeros

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

### Sample Input
```
[0,1,0,3,12]
```
### Sample Output
```
[1,3,12,0,0]
```
### Explanation
All zeros moved to the end of the array

### Solution
```js
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
```
