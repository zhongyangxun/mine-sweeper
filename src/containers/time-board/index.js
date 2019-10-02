import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CountBoard from 'components/count-board'
import { paddingZero } from 'common/util'

const MAX_TIME = 999
let timer = null

export default function TimeBoard(props) {
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
      <CountBoard content={paddingZero(time)} />
    </div>
  )
}

TimeBoard.propTypes = {
  timing: PropTypes.bool
}

TimeBoard.defaultProps = {
  timing: false
}
