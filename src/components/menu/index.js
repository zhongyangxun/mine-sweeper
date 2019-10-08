import React from 'react'
import './index.scss'

function Menu() {
  return (
    <div className="menu">
      <div className="item" onClick={() => { console.log('clicked') }} >
        游戏
        <div className="menu-sub">
          <div className="item">初级</div>
          <div className="item">中级</div>
          <div className="item">高级</div>
        </div>
      </div>
      <div className="item">
        关于
      </div>
    </div>
  )
}

export default Menu
