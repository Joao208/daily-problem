# Course Prerequisites

You are given a hash table where the key is a course code, and the value is a list of all the course codes that are prerequisites for the key. Return a valid ordering in which we can complete the courses. If no such ordering exists, return NULL.

### Sample Input
```
{
  'CSC300': ['CSC100', 'CSC200'], 
  'CSC200': ['CSC100'], 
  'CSC100': []
}
```
### Sample Output
```
['CSC100', 'CSC200', 'CSCS300']
```
### Explanation
This input should return the order that we need to take these courses:

### Solution
```js
function courses_to_take(course_to_prereqs) {
  const result = new Set()
  const array = Object.entries(course_to_prereqs).sort((a, b) => {
    if (a[1].length < b[1].length) return 1

    if (a[1].length > b[1].length) return -1

    return 0
  })

  for (const [key, value] of array) {
    value.forEach((item) => result.add(item))

    for (const c of value) {
      course_to_prereqs[c].forEach((item) => result.add(item))
    }

    result.add(key)
  }

  return [...result.values()]
}

const courses = {
  CSC300: ['CSC100', 'CSC200'],
  CSC200: ['CSC100'],
  CSC100: [],
}

const result = courses_to_take(courses)

console.log(`Result: [${result}]`)
```
