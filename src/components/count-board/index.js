import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function CountBoard(props) {
  return (
    <div className="count-board">
      {props.content}
    </div>
  )
}

CountBoard.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default CountBoard
