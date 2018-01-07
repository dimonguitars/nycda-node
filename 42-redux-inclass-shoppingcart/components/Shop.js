import { connect } from 'react-redux'
import { ADD_TO_CART, CHECKOUT } from '../actions'
import Product from './Product'

const mapStateToProps = (state, ownProps) => {
 return {
   value: state
 }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
   onAddToCart: () => {
     dispatch({ type: ADD_TO_CART })
   },
   onCheckout: () => {
     dispatch({ type: CHECKOUT })
   }
 }
}
const Shop = connect(mapStateToProps, mapDispatchToProps)(Product)

export default Shop
