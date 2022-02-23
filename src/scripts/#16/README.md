# Edit Distance

Given two strings, determine the edit distance between them. The edit distance is defined as the minimum number of edits (insertion, deletion, or substitution) needed to change one string to the other.

For example, "biting" and "sitting" have an edit distance of 2 (substitute b for s, and insert a t).

### Sample Input
```
'biting', 'sitting'
```
### Sample Output
```
2
```
### Explanation
We'll count the number of replaces and count the number of insertions to have equal string

### Solution
```js
function distance(s1, s2) {
  const obj1 = {};
  const obj2 = {};
  const larger = s1.length > s2.length ? s1 : s2;

  for (const i in larger) {
    const char1 = s1[i];
    const char2 = s2[i];

    if (char1) obj1[char1] ? obj1[char1]++ : (obj1[char1] = 1);
    if (char2) obj2[char2] ? obj2[char2]++ : (obj2[char2] = 1);
  }

  const lengthObj1 = Object.keys(obj1).length;
  const lengthObj2 = Object.keys(obj2).length;

  const largerObj = lengthObj1 > lengthObj2 ? obj1 : obj2;
  const smallerObj = lengthObj1 > lengthObj2 ? obj2 : obj1;

  let count = 0;

  for (const [key, value] of Object.entries(largerObj)) {
    const char2 = smallerObj[key];

    if (!char2) {
      count++;
      continue;
    }

    const difference = Math.abs(char2 - value);

    count += difference;
  }

  return count;
}

const result = distance("biting", "sitting");

console.log(`Result: ${result}`);
```
