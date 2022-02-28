/**
 * @challenge
 * @day 21 (28/02/2022)
 * @description You 2 integers n and m representing an n by m grid, determine the number of ways you can get from the top-left to the bottom-right of the matrix y going only right or down.
 * @complexity O(n^2)
 * @time 0.2ms
 */
function dayTwentyOne() {
  console.log('Expected: 2')
  console.time('Tempo de execução')

  function num_ways(n, m) {
    if ([n, m].includes(1)) return 1

    return num_ways(n - 1, m) + num_ways(n, m - 1)
  }

  const result = num_ways(2, 2)

  console.log(`Result: ${result}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayTwentyOne
