/**
 * @challenge
 * @day 4 (11/02/2022)
 * @description Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.
 * @time 0.7ms
 * @complexity O(n)
 */
function dayFour() {
  console.log('Expected: false true true');
  console.time('Tempo de execução');

  class Solution {
    isValid(str) {
      if (str.length % 2 !== 0) return false;

      const stacks = [];
      const brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
      };
      const closing = [')', '}', ']'];

      for (const bracket of str) {
        if (closing.includes(bracket)) {
          if (!stacks.length || stacks.pop() !== brackets[bracket]) {
            return false;
          }
        } else {
          stacks.push(bracket);
        }
      }

      return !stacks.length;
    }
  }

  const solution = new Solution();

  const result1 = solution.isValid('()(){(())');
  const result2 = solution.isValid('');
  const result3 = solution.isValid('([{}])()');

  console.log(`Result: ${result1} ${result2} ${result3}`);
  console.timeEnd('Tempo de execução');
}

module.exports = dayFour;
