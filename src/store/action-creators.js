import * as actionTypes from './action-types'

export const markMine = () => ({
  type: actionTypes.MARK_MINE,
  value: 1
})

export const unmarkMine = () => ({
  type: actionTypes.UNMARK_MINE,
  value: 1
})

export const waitResult = () => ({
  type: actionTypes.WAIT_RESULT
})

export const resetResult = () => ({
  type: actionTypes.RESET_RESULT
})

export const sendFailResult = () => ({
  type: actionTypes.SEND_FAIL_RESULT
})

export const sendWinResult = () => ({
  type: actionTypes.SEND_WIN_RESULT
})
