/**
 * @challenge
 * @day 22 (01/03/2022)
 * @description You are given two singly linked lists. The lists intersect at some node. Find, and return the node. Note: the lists are non-cyclical.
 * @complexity O(n)
 * @time 0.6ms
 */
function dayTwentyTwo() {
  console.log('Expected: 3 4')
  console.time('Tempo de execução')

  function intersection(a, b) {
    let aCurrent = a
    let bCurrent = b

    while (aCurrent !== bCurrent) {
      aCurrent = aCurrent.next
      bCurrent = bCurrent.next
      if (aCurrent === bCurrent) return aCurrent
      if (aCurrent === null) {
        aCurrent = b
      }
      if (bCurrent === null) {
        bCurrent = a
      }
    }

    return aCurrent
  }

  class Node {
    constructor(val) {
      this.val = val
      this.next = null
    }

    prettyPrint() {
      let c = this

      while (c) {
        console.log(c.val)
        c = c.next
      }
    }
  }

  const a = new Node(1)
  a.next = new Node(2)
  a.next.next = new Node(3)
  a.next.next.next = new Node(4)

  const b = new Node(6)
  b.next = a.next.next

  const c = intersection(a, b)

  console.log(`Result:`)
  c.prettyPrint()

  console.timeEnd('Tempo de execução')
}

module.exports = dayTwentyTwo
