import React from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import MinePane from 'containers/mine-pane'
import TimeBoard from 'containers/time-board'
import MineCounter from 'components/mine-counter'
import GameResult from 'containers/game-result'
import GameMenu from 'containers/game-menu-item'
import store from 'store'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="panel">
          <div className="menu"><GameMenu /></div>
          <div className="status">
            <MineCounter />
            <GameResult />
            <TimeBoard />
          </div>
          <MinePane/>
        </div>
      </div>
    </Provider>
  )
}

export default App
