# Find the k-th Largest Element in a List

Given a list, find the k-th largest element in the list.

### Sample Input
```
list = [3, 5, 2, 4, 6, 8], k = 3
```
### Sample Output
```
5
```
### Explanation
The `3th` largest element in the list is `5`

### Solution
```js
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
```
