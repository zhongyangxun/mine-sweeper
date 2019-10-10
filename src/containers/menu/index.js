import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Menu(props) {
  const [activeIndexs, setActiveIndexs] = useState(new Array(props.menu.length))

  const handleSubMenuClick = (subItem, subIndex, index) => {
    subItem.callback(props)
    const newActiveIndexs = Array.from(activeIndexs)
    newActiveIndexs[index] = subIndex
    setActiveIndexs(newActiveIndexs)
  }

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
                        <div
                          className={`item ${activeIndexs[index] === subIndex && 'active'}`}
                          key={subIndex}
                            onClick={() => { handleSubMenuClick(subItem, subIndex, index) }}
                        >
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

Menu.defaultProps = {
  menu: []
}

export default Menu
