import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Board from 'components/board'
import { paddingZero } from 'common/util'
import { gameResults } from 'common/config'

const MAX_TIME = 999
let timer = null

function TimeBoard(props) {
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (!props.timing && props.result === gameResults.NOT_YET) {
      setTime(0)
      clearTimeout(timer)
      return
    }

    if (time >= MAX_TIME || !props.timing) {
      clearTimeout(timer)
      return
    }

    timer = setTimeout(() => {
      setTime(time + 1)
    }, 1000)
  }, [props.timing, props.result, time])

  return (
    <div className="time-board">
      <Board content={paddingZero(time)} />
    </div>
  )
}

TimeBoard.propTypes = {
  timing: PropTypes.bool,
  result: PropTypes.string
}

TimeBoard.defaultProps = {
  timing: false
}

const mapStateToProps = (state) => ({
  timing: state.playing,
  result: state.result
})

export default connect(mapStateToProps)(TimeBoard)
