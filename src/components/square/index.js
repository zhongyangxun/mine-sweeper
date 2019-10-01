import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Square(props) {
  const mineMarkDisplay = (!props.open || props.mineMark === 0) && 'hide'
  const mineMarkClass = props.open && `mine-mark-${props.mineMark}`

  return (
    <div
      className = { `square ${props.open && 'open'} ${props.marked && 'marked'}` }
      onClick={() => { props.onSquareClick() }}
      onContextMenu={(e) => { props.onSquareContextMenu(e) }}
    >
      <div className={`mine-mark ${mineMarkDisplay} ${mineMarkClass}`}>
        {props.mineMark}
      </div>
    </div>
  )
}

Square.propTypes = {
  mineMark: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onSquareClick: PropTypes.func,
  open: PropTypes.bool,
  marked: PropTypes.bool,
  onSquareContextMenu: PropTypes.func
}

Square.defaultProps = {
  mineMark: 0,
  open: false,
  marked: false
}

export default Square
