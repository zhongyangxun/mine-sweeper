import React from 'react'
import Square from 'components/square'
import './index.scss'
import initMinePane from 'data/mine-pane'

export default function MinewPane() {
  const ROW = 9
  const MINE_NUM = 10

  initMinePane(ROW, MINE_NUM)

  const items = []

  for (let i = 0; i < ROW * ROW; i++) {
    items.push(<Square key={i} />)
  }

  return (
    <div className="mine-pane">
      {items}
    </div>
  )
}
