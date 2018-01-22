
const products = [
    { name: 'Head & Shoulders Shampoo', price: 4.99, discount: .6 },
    { name: 'Twinkies', price: 7.99, discount: .45 },
    { name: 'Oreos', price: 6.49, discount: .8 },
    { name: 'Jasmine-scented bath pearls', price: 13.99, discount: .7 }
  ];

function gettotal(products) {
    let total = 0;
    products.forEach(product => {
        if (product.discount >= 0.5) {
            total += product.price;
        }
    });

    return total;
}

function gettotal(products, callback) {
    let total = 0;
    products.forEach(product => {
        if (product.discount >= 0.4) {
            return total += product.price;
        }
    });

    return total;
}

console.log(gettotal(products, gettotal));

function reduce(collection, callback, initialvalue) {
    let result = initialvalue;

    collection.forEach((product, index) => {
        result = callback(result, product, index, collection);
    });

    return result;
}

const couponlocations = [
    {
        room: 'living room',
        amount: 4,
    },
    {
        room: 'kitchen',
        amount: 5,
    },
    {
        room: 'bathroom',
        amount: 6,
    },
    {
        room: 'master bedroom',
        amount: 7,
    },
];

function couponcounter(totalamount, location) {
    return totalamount + location;
}

console.log(couponlocations.reduce(couponcounter, 0));
