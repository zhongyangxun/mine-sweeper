import * as actionTypes from './action-types'

export const addMineNum = (num = 1) => ({
  type: actionTypes.ADD_MINE_NUM,
  value: num
})

export const subMineNum = (num = 1) => ({
  type: actionTypes.SUB_MINE_NUM,
  value: num
})
