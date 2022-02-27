/**
 * @challenge
 * @day 12 (19/02/2022)
 * @description You are given the root of a binary tree. Invert the binary tree in place. That is, all left children should become right children, and all right children should become left children.
 * @time 0.4ms
 * @complexity O(n)
 */
function dayTwelve() {
  console.log('Expected: a b d e c f, a c f b e d')
  console.time('Tempo de execução')

  class Node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }

    preorder(str = '') {
      console.log(this.value)

      if (this.left) {
        this.left.preorder(str)
      }

      if (this.right) {
        this.right.preorder(str)
      }
    }
  }

  function invert(node) {
    if (!node) return node

    const left = invert(node.left)
    const right = invert(node.right)

    node.left = right
    node.right = left

    return node
  }

  const root = new Node('a')
  root.left = new Node('b')
  root.right = new Node('c')
  root.left.left = new Node('d')
  root.left.right = new Node('e')
  root.right.left = new Node('f')

  console.log('Result before invert:')
  root.preorder()

  invert(root)

  console.log('Result after invert:')
  root.preorder()

  console.timeEnd('Tempo de execução')
}

module.exports = dayTwelve
