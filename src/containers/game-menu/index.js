import Menu from 'containers/menu'
import { connect } from 'react-redux'
import { setGameGrade } from 'store/action-creators'
import { gradeKeys } from 'common/config'

const { JUNIOR, MIDDLE, SENIOR } = gradeKeys

const menu = {
  title: '游戏',
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
  menu.activeIndex = Object.keys(gradeKeys).indexOf(grade)

  return {
    menu
  }
}

const mapDispatchesToProps = (dispatch) => ({
  setGameGrade(grade) {
    dispatch(setGameGrade(grade))
  }
})


export default connect(mapStateToProps, mapDispatchesToProps)(Menu)
