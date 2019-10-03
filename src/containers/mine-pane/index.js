import React from 'react'
import PropTypes from 'prop-types'
import Square from 'components/square'
import { initMinePane, initMinePaneState } from 'data/mine-pane'
import './index.scss'

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
    const paneGridStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${this.props.rowNum}, 30px)`,
      gridTemplateRows: `repeat(${this.props.rowNum}, 30px)`
    }

    return (
      <div
        className={`mine-pane row-${this.props.rowNum}`}
        style={paneGridStyle}
      >
          {
            this.state.minePane.map((row, rowIndex) => row.map((item, itemIndex) => (
                < Square
                  key={item.id}
                  {...item}
                  onSquareClick={() => { this.handleSquareClick(rowIndex, itemIndex) }}
                  onSquareContextMenu={(e) => {
                    this.handleSquareContextMenu(rowIndex, itemIndex, e)
                  }}
                />
            )))
          }
      </div>
    )
  }
}

export default MinePane
