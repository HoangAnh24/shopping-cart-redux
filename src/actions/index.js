import * as Types from './../constants/ActionType';

export const actionAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity,
    }
}