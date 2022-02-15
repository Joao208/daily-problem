/**
 * @challenge
 * @day 7 (14/02/2022)
 * @description Given a singly-linked list, reverse the list. This can be done iteratively or recursively. Can you get both solutions?
 * @time 0.3ms
 * @complexity O(n)
 */
function daySeven() {
  console.log("Expected: [1, 1, 2, 2, 3, 3, 3]");
  console.time("Tempo de execução");

  function sortNumbers(numbers) {
    const obj = {};

    const newArray = [];

    for (const n of numbers) {
      if (!obj[n]) obj[n] = 0;

      obj[n]++;
    }

    for (const [key, count] of Object.entries(obj)) {
      newArray.push(...Array(count).fill(key));
    }

    return newArray;
  }

  const result = sortNumbers([3, 3, 2, 1, 3, 2, 1]);

  console.log(`Result: [${result}]`);
  console.timeEnd("Tempo de execução");
}

module.exports = daySeven;
