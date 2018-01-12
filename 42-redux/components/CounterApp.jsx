import { connect } from 'react-redux'
import { INCREMENT, incrementBy, DECREMENT, CLEAR } from '../actions'
import Counter from './Counter'

const mapStateToProps = (state, ownProps) => {
 return {
   value: state
 }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
   onIncrement: () => {
     dispatch({ type: INCREMENT })
   },
   onDecrement: () => {
     dispatch({ type: DECREMENT })
   },
   onClear: () => {
     dispatch({ type: CLEAR })
   },
   onIncrementBy5: () => {
     dispatch(incrementBy(5))
   }
   },
   onIncrementBy10: () => {
     dispatch(incrementBy(10))
   }
 }
}
const CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterApp
