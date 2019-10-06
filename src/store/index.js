import { createStore } from 'redux'
import { gameResults } from 'common/config'
import reducer from './reducer'

const MINE_NUM = 16
const ROW_NUM = 9

const defaultState = {
  rowNum: ROW_NUM,
  mineNum: MINE_NUM,
  unmarkedMineNum: MINE_NUM,
  result: gameResults.NOT_YET
}

const store = createStore(
  reducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
