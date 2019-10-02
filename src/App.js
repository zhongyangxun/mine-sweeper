import React from 'react'
import './App.scss'
import MinePane from 'containers/mine-pane'
import TimeBoard from 'containers/time-board'

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
      <div className="app">
        <div className="panel">
          <div className="status">
            <div className="mine-num">
              <TimeBoard timing={this.state.playing} />
            </div>
            <div className="result"></div>
            <div className="timer"></div>
          </div>
          <MinePane
            onGameStart={() => { this.handleGameStart() }}
            onGameEnd={() => { this.handleGameEnd() }}
            playing={this.state.playing}
          />
        </div>
      </div>
    )
  }
}

export default App
