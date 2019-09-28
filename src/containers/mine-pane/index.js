import React from 'react'
import styled from 'styled-components'
import Square from 'components/square'
import initMinePane from 'data/mine-pane'

export default function MinewPane() {
  const ROW = 9
  const MINE_NUM = 10

  initMinePane(ROW, MINE_NUM)

  const items = []

  for (let i = 0; i < ROW * ROW; i++) {
    items.push(<Square key={i} />)
  }

  const Pane = styled.div`
    display: grid;
    grid-template-columns: repeat(${ROW}, 30px);
    grid-template-rows: repeat(${ROW}, 30px);
    justify-content: center;
    margin: 100px auto;
  `

  return (
    <Pane>
      {items}
    </Pane>
  )
}
