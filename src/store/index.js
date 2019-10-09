import { createStore } from 'redux'
import { gameResults, gameGrades } from 'common/config'
import reducer from './reducer'

const { MINE_NUM, ROW_NUM } = gameGrades.JUNIOR_GRADE

const defaultState = {
  rowNum: ROW_NUM,
  mineNum: MINE_NUM,
  unmarkedMineNum: MINE_NUM,
  result: gameResults.NOT_YET,
  playing: false,
  reset: false
}

const store = createStore(
  reducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
