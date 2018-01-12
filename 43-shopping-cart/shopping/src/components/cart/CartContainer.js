import { connect } from 'react-redux';
import { CHECKOUT } from '../../actions'
import Cart from './Cart'

const mapStateToProps = (state, ownProps) => {
 return {
   cart: state.cart
 }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
   clear: () => {
     dispatch({type: CHECKOUT})
   }
 }
}
const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default CartContainer
