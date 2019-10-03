function getMineIndexs(rowNum, mineNum) {
  const mineIndexs = []

  for (let i = 0; i < mineNum; i++) {
    let randomNum = null

    do {
      randomNum = Math.floor(Math.random() * rowNum * rowNum)
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

function putMines(pane, rowNum, mineIndexs) {
  let newPane = pane

  for (let i = 0; i < mineIndexs.length; i++) {
    const x = Math.floor(mineIndexs[i] / rowNum)
    const y = mineIndexs[i] % rowNum
    newPane[x][y] = 'm'
    newPane = calcNeighborMineNum(newPane, x, y)
  }
  return newPane
}

function initMinePane(rowNum, mineNum) {
  let pane = new Array(rowNum)
  for (let i = 0; i < rowNum; i++) {
    pane[i] = (new Array(rowNum)).fill(0)
  }

  const mineIndexs = getMineIndexs(rowNum, mineNum)
  pane = putMines(pane, rowNum, mineIndexs)
  return pane
}

function initMinePaneState(minePane = []) {
  if (!Array.isArray(minePane) || !minePane.length) {
    return []
  }

  const paneState = []

  for (let i = 0; i < minePane.length; i++) {
    const row = minePane[i]
    paneState[i] = (new Array(row.length)).fill({})
    for (let j = 0; j < row.length; j++) {
      const item = {
        id: i * row.length + j,
        value: minePane[i][j],
        mark: null,
        open: false,
      }
      paneState[i][j] = item
    }
  }

  return paneState
}

export { initMinePane, initMinePaneState }
