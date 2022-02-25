# Find Cycles in a Graph

Given an undirected graph, determine if a cycle exists in the graph.

### Sample Input
```
graph = {
  a: { a2: {}, a3: {} },
  b: { b2: {} },
  c: {
    a: { a2: {}, a3: {} },
    b: { b2: {} },
    c: {},
  },
};
```
### Sample Output
```
true
```
### Explanation
We'll verify if a cycle (explanation [here](https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/#:~:text=A%20graph%20can%20have%20cycles%2C%20which%20means%20you%20could%20get%20the%20same%20node%20more%20than%20once.%20The%20graph%20without%20cycles%20is%20called%20acyclic%20graph.)) exists in the graph

### Solution
```js
function find(graph, node, visited) {
  if (visited.has(node)) {
    return true;
  }

  visited.add(node);

  for (const n of Object.keys(graph)) {
    if (find(graph[n], n, visited)) {
      return true;
    }
  }

  return false;
}

function find_cycle(graph) {
  const visited = new Set();

  for (const node of Object.keys(graph)) {
    if (!visited.has(node)) {
      if (find(graph[node], node, visited)) {
        return true;
      }
    }
  }

  return false;
}

const graph = {
  a: { a2: {}, a3: {} },
  b: { b2: {} },
  c: {},
};

const result1 = find_cycle(graph);

graph["c"] = graph;

const result2 = find_cycle(graph);

console.log(`Result: ${result1}, ${result2}`);
```
