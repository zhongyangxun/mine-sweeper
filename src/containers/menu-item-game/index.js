import MenuItem from 'containers/menu-item'
import { connect } from 'react-redux'
import { resetGame } from 'store/action-creators'

const menuItem = {
  title: '游戏',
  submenu: [
    {
      title: '重新开始',
      callback: (props) => {
        props.resetGame()
      }
    }
  ]
}

const mapStateToProps = () => ({
  data: menuItem
})

const mapDispatchesToProps = (dispatch) => ({
  resetGame() {
    dispatch(resetGame())
  }
})

export default connect(mapStateToProps, mapDispatchesToProps)(MenuItem)
