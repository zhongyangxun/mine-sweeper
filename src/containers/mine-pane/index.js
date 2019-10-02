import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Square from 'components/square'
import { initMinePane, initMinePaneState } from 'data/mine-pane'

class MinePane extends React.Component {
  static propTypes = {
    rowNum: PropTypes.number,
    mineNum: PropTypes.number,
    onGameStart: PropTypes.func,
    onGameEnd: PropTypes.func,
    playing: PropTypes.bool
  }

  static defaultProps = {
    rowNum: 9,
    mineNum: 16,
    playing: false
  }

  constructor(props) {
    super(props)
    this.state = {
      minePane: initMinePaneState(initMinePane(props.rowNum, props.mineNum))
    }
  }

  initopenFlags(row = this.props.rowNum) {
    const openFlags = []
    for (let i = 0; i < row; i++) {
      openFlags[i] = []
      for (let j = 0; j < row; j++) {
        openFlags[i][j] = false
      }
    }

    return openFlags
  }

  initMarkFlags(row = this.props.rowNum) {
    const markFlags = []
    for (let i = 0; i < row; i++) {
      markFlags[i] = []
      for (let j = 0; j < row; j++) {
        markFlags[i][j] = false
      }
    }

    return markFlags
  }

  openAround(i, j) {
    this.open(i - 1, j - 1)
    this.open(i - 1, j)
    this.open(i - 1, j + 1)

    this.open(i, j - 1)
    this.open(i, j + 1)

    this.open(i + 1, j - 1)
    this.open(i + 1, j)
    this.open(i + 1, j + 1)
  }

  openAll() {
    const { rowNum } = this.props

    for (let i = 0; i < rowNum; i++) {
      for (let j = 0; j < rowNum; j++) {
        this.open(i, j, false)
      }
    }
  }

  isPositionInPane(i, j) {
    const row = this.state.minePane[i]
    return row !== undefined && row[j] !== undefined
  }

  open(i, j, bubble = true) {
    if (!this.isPositionInPane(i, j) || this.state.minePane[i][j].open) {
      return
    }

    this.setState((prevState) => {
      const { minePane } = prevState
      minePane[i][j].open = true

      return {
        minePane
      }
    }, () => {
      const { minePane } = this.state
      const square = minePane[i][j].value
      if (bubble && square === 0) {
        this.openAround(i, j)
      }
    })
  }

  endGame() {
    this.openAll()
    this.props.onGameEnd()
  }

  mark(i, j) {
    const { minePane } = this.state
    let itemMark = minePane[i][j].mark

    if (itemMark === null) {
      itemMark = 'flag'
    } else if (itemMark === 'flag') {
      itemMark = 'question'
    } else if (itemMark === 'question') {
      itemMark = null
    }
    minePane[i][j].mark = itemMark

    this.setState({
      minePane
    })
  }

  handleSquareClick(i, j) {
    if (this.state.minePane[i][j].value === 'm') {
      this.endGame()
      return
    }

    if (!this.props.playing) {
      this.props.onGameStart()
    }

    this.open(i, j)
  }

  handleSquareContextMenu(i, j, e) {
    e.preventDefault()

    if (!this.props.playing) {
      this.props.onGameStart()
    }
    this.mark(i, j)
  }

  render() {
    const items = []
    for (let i = 0; i < this.props.rowNum; i++) {
      for (let j = 0; j < this.props.rowNum; j++) {
        const squareProps = this.state.minePane[i][j]
        items.push(
          <Square
            {...squareProps}
            key={i * this.props.rowNum + j}
            onSquareClick={() => { this.handleSquareClick(i, j) }}
            onSquareContextMenu={(e) => { this.handleSquareContextMenu(i, j, e) }}
          />
        )
      }
    }

    const Pane = styled.div`
      display: grid;
      grid-template-columns: repeat(${this.props.rowNum}, 30px);
      grid-template-rows: repeat(${this.props.rowNum}, 30px);
      justify-content: center;
      margin: 100px auto;
    `
    return (
      <div className="mine-pane">
        <Pane>
          {items}
        </Pane>
      </div>
    )
  }
}

export default MinePane
