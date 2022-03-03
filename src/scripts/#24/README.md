# Ways to Traverse a Grid

Given a linked list of integers, remove all consecutive nodes that sum up to 0.

### Sample Input
```
10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4
```
### Sample Output
```
10
```
### Explanation
The consecutive nodes 5 -> -3 -> -3 -> 1 sums up to 0 so that sequence should be removed. 4 -> -4 also sums up to 0 too so that sequence should also be removed.

### Solution
```js
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
```
