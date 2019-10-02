import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Square(props) {
  const mineMarkDisplay = (!props.open || props.value === 0) && 'hide'
  const mineMarkClass = props.open && `mine-mark-${props.value}`

  return (
    <div
      className = { `square ${props.open && 'open'} mark-${props.mark}` }
      onClick={() => { props.onSquareClick() }}
      onContextMenu={(e) => { props.onSquareContextMenu(e) }}
    >
      <div className={`mine-mark ${mineMarkDisplay} ${mineMarkClass}`}>
        {props.value}
      </div>
    </div>
  )
}

Square.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onSquareClick: PropTypes.func,
  open: PropTypes.bool,
  mark: PropTypes.string,
  onSquareContextMenu: PropTypes.func
}

Square.defaultProps = {
  value: 0,
  open: false,
  mark: null
}

export default Square
