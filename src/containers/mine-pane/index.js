import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Square from 'components/square'
import initMinePane from 'data/mine-pane'

class MinePane extends React.Component {
  static propTypes = {
    rowNum: PropTypes.number,
    mineNum: PropTypes.number
  }

  static defaultProps = {
    rowNum: 9,
    mineNum: 10
  }

  constructor(props) {
    super(props)
    this.state = {
      minePane: initMinePane(props.rowNum, props.mineNum),
      openFlags: this.initopenFlags(props.rowNum),
      markFlags: this.initMarkFlags(props.rowNum)
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

  open(i, j, bubble = true) {
    const row = this.state.openFlags[i]

    if (row === undefined || row[j] === undefined || row[j]) {
      return
    }

    this.setState((prevState) => {
      const { openFlags } = prevState
      openFlags[i][j] = true

      return {
        openFlags
      }
    }, () => {
      const { minePane } = this.state
      const square = minePane[i][j]
      if (bubble && square === 0) {
        this.openAround(i, j)
      }
    })
  }

  mark(i, j) {
    const row = this.state.markFlags[i]

    if (row === undefined || row[j] === undefined || row[j]) {
      return
    }

    const { markFlags } = this.state
    markFlags[i][j] = true
    this.setState({
      markFlags
    })
  }

  handleSquareClick(i, j) {
    if (this.state.minePane[i][j] === 'm') {
      this.openAll()
    }

    this.open(i, j)
  }

  handleSquareContextMenu(i, j, e) {
    e.preventDefault()
    this.mark(i, j)
  }

  render() {
    const items = []
    for (let i = 0; i < this.props.rowNum; i++) {
      for (let j = 0; j < this.props.rowNum; j++) {
        items.push(
          <Square
            key={i * this.props.rowNum + j}
            mineMark={this.state.minePane[i][j]}
            open={this.state.openFlags[i][j]}
            marked={this.state.markFlags[i][j]}
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
      <Pane>
        {items}
      </Pane>
    )
  }
}

export default MinePane
