/**
 * @challenge
 * @day 31 (30/04/2022)
 * @description Given a phone number, return all valid words that can be created using that phone number.
 * @complexity O(n*m)
 * @time 1.5ms
 */
function dayThirtyOne() {
  // eslint-disable-next-line quotes
  console.log("Expected: ['dog', 'fog']")
  console.time('Tempo de execução')

  const lettersMaps = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: [],
  }

  const validWords = ['dog', 'fish', 'cat', 'fog']

  function makeWords(phone, letters = []) {
    if (!phone) {
      const word = letters.join('')

      if (validWords.findIndex((w) => word === w) !== -1) {
        return [word]
      }

      return []
    }

    const results = []
    const chars = lettersMaps[phone[0]]

    for (const char of chars) {
      const newDigits = phone.slice(1)

      results.push(...makeWords(newDigits, [...letters, char]))
    }

    return results
  }

  const result = makeWords('364')

  console.log(`Result:`)

  console.log(result)

  console.timeEnd('Tempo de execução')
}

module.exports = dayThirtyOne
