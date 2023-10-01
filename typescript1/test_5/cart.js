"use strict";
var locationDelivery;
(function (locationDelivery) {
    locationDelivery["home"] = "home";
    locationDelivery["ofice"] = "ofice";
})(locationDelivery || (locationDelivery = {}));
class Cart {
    constructor(location, adress) {
        this.products = [];
        this.delivery = null;
        if (location == locationDelivery.home && typeof adress === 'string') {
            this.delivery = {
                location: locationDelivery.home,
                data: new Date(),
                adress,
            };
        }
        else if (location == locationDelivery.ofice &&
            typeof adress === 'number') {
            this.delivery = {
                location: locationDelivery.ofice,
                data: new Date(),
                id: adress,
            };
        }
    }
    addProduct(productName, price) {
        this.products.push({ productName, price });
    }
    deleteProduct(prodName) {
        this.products = this.products.filter((prod) => prod.productName !== prodName);
    }
    costProducts() {
        console.log(this.products.reduce((acc, el) => acc + el.price, 0));
    }
    checkout() {
        if (this.delivery == null && this.products.length == 0) {
            console.log('Add products in your cart and add adress');
            return;
        }
        else if (this.delivery == null && this.products.length > 0) {
            console.log('Add adress');
            return;
        }
        else if (this.delivery && this.products.length == 0) {
            console.log('Add products in your cart');
            return;
        }
        else {
            console.log('Delivery completed');
            return;
        }
    }
}
const cart = new Cart('ofice', 1);
cart.addProduct('fork', 100);
cart.addProduct('book', 300);
cart.addProduct('fish', 200);
cart.deleteProduct('fork');
cart.costProducts();
cart.checkout();
console.log(cart.delivery);
console.log(cart);
