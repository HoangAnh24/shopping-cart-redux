import * as types from '../constants/ActionType'
// let data = JSON.parse(localStorage.getItem('CART'));
let initialState = [
    {
        product : {
            id : 1,
            name : 'Iphone 7 Pluss',
            image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description : 'San pham apple',
            price : '400',
            inventory : 15,
            rating : 3
        },
        quantity : 5
    },
    {
        product : {
            id : 2,
            name : 'Iphone 8 Pluss',
            image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description : 'San pham apple',
            price : '600',
            inventory : 15,
            rating : 5
        },
        quantity : 2
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state]
        default: return [...state];
    }
}

export default cart;