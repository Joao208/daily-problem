/**
 * @challenge
 * @day 13 (20/02/2022)
 * @description Implement a class for a stack that supports all the regular functions (push, pop) and an additional function of max() which returns the maximum element in the stack (return None if the stack is empty). Each method should run in constant time.
 * @time 0.2ms
 * @complexity O(n)
 */
function dayThirteen() {
  console.log('Expected: 3, 2');
  console.time('Tempo de execução');

  class MaxStack {
    constructor() {
      this.array = [];
    }

    push(value) {
      this.array = [...this.array, value];
    }

    pop() {
      const lastIndex = this.array.length - 1;
      let newArr = [];

      for (let i = 0; i < lastIndex; i++) {
        newArr = [...newArr, this.array[i]];
      }

      this.array = newArr;
    }

    max() {
      let max = 0;

      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i] > max) {
          max = this.array[i];
        }
      }

      return max;
    }
  }

  const s = new MaxStack();
  s.push(1);
  s.push(2);
  s.push(3);
  s.push(2);

  const result1 = s.max();

  s.pop();
  s.pop();

  const result2 = s.max();

  console.log(`Result: ${result1}, ${result2}`);
  console.timeEnd('Tempo de execução');
}

module.exports = dayThirteen;
