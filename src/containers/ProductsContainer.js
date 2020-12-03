import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/products-store/Products';
import Product from "./../components/products-store/Product";
import PropTypes from 'prop-types';
import { actionAddToCart } from './../actions/index';

class ProductsContainer extends Component {
    render() {
        let {products} = this.props;
        return (
            <Products products={products} > 
                { this.showProducts(products) }
            </Products>
        );
    }
    showProducts(products) {
        let  result = null;
        let { onAddToCart } = this.props;
        if(products.length > 0) {
            result = products.map((product,index) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} />
            });
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
        })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actionAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);