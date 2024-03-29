import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function computeClass(props) {
  const markDisplay = (!props.open || props.value === 0) && 'hide'
  const markValue = props.open && `mine-mark-${props.value}`
  const openClass = props.open ? 'open' : ''
  const markType = `mark-${props.mark}`

  return {
    markDisplay,
    markValue,
    openClass,
    markType
  }
}

function Square(props) {
  const { value, open, mark } = props
  const computedClasses = useMemo(() => computeClass({ value, open, mark }), [value, open, mark])

  return (
    <div
      className={`square border ${computedClasses.markType} ${computedClasses.openClass}` }
      onClick={() => { props.onSquareClick() }}
      onContextMenu={(e) => { props.onSquareContextMenu(e) }}
    >
      {
        props.open && (
          <div className={`mine-mark ${computedClasses.markDisplay} ${computedClasses.markValue}`}>
            {props.value}
          </div>
        )
      }
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

const areEqual = (prevProps, nextProps) => (
  prevProps.open === nextProps.open && prevProps.mark === nextProps.mark
)

export default React.memo(Square, areEqual)
