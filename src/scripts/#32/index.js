// Solution for #32: Permutations

function permute(nums) {
  const result = [];

  function backtrack(currentPermutation, remainingElements) {
    // Base case: If there are no remaining elements,
    // a complete permutation has been formed.
    if (remainingElements.length === 0) {
      result.push([...currentPermutation]); // Add a copy
      return;
    }

    // Recursive step: Iterate through remaining elements
    for (let i = 0; i < remainingElements.length; i++) {
      const element = remainingElements[i];

      // 1. Choose: Add the element to the current permutation
      currentPermutation.push(element);

      // 2. Explore: Create new remaining elements and recurse
      const nextRemainingElements = [
        ...remainingElements.slice(0, i),
        ...remainingElements.slice(i + 1),
      ];
      backtrack(currentPermutation, nextRemainingElements);

      // 3. Unchoose (Backtrack): Remove the element to explore other paths
      currentPermutation.pop();
    }
  }

  // Start the backtracking process with an empty current permutation
  // and all the original numbers as remaining elements.
  backtrack([], nums);

  return result;
}

// Export the function for use in other modules (Node.js style)
const exampleInput = [1, 2, 3];
const result = permute(exampleInput);
console.log(JSON.stringify(result)); // Using JSON.stringify for a clearer output of the array of arrays

module.exports = permute;
