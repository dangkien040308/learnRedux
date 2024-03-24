import './App.css'
import { IncreaseCount , DecreaseCount } from './redux/action'
import { store } from './redux/store'
import { connect } from 'react-redux'
function App(props) {
  console.log('props ',props)
  const handleIncrease = () => {
    props.increaseCount()
  }
  const handleDecrease = () => {
    props.decreaseCount()
  }
  return (
    <>
      <div>
        <div>{store.getState().count}</div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </>
  )
}

function mapStatetoProps() {
  return {
    count : store.getState().count
  }
}
function mapDispatchtoProps () {
  return {
    increaseCount : () => store.dispatch(IncreaseCount()),
    decreaseCount : () => store.dispatch(DecreaseCount())
  }
}

export default connect(mapStatetoProps , mapDispatchtoProps)(App)
