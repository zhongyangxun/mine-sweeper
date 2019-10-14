import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import digitalFont from 'resource/fonts/digital-7/digital-7-mono.ttf'
import './index.scss'

const StyleWrapper = styled.div`
  @font-face {
    font-family: 'digital';
    src: url(${digitalFont});
  }

  .board {
    font-family: digital;
  }
`

function Board(props) {
  return (
    <StyleWrapper>
      <div className="board">
        {props.content}
      </div>
    </StyleWrapper>
  )
}

Board.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Board
