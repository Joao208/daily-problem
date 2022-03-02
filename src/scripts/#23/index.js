/**
 * @challenge
 * @day 23 (02/03/2022)
 * @description Figure out the final position of the dominoes. If there are dominoes that get pushed on both ends, the force cancels out and that domino remains upright.
 * @complexity O(n3)
 * @time 0.2ms
 */
function dayTwentyThree() {
  console.log('Expected: ..RR.LL..RR')
  console.time('Tempo de execução')

  class Solution {
    pushDominoes(dominoes) {
      const length = dominoes.length
      const force = new Array(length).fill(0)

      let f = 0
      for (const i in dominoes) {
        if (dominoes[i] === 'R') {
          f = length
        } else if (dominoes[i] === 'L') {
          f = 0
        } else {
          f = Math.max(f - 1, 0)
        }

        force[i] += f
      }

      f = 0
      for (const i in dominoes) {
        const index = length - parseFloat(i) - 1

        if (dominoes[index] === 'L') {
          f = length
        } else if (dominoes[index] === 'R') {
          f = 0
        } else {
          f = Math.max(f - 1, 0)
        }

        force[index] -= f
      }

      let result = ''

      for (const forceN of force) {
        if (forceN == 0) result += '.'
        else if (forceN > 0) result += 'R'
        else {
          result += 'L'
        }
      }

      return result
    }
  }

  const result = new Solution().pushDominoes('..R...L..R.')

  console.log(`Result: ${result}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayTwentyThree
