/**
 * @challenge
 * @day 9 (16/02/2022)
 * @description Given a list of numbers, where every number shows up twice except for one number, find that one number.
 * @time 0.2ms
 * @complexity O(n)
 */
function dayNine() {
  console.log('Expected: 1');
  console.time('Tempo de execução');

  function singleNumber(nums) {
    const obj = {};

    nums.forEach((n) => (obj[n] ? obj[n]++ : (obj[n] = 1)));

    return Object.entries(obj).filter(([, value]) => value === 1)[0][0];
  }

  const result = singleNumber([4, 3, 2, 4, 1, 3, 2]);

  console.log(`Result: ${result}`);
  console.timeEnd('Tempo de execução');
}

module.exports = dayNine;
