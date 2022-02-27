/**
 * @challenge
 * @day 18 (25/02/2022)
 * @description Given a mathematical expression with just single digits, plus signs, negative signs, and brackets, evaluate the expression. Assume the expression is properly formed.
 * @complexity O(n)
 * @time 0.5ms
 */
function dayEighteen() {
  console.log('Expected: false, true')
  console.time('Tempo de execução')

  function find(graph, node, visited) {
    if (visited.has(node)) {
      return true
    }

    visited.add(node)

    for (const n of Object.keys(graph)) {
      if (find(graph[n], n, visited)) {
        return true
      }
    }

    return false
  }

  function find_cycle(graph) {
    const visited = new Set()

    for (const node of Object.keys(graph)) {
      if (!visited.has(node)) {
        if (find(graph[node], node, visited)) {
          return true
        }
      }
    }

    return false
  }

  const graph = {
    a: { a2: {}, a3: {} },
    b: { b2: {} },
    c: {},
  }

  const result1 = find_cycle(graph)

  graph['c'] = graph

  const result2 = find_cycle(graph)

  console.log(`Result: ${result1}, ${result2}`)
  console.timeEnd('Tempo de execução')
}

module.exports = dayEighteen
