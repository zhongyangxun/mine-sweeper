import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Board from 'components/board'
import { paddingZero } from 'common/util'

function MineCounter(props) {
  return (
    <div className="mine-counter">
      <Board content={props.content} />
    </div>
  )
}

MineCounter.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

MineCounter.defaultProps = {
  content: 0
}

const mapStateToProps = (state) => ({
  content: paddingZero(state.mineNum)
})

export default connect(mapStateToProps)(MineCounter)
