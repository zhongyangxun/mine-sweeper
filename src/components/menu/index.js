import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Menu(props) {
  return (
    <div className="menu">
      {
        props.menu.map((item, index) => (
          <div className="item" key={index}>
            <div className="name" >{item.title}</div>
            {
              item.submenu
                ? (
                  <div className="menu-sub">
                      {
                        item.submenu.map((subItem, subIndex) => (
                        <div className={`item ${item.activeIndex === subIndex && 'active'}`} key={subIndex} onClickCapture={() => { subItem.callback(props) }}>
                          {subItem.title}
                        </div>
                        ))
                      }
                    </div>
                )
                : null
            }
          </div>
        ))
      }
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.array
}

export default Menu
