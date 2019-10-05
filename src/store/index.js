import { createStore } from 'redux'
import reducer from './reducer'

const defaultState = {
  rowNum: 9,
  mineNum: 16
}

const store = createStore(reducer, defaultState)

export default store
