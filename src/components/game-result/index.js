import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function GameResult(props) {
  return (
    <div className={`game-result game-result-${props.result}`} />
  )
}

GameResult.propTypes = {
  result: PropTypes.string
}

export default GameResult
