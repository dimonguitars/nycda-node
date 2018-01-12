import { connect } from 'react-redux';
import { addToCart } from '../../actions'
import Product from './Product'

const mapStateToProps = (state) => {
 return {
   products: state.products
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
   addToCart: (product) => {
     dispatch(addToCart(product))
   }
 }
}
const Products = connect(mapStateToProps, mapDispatchToProps)(Product)

export default Products
