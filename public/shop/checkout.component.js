"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var CheckoutComponent = (function () {
    function CheckoutComponent(productService) {
        this.productService = productService;
        this.sumPrice = 0;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.getPurchasedProducts();
    };
    CheckoutComponent.prototype.getPurchasedProducts = function () {
        var _this = this;
        this.productService
            .getPurchasedProducts()
            .then(function (products) {
            _this.productsInBucket = products.products;
            _this.sumPrice = products.sumPrice;
            console.log("productsInBucket: ", products);
        });
    };
    CheckoutComponent.prototype.deleteProduct = function (item) {
        var _this = this;
        this.productService
            .deletePurchasedProduct(item)
            .then(function (products) {
            console.log("productsInBucket: ", products);
            _this.productsInBucket = products.products;
            _this.sumPrice = products.sumPrice;
            _this.productService.onPurchased(products.numberOfPurchasedProducts);
        });
    };
    CheckoutComponent.prototype.updateProduct = function (item) {
        var _this = this;
        setTimeout(function () {
            _this.productService
                .updatePurchasedProduct(item)
                .then(function (products) {
                console.log("productsInBucket: ", products);
                _this.productsInBucket = products.products;
                _this.sumPrice = products.sumPrice;
                _this.productService.onPurchased(products.numberOfPurchasedProducts);
            });
        }, 0);
        //this.router.navigate(['/checkout']);
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    core_1.Component({
        selector: 'shop-checkout',
        templateUrl: 'checkout.component.html',
        styleUrls: [
            'assets/bootshop/css/bootstrap.css',
            'assets/bootshop/css/bootstrap-responsive.css',
            'assets/bootshop/angular_components/style.css',
            'assets/bootshop/js/google-code-prettify/prettify.css',
            'assets/css/progressusStyles.css'
        ]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], CheckoutComponent);
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map