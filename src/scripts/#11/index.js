/**
 * @challenge
 * @day 11 (18/02/2022)
 * @description Given an integer k and a binary search tree, find the floor (less than or equal to) of k, and the ceiling (larger than or equal to) of k. If either does not exist, then print them as None.
 * @time 0.2ms
 * @complexity O(log h)
 */
function dayEleven() {
  console.log('Expected: (4, 6)');
  console.time('Tempo de execução');

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
  console.timeEnd('Tempo de execução');
}

module.exports = dayEleven;
