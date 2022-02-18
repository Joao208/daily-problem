# Floor and Ceiling of a Binary Search Tree

Given an integer k and a binary search tree, find the floor (less than or equal to) of k, and the ceiling (larger than or equal to) of k. If either does not exist, then print them as None.

### Sample Input
```
{
  left: {
    left: { left: null, right: null, value: 2 },
    right: { left: null, right: null, value: 6 },
    value: 4,
  },
  right: {
    left: { left: null, right: null, value: 10 },
    right: { left: null, right: null, value: 14 },
    value: 12,
  },
}
```
### Sample Output
```
(4, 6)
```
### Explanation

The floor less than or equal of `5` is `4` and he ceiling (larger than or equal to) of `5` is `6`

### Solution
```js
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  findCeilingFloor(root, k, floor = null, ceil = null) {
    let current = root;

    while (current) {
      if (current.value === k) {
        floor = current;
        ceil = current;
        break;
      } else if (current.value > k) {
        ceil = current;
        current = current.left;
      } else {
        floor = current;
        current = current.right;
      }
    }

    return `(${floor.value || null}, ${ceil.value || null})`;
  }
}

const root = new Node(8);
root.left = new Node(4);
root.right = new Node(12);

root.left.left = new Node(2);
root.left.right = new Node(6);

root.right.left = new Node(10);
root.right.right = new Node(14);

const result = root.findCeilingFloor(root, 5);

console.log(`Result: ${result}`);
```
