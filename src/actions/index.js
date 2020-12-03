import * as types from './../constans/ActionType';

export const actionAddToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity,
    }
}