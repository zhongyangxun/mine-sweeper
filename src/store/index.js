import { createStore } from 'redux'
import { gameResults, gameGrades, gradeKeys } from 'common/config'
import reducer from './reducer'

const defaultGrade = gradeKeys.JUNIOR
const { MINE_NUM, ROW_NUM } = gameGrades[defaultGrade]

const defaultState = {
  grade: defaultGrade,
  rowNum: ROW_NUM,
  mineNum: MINE_NUM,
  unmarkedMineNum: MINE_NUM,
  result: gameResults.NOT_YET,
  playing: false
}

const store = createStore(
  reducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
