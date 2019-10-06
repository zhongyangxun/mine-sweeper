import { connect } from 'react-redux'
import GameResult from 'components/game-result'


const mapStateToProps = (state) => ({
  result: state.result
})

export default connect(mapStateToProps)(GameResult)
