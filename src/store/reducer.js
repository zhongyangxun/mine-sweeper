import { deepCopy } from 'common/util'
import { gameResults } from 'common/config'
import * as actionTypes from './action-types'

const reducer = (state, action) => {
  // Must do this, because the state couldn't be changed.
  const newState = deepCopy(state)

  switch (action.type) {
    case actionTypes.UNMARK_MINE: {
      newState.unmarkedMineNum++
      return newState
    }

    case actionTypes.MARK_MINE: {
      newState.unmarkedMineNum--
      return newState
    }

    case actionTypes.WAIT_RESULT: {
      newState.result = gameResults.WAIT
      return newState
    }

    case actionTypes.RESET_RESULT: {
      newState.result = gameResults.NOT_YET
      return newState
    }

    case actionTypes.SEND_FAIL_RESULT: {
      newState.result = gameResults.FAIL
      return newState
    }

    case actionTypes.SEND_WIN_RESULT: {
      newState.result = gameResults.WIN
      return newState
    }

    case actionTypes.SET_GAME_GRADE: {
      const { ROW_NUM, MINE_NUM } = action.value
      newState.rowNum = ROW_NUM
      newState.mineNum = MINE_NUM
      newState.unmarkedMineNum = MINE_NUM
      newState.playing = false
      return newState
    }

    case actionTypes.TOGGLE_PLAYING_STATUS: {
      newState.playing = !state.playing
      return newState
    }

    case actionTypes.RESET_GAME: {
      newState.playing = false
      newState.unmarkedMineNum = newState.mineNum
      return newState
    }

    default:
      return state
  }
}

export default reducer
