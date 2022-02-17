/**
 * @challenge
 * @day 10 (17/02/2022)
 * @description You are given an array of integers in an arbitrary order. Return whether or not it is possible to make the array non-decreasing by modifying at most 1 element to any value.
 * We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
 * @complexity O(n)
 * @time 0.1ms
 */
function dayTen() {
  console.log("Expected: true false");
  console.time("Tempo de execução");

  function check(nums) {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        count++;
        if (count > 1) return false;
      }
    }

    return true;
  }

  const result1 = check([13, 4, 7]);
  const result2 = check([5, 1, 3, 2, 5]);

  console.log(`Result: ${result1} ${result2}`);
  console.timeEnd("Tempo de execução");
}

module.exports = dayTen;
