import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function MenuItem(props) {
  const [activeIndex, setActiveIndex] = useState(props.data.activeIndex)

  const handleSubMenuClick = (item, index) => {
    item.callback(props)
    if (activeIndex !== undefined) setActiveIndex(index)
  }

  return (
    <div className="menu-item">
      <div className="title">{props.data.title}</div>
      {
        props.data.submenu
          ? (
            <div className="menu-sub">
                {
                  props.data.submenu.map((item, index) => (
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

MenuItem.propTypes = {
  data: PropTypes.object
}

MenuItem.defaultProps = {
  data: {}
}

export default MenuItem
