/**
 * @challenge
 * @day 14 (21/02/2022)
 * @description You are given a positive integer N which represents the number of steps in a staircase. You can either climb 1 or 2 steps at a time. Write a function that returns the number of unique ways to climb the stairs.
 * @complexity O(2^n)
 * @time 0.3ms
 */
function dayFourteen() {
  console.log('Expected: 5, 8')
  console.time('Tempo de execução')

  function staircase(n) {
    if (n <= 1) return 1

    return staircase(n - 1) + staircase(n - 2)
  }

  const result1 = staircase(4)
  const result2 = staircase(5)

  console.log(`Result: ${result1}, ${result2}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayFourteen
