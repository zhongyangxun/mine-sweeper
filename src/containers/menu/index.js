import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Menu(props) {
  const [activeIndex, setActiveIndex] = useState(props.menu.activeIndex)

  const handleSubMenuClick = (item, index) => {
    item.callback(props)
    setActiveIndex(index)
  }

  return (
    <div className="menu">
      <div className="title">{props.menu.title}</div>
      {
        props.menu.submenu
          ? (
            <div className="menu-sub">
                {
                  props.menu.submenu.map((item, index) => (
                  <div
                      className={`item ${activeIndex === index ? 'active' : ''}`}
                    key={index}
                      onClick={() => { handleSubMenuClick(item, index) }}
                  >
                    {item.title}
                  </div>
                  ))
                }
              </div>
          )
          : null
      }
    </div>
  )
}

Menu.propTypes = {
  menu: PropTypes.object
}

Menu.defaultProps = {
  menu: {}
}

export default Menu
