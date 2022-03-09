/**
 * @challenge
 * @day 30 (09/03/2022)
 * @description You are given a 2D array of integers. Print out the clockwise spiral traversal of the matrix.
 * @complexity O(n*m)
 * @time 1.3ms
 */
function dayThirty() {
  console.log(`Expected: 1 2 3 4 5 10 15 20 19 18 17 16 11 6 7 8 9 14 13 12`)
  console.time('Tempo de execução')

  const UP = 0
  const RIGHT = 1
  const DOWN = 2
  const LEFT = 3

  const nextDirection = ({ direction }) => {
    return {
      [RIGHT]: DOWN,
      [DOWN]: LEFT,
      [LEFT]: UP,
      [UP]: RIGHT,
    }[direction]
  }

  const nextPosition = ({ position, direction }) => {
    if (direction == RIGHT) {
      return [position[0], position[1] + 1]
    }
    if (direction == DOWN) {
      return [position[0] + 1, position[1]]
    }
    if (direction == LEFT) {
      return [position[0], position[1] - 1]
    }
    if (direction == UP) {
      return [position[0] - 1, position[1]]
    }
  }

  const shouldChangeDirection = ({ M, r, c }) => {
    const inBoundR = 0 <= r < M.length
    const inBoundC = 0 <= c < M[0].length

    return !inBoundR || !inBoundC || !M?.[r]?.[c]
  }

  function matrix_spiral_print(M) {
    let remaining = M.length * M[0].length
    let currentDirection = RIGHT
    let currentPosition = [0, 0]

    console.log('Result:')

    while (remaining > 0) {
      const [r, c] = currentPosition

      console.log(M[r][c])
      M[r][c] = null

      remaining--

      const possibleNextPosition = nextPosition({
        position: currentPosition,
        direction: currentDirection,
      })

      const isChangeDirection = shouldChangeDirection({
        M,
        r: possibleNextPosition[0],
        c: possibleNextPosition[1],
      })

      if (isChangeDirection) {
        currentDirection = nextDirection({ direction: currentDirection })
        currentPosition = nextPosition({
          position: currentPosition,
          direction: currentDirection,
        })
      } else {
        currentPosition = possibleNextPosition
      }
    }
  }

  const grid = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ]

  matrix_spiral_print(grid)

  console.timeEnd('Tempo de execução')
}

module.exports = dayThirty
