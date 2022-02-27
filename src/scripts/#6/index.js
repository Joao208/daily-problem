/**
 * @challenge
 * @day 6 (13/02/2022)
 * @description Given a singly-linked list, reverse the list. This can be done iteratively or recursively. Can you get both solutions?
 * @time 0.2ms
 * @complexity O(n)
 */
function daySix() {
  console.log('Expected: 0 1 2 3 4')
  console.time('Tempo de execução')

  class ListNode {
    constructor(val) {
      this.val = val
      this.next = null
    }

    printList() {
      let current = this
      let output = ''

      while (current) {
        output += `${current.val} `
        output += ' '
        current = current.next
      }

      console.log(output)
    }

    reverseIteratively() {
      let current = this
      let prev = null
      let next = null

      while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
      }

      return prev
    }

    reverseRecursively() {
      if (!this.next) return this

      const reversed = this.next.reverseRecursively()
      this.next.next = this
      this.next = null

      return reversed
    }
  }

  const testHead = new ListNode(4)
  const node1 = new ListNode(3)
  testHead.next = node1
  const node2 = new ListNode(2)
  node1.next = node2
  const node3 = new ListNode(1)
  node2.next = node3
  const testTail = new ListNode(0)
  node3.next = testTail

  console.log('Initial list:')

  testHead.printList()
  testHead.reverseIteratively()
  testTail.printList()

  console.timeEnd('Tempo de execução')
}

module.exports = daySix
