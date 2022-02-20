# Maximum In A Stack

Implement a class for a stack that supports all the regular functions (push, pop) and an additional function of max() which returns the maximum element in the stack (return None if the stack is empty). Each method should run in constant time.

### Sample Input
```
1
2
3
2
```
### Sample Output
```
2
```
### Explanation

The regular operations of a stack are relatively trivial to implement. Push and pop can simply be implemented as append and pop using a typical list.

### Solution
```js
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
```
