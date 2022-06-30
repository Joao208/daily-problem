# Phone Numbers

Given a phone number, return all valid words that can be created using that phone number.

### Sample Input
```
364
```

### Sample Output
```
['dog', 'fog']
```

### Explanation
The clockwise spiral traversal of this array is: `['dog', 'fog']`

### Solution
```js
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

  let results = []
  const chars = lettersMaps[phone[0]]

  for (let char of chars) {
    const newDigits = phone.slice(1)

    results.push(...makeWords(newDigits, [...letters, char]))
  }

  return results
}

const result = makeWords('364')

console.log(`Result:`)

console.log(result)
```
