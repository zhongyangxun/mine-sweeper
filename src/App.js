import React from 'react'
import './App.css'
import MinePane from 'containers/mine-pane'


function App() {
  return (
    <div className="app">
      <div className="panel">
        <div className="status">
          <div className="mine-num"></div>
          <div className="result"></div>
          <div className="timer"></div>
        </div>
        <MinePane />
      </div>
    </div>
  )
}

export default App
