export class SaleItem {
    constructor(product, quantityPurchased) {
        this.product = product;
        this.quantityPurchased = quantityPurchased;
        this.salePrice = product.listPrice;
    }
}

export class Sale {
    constructor(customer, items) {
        this.customer = customer;
        this.items = items;
    }
}