/**
 * @challenge
 * @day 5 (12/02/2022)
 * @description Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.
 * @time 0.2ms
 * @complexity O(log n)
 */
function dayFive() {
  console.log("Expected: [1, 4]");
  console.time("Tempo de execução");

  class Solution {
    getRange(arr, x) {
      let index = 0;
      const array = [];

      while (index < arr.length) {
        if (arr[index] === x) array.push(index);

        index++;
      }

      const firstElement = array[0] || -1;
      const lastElement = array[array.length - 1] || -1;

      return `${[firstElement, lastElement]}`;
    }
  }

  const solution = new Solution();

  const arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
  const x = 2;

  const result = solution.getRange(arr, x);

  console.log(`Result: ${result}`);
  console.timeEnd("Tempo de execução");
}

module.exports = dayFive;
