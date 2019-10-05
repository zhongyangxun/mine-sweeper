import { deepCopy } from 'common/util'
import * as actionTypes from './action-types'

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUB_MINE_NUM: {
      const newState = deepCopy(state)
      newState.rowNum--
      return newState
    }
    case actionTypes.ADD_MINE_NUM: {
      const newState = deepCopy(state)
      newState.rowNum++
      return newState
    }
    default:
      return state
  }
}

export default reducer
