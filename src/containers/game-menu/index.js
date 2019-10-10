import Menu from 'containers/menu'
import { connect } from 'react-redux'
import { setGameGrade } from 'store/action-creators'
import { gameGrades } from 'common/config'

const { JUNIOR_GRADE, MIDDLE_GRADE, SENIOR_GRADE } = gameGrades

const menu = [
  {
    title: '游戏',
    callback: null,
    submenu: [
      {
        title: '初级',
        callback: (props) => {
          props.setGameGrade(JUNIOR_GRADE)
        }
      },
      {
        title: '中级',
        callback: (props) => {
          props.setGameGrade(MIDDLE_GRADE)
        }
      },
      {
        title: '高级',
        callback: (props) => {
          props.setGameGrade(SENIOR_GRADE)
        }
      }
    ]
  },
  {
    title: '关于',
    callback: null
  }
]

const mapStateToProps = () => ({
  menu
})

const mapDispatchesToProps = (dispatch) => ({
  setGameGrade(grade) {
    dispatch(setGameGrade(grade))
  }
})


export default connect(mapStateToProps, mapDispatchesToProps)(Menu)
