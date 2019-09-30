import React from 'react'
import './index.scss'

function handleSquareClick(roundMineNum) {
  console.log(roundMineNum)
}

export default function Square(props) {
  return (
    <div className="square" onClick={() => { handleSquareClick(props.roundMineNum) }} />
  )
}
