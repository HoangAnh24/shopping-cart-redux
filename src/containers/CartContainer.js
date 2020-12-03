import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';
import Cart from '../components/cart-store/Cart';
import CartItem from '../components/cart-store/CartItem';
import CartResult from '../components/cart-store/CartResult';
import * as Message from './../constants/Message'

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
    let result = <tr><td style={{textAlign: 'center'}} colSpan="6">{Message.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) { 
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index} 
                        item ={item}
                        index={index}
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

export default connect(mapStateToProps, null)(CartContainer);