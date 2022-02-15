/**
 * @challenge
 * @day 8 (15/02/2022)
 * @description You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.
 * @time 0.2ms
 * @complexity O(n)
 */
function dayEight() {
  console.log("Expected: true");
  console.time("Tempo de execução");

  function twoSum(numbers, target) {
    const obj = {};

    for (const n of numbers) {
      if (obj[n]) return true;

      obj[target - n] = n;
    }

    return false;
  }

  const result = twoSum([4, 7, 1, -3, 2], 5);

  console.log(`Result: ${result}`);
  console.timeEnd("Tempo de execução");
}

module.exports = dayEight;
