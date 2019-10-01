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
      openFlags: this.initopenFlags(props.rowNum)
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

  open(i, j) {
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
      if (minePane[i][j] === 0) {
        this.openAround(i, j)
      }
    })
  }

  handleSquareClick(i, j) {
    this.open(i, j)
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
            onSquareClick={() => { this.handleSquareClick(i, j) }}
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
