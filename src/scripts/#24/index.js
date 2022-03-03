/**
 * @challenge
 * @day 24 (03/03/2022)
 * @description Given a linked list of integers, remove all consecutive nodes that sum up to 0.
 * @complexity O(n^2)
 * @time 0.9ms
 */
function dayTwentyFour() {
  console.log('Expected: 10')
  console.time('Tempo de execução')

  class Node {
    constructor(value, next = null) {
      this.value = value
      this.next = next
    }

    removeConsecutiveSumTo0(node) {
      const head = new Node(0, node)
      let start = head

      while (start) {
        let sum = 0
        let end = start.next

        while (end) {
          sum += end.value

          if (sum === 0) {
            start.next = end.next
            sum = 0
          }

          end = end.next
        }

        start = start.next
      }

      return head.next
    }
  }

  let node = new Node(10)
  node.next = new Node(5)
  node.next.next = new Node(-3)
  node.next.next.next = new Node(-3)
  node.next.next.next.next = new Node(1)
  node.next.next.next.next.next = new Node(4)
  node.next.next.next.next.next.next = new Node(-4)

  node = node.removeConsecutiveSumTo0(node)

  console.log('Result:')

  while (node) {
    console.log(node.value)
    node = node.next
  }

  console.timeEnd('Tempo de execução')
}

module.exports = dayTwentyFour
