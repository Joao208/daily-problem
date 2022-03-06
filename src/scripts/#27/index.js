/**
 * @challenge
 * @day 27 (06/03/2022)
 * @description You are given a hash table where the key is a course code, and the value is a list of all the course codes that are prerequisites for the key. Return a valid ordering in which we can complete the courses. If no such ordering exists, return NULL.
 * @complexity O(n^2)
 * @time 0.3ms
 */
function dayTwentySeven() {
  console.log(`Expected: ['CSC100', 'CSC200', 'CSC300']`)
  console.time('Tempo de execução')

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
  console.timeEnd('Tempo de execução')
}

module.exports = dayTwentySeven
