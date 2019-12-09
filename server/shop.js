var pricing = require("./assets/pricing.json");

// appropriate dictionary to hold shopping item metadata
var pricingDict = pricing.reduce((map, obj) => {
    let metadata = {
        description: obj.description,
        unit_price: obj.unit_price,
        volume_discounts: obj.volume_discounts
    };
    map[obj.id] = metadata;
    return map;
}, {});

var shoppingCart = {}; // dictionary structure to hold items in shopping cart

/* Get ALL pricing configurations. */
var getData = () => {
    return pricingDict;
}

/* Calculate the final price based on a discount (if it exists). */
var finalPrice = (id, count, total) => {
    let discount = pricingDict[id].volume_discounts[0];
    if (count == 0 || !discount || count % discount.number != 0) {
        return total; // no existence of items, no discount or not enough counts of item
    }

    // there exists a discount. retrieve the final price minus the discount value
    return total - (total - discount.price);
}

/* Add item to shopping cart and calculate price totals. */
var addItem = (id) => {
    // check if ID already exists in shoppingCart
    let data;
    let obj = pricingDict[id];
    if (id in shoppingCart) {
        data = shoppingCart[id];
        let currTotal = data.total;
        data.count += 1;
        data.total = finalPrice(id, data.count, currTotal + obj.unit_price);
        shoppingCart[id] = data;
    } else { // ID not in shoppingCart
        data = {
            description: obj.description,
            count: 1,
            total: finalPrice(id, 1, obj.unit_price),
        }; // initialize
        // check if discount is applied
        shoppingCart[id] = data;
    }
};

/* Show total price from shopping cart. */
var showTotal = () => {
    var totalPrice = 0;
    Object.keys(shoppingCart).map((item) => {
        totalPrice += shoppingCart[item].total;
    })
    return totalPrice;
}

module.exports = {
    shoppingCart: () => {
        return shoppingCart;
    },
    initCart: () => {
        shoppingCart = {}; // reset shoppingCart to empty dict
    },
    getData: getData,
    addItem: addItem,
    showTotal: showTotal,
}