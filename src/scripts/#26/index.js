/**
 * @challenge
 * @day 26 (05/03/2022)
 * @description There are n people lined up, and each have a height represented as an integer. A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened. How many witnesses are there?
 * @complexity O(n)
 * @time 0.1ms
 */
function dayTwentySix() {
  console.log('Expected: 3')
  console.time('Tempo de execução')

  function witness(heights) {
    let witness_count = 0
    let tallest = 0

    for (const height of heights.reverse()) {
      if (height > tallest) {
        tallest = height
        witness_count++
      }
    }

    return witness_count
  }

  const result = witness([3, 6, 3, 4, 1])

  console.log(`Result: ${result}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayTwentySix
