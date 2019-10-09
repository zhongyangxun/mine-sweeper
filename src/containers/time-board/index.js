import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Board from 'components/board'
import { paddingZero } from 'common/util'

const MAX_TIME = 999
let timer = null

function TimeBoard(props) {
  const [time, setTime] = useState(0)

  useEffect(() => {
    if (time >= MAX_TIME || !props.timing) {
      clearTimeout(timer)
      return
    }
    timer = setTimeout(() => {
      setTime(time + 1)
    }, 1000)
  })

  return (
    <div className="time-board">
      <Board content={paddingZero(time)} />
    </div>
  )
}

TimeBoard.propTypes = {
  timing: PropTypes.bool
}

TimeBoard.defaultProps = {
  timing: false
}

const mapStateToProps = (state) => ({
  timing: state.playing
})

export default connect(mapStateToProps)(TimeBoard)
