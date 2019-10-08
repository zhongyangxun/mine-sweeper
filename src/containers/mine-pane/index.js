import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Square from 'components/square'
import * as actions from 'store/action-creators'
import { initMinePane, initMinePaneState } from 'data/mine-pane'
import { sleep } from 'common/util'
import { gameResults } from 'common/config'
import { markTypes, MINE_SIGN } from './config'
import './index.scss'

class MinePane extends React.Component {
  static propTypes = {
    rowNum: PropTypes.number,
    mineNum: PropTypes.number,
    onGameStart: PropTypes.func,
    onGameEnd: PropTypes.func,
    playing: PropTypes.bool,
    markMine: PropTypes.func,
    unmarkMine: PropTypes.func,
    waitResult: PropTypes.func,
    sendFailResult: PropTypes.func,
    resetResult: PropTypes.func,
    result: PropTypes.string,
    sendWinResult: PropTypes.func,
    unmarkedMineNum: PropTypes.number
  }

  static defaultProps = {
    rowNum: 9,
    mineNum: 16,
    playing: false,
    ended: false
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
      if (this.props.result === gameResults.WAIT) {
        this.props.resetResult()
      }
      const { minePane } = this.state
      const square = minePane[i][j].value
      if (bubble && square === 0) {
        this.openAround(i, j)
      }
    })
  }

  endGame() {
    this.setState({
      ended: true
    })
    this.props.onGameEnd()
  }

  isFailed(i, j) {
    return this.state.minePane[i][j].value === MINE_SIGN
  }

  onFail() {
    this.openAll()
    this.props.sendFailResult()
    this.endGame()
  }

  isWinning() {
    const unOpendSquaresNum = this.state.minePane.flat().filter((item) => !item.open).length

    return unOpendSquaresNum === this.props.mineNum
  }

  onWin() {
    this.props.sendWinResult()
    this.endGame()
  }

  mark(i, j) {
    const { FLAG, QUESTION } = markTypes
    const { minePane } = this.state
    let itemMark = minePane[i][j].mark

    if (itemMark === null) {
      if (this.props.unmarkedMineNum === 0) {
        return
      }
      itemMark = FLAG
      this.props.markMine()
    } else if (itemMark === FLAG) {
      itemMark = QUESTION
      this.props.unmarkMine()
    } else if (itemMark === QUESTION) {
      itemMark = null
    }
    minePane[i][j].mark = itemMark

    this.setState({
      minePane
    })
  }

  async handleSquareClick(i, j) {
    this.props.waitResult()
    await sleep(200)

    if (!this.isMarked(i, j) && this.isFailed(i, j)) {
      this.onFail()
      return
    }

    if (!this.props.playing) {
      this.props.onGameStart()
    }

    this.props.waitResult()

    this.open(i, j)

    if (!this.isMarked(i, j) && this.isWinning()) {
      this.onWin()
    }
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

    const endedClass = this.state.ended ? 'ended' : ''

    return (
      <div
        className={`mine-pane row-${this.props.rowNum} ${endedClass}`}
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

const mapStateToProps = (state) => state

const mapDispatchsToProps = (dispatch) => ({
  unmarkMine() {
    dispatch(actions.unmarkMine())
  },
  markMine() {
    dispatch(actions.markMine())
  },
  waitResult() {
    dispatch(actions.waitResult())
  },
  resetResult() {
    dispatch(actions.resetResult())
  },
  sendFailResult() {
    dispatch(actions.sendFailResult())
  },
  sendWinResult() {
    dispatch(actions.sendWinResult())
  }
})

export default connect(mapStateToProps, mapDispatchsToProps)(MinePane)
