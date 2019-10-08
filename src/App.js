import React from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import MinePane from 'containers/mine-pane'
import TimeBoard from 'containers/time-board'
import MineCounter from 'components/mine-counter'
import GameResult from 'containers/game-result'
import Menu from 'components/menu'
import store from 'store'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
  }

  handleGameStart() {
    this.setState({
      playing: true
    })
  }

  handleGameEnd() {
    this.setState({
      playing: false
    }, () => {
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <div className="panel">
            <Menu/>
            <div className="status">
              <MineCounter />
              <GameResult />
              <TimeBoard timing={this.state.playing} />
            </div>
            <MinePane
              onGameStart={() => { this.handleGameStart() }}
              onGameEnd={() => { this.handleGameEnd() }}
              playing={this.state.playing}
            />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
