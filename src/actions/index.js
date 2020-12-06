import * as Types from './../constants/ActionType';

export const actionAddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity,
    }
}

export const actionChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message,
    }
}

export const actionRemoveProductInCart = (product) => {
    return {
        type : Types.DELETE_PRODUCT_TO_CART,
        product,
    }
}