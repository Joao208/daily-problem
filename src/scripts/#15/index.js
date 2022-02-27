/**
 * @challenge
 * @day 15 (22/02/2022)
 * @description Given a list of numbers, find if there exists a pythagorean triplet in that list. A pythagorean triplet is 3 variables a, b, c where a2 + b2 = c2
 * @complexity O(n^2)
 * @time 0.2ms
 */
function dayFifteen() {
  console.log('Expected: true')
  console.time('Tempo de execução')

  function findPythagoreanTriplets(nums) {
    const squares = nums.map((n) => n ** 2)

    for (const n of nums) {
      for (const n2 of nums) {
        if (squares.includes(n ** 2 + n2 ** 2)) return true
      }
    }

    return false
  }

  const result = findPythagoreanTriplets([3, 12, 5, 13])

  console.log(`Result: ${result}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayFifteen
