import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './index.scss'

function Square(props) {
  const mineMarkDisplay = props.open ? 'block' : 'none'
  const MineMarkWrapper = styled.div`
    display: ${mineMarkDisplay};
    text-align: center;
  `
  return (
    <div className="square" onClick={() => { props.onSquareClick() }} >
      <MineMarkWrapper>
        {props.mineMark}
      </MineMarkWrapper>
    </div>
  )
}

Square.propTypes = {
  mineMark: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  onSquareClick: PropTypes.func,
  open: PropTypes.bool
}

Square.defaultProps = {
  mineMark: 0,
  open: false
}

export default Square
