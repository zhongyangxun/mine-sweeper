import React from 'react'
import styled from 'styled-components'
import Square from 'components/square'
import initMinePane from 'data/mine-pane'

export default function MinewPane() {
  const ROW = 9
  const MINE_NUM = 16

  const minePane = initMinePane(ROW, MINE_NUM)

  const items = []

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < ROW; j++) {
      items.push(
        <Square key={i * ROW + j} roundMineNum={minePane[i][j]} />
      )
    }
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
