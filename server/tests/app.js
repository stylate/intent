var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');

const shop = require('../shop.js');
const should = chai.should();

describe('cart functionality', () => {
    it("should initialize an empty cart", () => {
        var cart = shop.shoppingCart();
        shop.initCart();
        cart.should.deep.equal({});
    })

    it("should reset empty cart after adding an item", () => {
        shop.addItem('A');
        shop.shoppingCart().should.not.deep.equal({});
        shop.initCart();
        shop.shoppingCart().should.deep.equal({});
    })

    it("should return the total in an empty cart", () => {
        shop.initCart();
        let total = shop.showTotal();
        total.should.equal(0);
    })
})

describe('advanced operations', () => {
    it('should return discounted price for buying 4 apples', () => {
        shop.initCart();
        for (var i = 0; i < 4; i++) {
            shop.addItem('A');
        }
        let total = shop.showTotal();
        total.should.equal(7);
    })

    it('should return discounted price for buying 7 cranberries', () => {
        shop.initCart();
        for (var i = 0; i < 7; i++) {
            shop.addItem('C');
        }
        let total = shop.showTotal();
        total.should.equal(7.25);
    })

    it('should return total price for buying all items', () => {
        shop.initCart();
        shop.addItem('A');
        shop.addItem('B');
        shop.addItem('C');
        shop.addItem('D');
        let total = shop.showTotal();
        total.should.equal(15.40);
    })

    it('should return total price for buying ABCDABAA', () => {
        shop.initCart();
        shop.addItem('A');
        shop.addItem('B');
        shop.addItem('C');
        shop.addItem('D');
        shop.addItem('A');
        shop.addItem('B');
        shop.addItem('A');
        shop.addItem('A');
        let total = shop.showTotal();
        total.should.equal(32.40);
    })
})