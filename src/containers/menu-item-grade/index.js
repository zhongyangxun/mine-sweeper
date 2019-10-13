import MenuItem from 'containers/menu-item'
import { connect, batch } from 'react-redux'
import { setGameGrade, resetGame } from 'store/action-creators'
import { gradeKeys } from 'common/config'

const { JUNIOR, MIDDLE, SENIOR } = gradeKeys

const menuItem = {
  title: '等级',
  activeInex: 0,
  submenu: [
    {
      title: '初级',
      callback: (props) => {
        props.setGameGrade(JUNIOR)
      }
    },
    {
      title: '中级',
      callback: (props) => {
        props.setGameGrade(MIDDLE)
      }
    },
    {
      title: '高级',
      callback: (props) => {
        props.setGameGrade(SENIOR)
      }
    }
  ]
}

const mapStateToProps = (state) => {
  const { grade } = state
  menuItem.activeIndex = Object.keys(gradeKeys).indexOf(grade)

  return {
    data: menuItem
  }
}

const mapDispatchesToProps = (dispatch) => ({
  setGameGrade(grade) {
    batch(() => {
      dispatch(setGameGrade(grade))
      dispatch(resetGame())
    })
  }
})

export default connect(mapStateToProps, mapDispatchesToProps)(MenuItem)
