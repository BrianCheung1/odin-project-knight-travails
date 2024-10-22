function knightMoves(pos1, pos2) {
  if (pos1[0] === pos2[0] && pos1[1] === pos2[1]) {
    return `You made it in 0 moves!`
  }

  let queue = [[pos1, [pos1]]]
  let visited = new Set([pos1.toString()])

  while (queue.length > 0) {
    let [currentLocation, path] = queue.shift()
    let [x, y] = currentLocation

    for (const [dx, dy] of possibleKnightMoves) {
      const newX = x + dx
      const newY = y + dy
      const newPos = [newX, newY]

      if (validPos(newX, newY) && !visited.has(newPos.toString())) {
        const newPath = [...path, newPos]

        if (newPos[0] === pos2[0] && newPos[1] === pos2[1]) {
          return `You made it in ${
            newPath.length - 1
          } moves! Here's your path: ${JSON.stringify(newPath)}`
        }

        visited.add(newPos.toString())
        queue.push([newPos, newPath])
      }
    }
  }
  return "No Possible Paths"
}

const possibleKnightMoves = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
]

function validPos(x, y) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7
}

console.log(knightMoves([3, 3], [4, 3]))
console.log(knightMoves([0, 0], [1, 2]))
console.log(knightMoves([0, 0], [3, 3]))
console.log(knightMoves([0, 0], [8, 8]))