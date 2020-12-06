import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';
import Cart from '../components/cart-store/Cart';
import CartItem from '../components/cart-store/CartItem';
import CartResult from '../components/cart-store/CartResult';
import * as Message from './../constants/Message';
import { actionRemoveProductInCart, actionChangeMessage, actionUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
    render() {
        let { cart } = this.props;
        return (
            <Cart> 
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        );
    }

    showCartItem = (cart) => {
        let { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props; 
        let result = <tr><td style={{textAlign: 'center'}} colSpan="6">{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) { 
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index} 
                        item ={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if(cart.length > 0) {
            result = <CartResult cart={ cart } />;
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
        }),
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => { 
            dispatch(actionRemoveProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actionChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actionUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);