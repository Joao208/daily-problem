# Remove k-th Last Element From Linked List

You are given a singly linked list and an integer k. Return the linked list, removing the k-th last element from the list.

Try to do it in a single pass and using constant space.

### Sample Input
```
[1, 2, 3, 4, 5]
```
### Sample Output
```
[1, 2, 4, 5]
```
### Explanation
Remove 3 for linked list

### Solution
```js
class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }

  print() {
    let current_node = this
    const result = []

    while (current_node) {
      result.push(current_node.val)
      current_node = current_node.next
    }

    return result
  }
}

function remove_kth_from_linked_list(head, k) {
  const node = new Node(0, head)
  let current = node

  while (current) {
    if (current.next?.val === k) {
      current.next = current.next?.next
    }

    current = current.next
  }

  return node.next
}

let head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

console.log(head.print())

head = remove_kth_from_linked_list(head, 3)

const result = head.print()

console.log(`Result: [${result}]`)
```
