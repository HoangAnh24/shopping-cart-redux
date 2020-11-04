let initialState = [
    {
        id : 1,
        name : 'Iphone 7 Pluss',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
        rating : 3
    },
    {
        id : 2,
        name : 'Iphone 8 Pluss',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
        rating : 5
    },
    {
        id : 3,
        name : 'Iphone 9 Pluss',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
        rating : 1
    },
    {
        id : 4,
        name : 'Iphone 10 Pluss',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
        rating : 3
    },
    {
        id : 5,
        name : 'Iphone 11 Pluss',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
        rating : 5
    },
    {
        id : 6,
        name : 'Iphone 12 Pluss',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
        rating : 1
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default products;