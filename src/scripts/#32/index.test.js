const permute = require('./index');

describe('permute', () => {
  // Helper function to normalize permutations for comparison
  // Sorts each permutation's elements, then sorts the array of permutations (as strings)
  const normalizePermutations = (arrayOfPermutations) => {
    return arrayOfPermutations
      .map(permutation => [...permutation].sort((a, b) => a - b))
      .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
  };

  it('should return all permutations for [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const result = permute(input);
    const expected = [
      [1, 2, 3], [1, 3, 2],
      [2, 1, 3], [2, 3, 1],
      [3, 1, 2], [3, 2, 1]
    ];

    expect(normalizePermutations(result)).toEqual(normalizePermutations(expected));
    // Also, check if the number of permutations is correct.
    // factorial(n) for n elements. 3! = 6
    expect(result.length).toBe(6); 
  });

  it('should return an array containing an empty array for an empty input', () => {
    const input = [];
    const result = permute(input);
    // The current backtracking algorithm (backtrack([], nums)) will produce [[]] for an empty input.
    // This means "one permutation of nothing is nothing itself".
    expect(result).toEqual([[]]);
    expect(result.length).toBe(1);
  });

  it('should return a single permutation for a single element array', () => {
    const input = [42];
    const result = permute(input);
    expect(result).toEqual([[42]]);
    expect(result.length).toBe(1);
  });

  it('should return all permutations for [0, 1]', () => {
    const input = [0, 1];
    const result = permute(input);
    const expected = [[0, 1], [1, 0]];
    expect(normalizePermutations(result)).toEqual(normalizePermutations(expected));
    expect(result.length).toBe(2);
  });

  it('should handle duplicate elements by treating them as distinct (based on position)', () => {
    // The current implementation treats elements by their value and position.
    // If nums = [1, 1], it would produce [[1,1], [1,1]] if we strictly follow the distinct element logic.
    // However, standard permutation problems often expect unique permutations of the *values*.
    // The current algorithm generates based on distinct *indices* if not values.
    // For [1,1], our permute function will give [[1,1],[1,1]] because it swaps elements at different positions.
    // Let's test this behavior. If unique value permutations were needed, the function would need modification.
    const input = [1, 1];
    const result = permute(input);
    const expected = [[1, 1], [1, 1]]; // It treats the two 1s as distinguishable by their original positions
    
    // Normalizing will make these identical if they weren't already
    expect(normalizePermutations(result)).toEqual(normalizePermutations(expected));
    expect(result.length).toBe(2); // 2! = 2
  });
});
