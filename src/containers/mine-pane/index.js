import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Square from 'components/square'
import * as actions from 'store/action-creators'
import { initMinePane, initMinePaneState } from 'data/mine-pane'
import { markTypes } from './config'
import './index.scss'

class MinePane extends React.Component {
  static propTypes = {
    rowNum: PropTypes.number,
    mineNum: PropTypes.number,
    onGameStart: PropTypes.func,
    onGameEnd: PropTypes.func,
    playing: PropTypes.bool,
    subOneMine: PropTypes.func,
    addOneMine: PropTypes.func
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

  isMarked(i, j) {
    return Boolean(this.state.minePane[i][j].mark)
  }

  isOpened(i, j) {
    return this.state.minePane[i][j].open
  }

  open(i, j, bubble = true) {
    if (!this.isPositionInPane(i, j) || this.isOpened(i, j) || this.isMarked(i, j)) {
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
    const { FLAG, QUESTION } = markTypes
    const { minePane } = this.state
    let itemMark = minePane[i][j].mark

    if (itemMark === null) {
      itemMark = FLAG
      this.props.subOneMine()
    } else if (itemMark === FLAG) {
      itemMark = QUESTION
      this.props.addOneMine()
    } else if (itemMark === QUESTION) {
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
              <Square
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

const mapDispatchsToProps = (dispatch) => ({
  subOneMine() {
    dispatch(actions.subMineNum())
  },
  addOneMine() {
    dispatch(actions.addMineNum())
  }
})

export default connect(null, mapDispatchsToProps)(MinePane)
