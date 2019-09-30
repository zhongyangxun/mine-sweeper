function getMineIndexs(row, mineNum) {
  const mineIndexs = []

  for (let i = 0; i < mineNum; i++) {
    let randomNum = null

    do {
      randomNum = Math.floor(Math.random() * row * row)
    } while (mineIndexs.indexOf(randomNum) > -1)

    mineIndexs.push(randomNum)
  }
  return mineIndexs
}

function calcNeighborMineNum(pane, x, y) {
  const newPane = pane
  function calculate(posX, posY) {
    if (newPane[posX] !== undefined && newPane[posX][posY] !== undefined && typeof newPane[posX][posY] === 'number') {
      newPane[posX][posY]++
    }
  }

  calculate(x - 1, y - 1)
  calculate(x - 1, y)
  calculate(x - 1, y + 1)
  calculate(x, y - 1)
  calculate(x, y + 1)
  calculate(x + 1, y - 1)
  calculate(x + 1, y)
  calculate(x + 1, y + 1)

  return newPane
}

function putMines(pane, row, mineIndexs) {
  let newPane = pane

  for (let i = 0; i < mineIndexs.length; i++) {
    const x = Math.floor(mineIndexs[i] / row)
    const y = mineIndexs[i] % row
    newPane[x][y] = 'm'
    newPane = calcNeighborMineNum(newPane, x, y)
  }
  return newPane
}

function initMinePane(row, mineNum) {
  let pane = new Array(row)
  for (let i = 0; i < row; i++) {
    pane[i] = (new Array(row)).fill(0)
  }

  const mineIndexs = getMineIndexs(row, mineNum)
  pane = putMines(pane, row, mineIndexs)
  return pane
}

export default initMinePane
