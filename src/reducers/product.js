let initialState = [
    {
        id : 1,
        name : 'Iphone 7 Pluss',
        image : '',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
    },
    {
        id : 2,
        name : 'Iphone 8 Pluss',
        image : '',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
    },
    {
        id : 3,
        name : 'Iphone 9 Pluss',
        image : '',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
    },
    {
        id : 4,
        name : 'Iphone 10 Pluss',
        image : '',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
    },
    {
        id : 5,
        name : 'Iphone 11 Pluss',
        image : '',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
    },
    {
        id : 6,
        name : 'Iphone 12 Pluss',
        image : '',
        description : 'San pham apple',
        price : '400',
        inventory : 15,
    }
];

const product = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default product;