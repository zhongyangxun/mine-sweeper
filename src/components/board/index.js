import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Board(props) {
  return (
    <div className="board">
      {props.content}
    </div>
  )
}

Board.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Board
