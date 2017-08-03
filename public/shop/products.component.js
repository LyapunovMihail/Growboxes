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
var router_1 = require("@angular/router");
var ng2_toastr_1 = require("./node_modules/ng2-toastr/ng2-toastr");
var ProductsComponent = (function () {
    function ProductsComponent(productService, toastr, vcr, route) {
        this.productService = productService;
        this.toastr = toastr;
        this.route = route;
        this.categories = { growboxes: "Гроубоксы", lights: "Свет", automatics: "Автоматизация" };
        this.toastr.setRootViewContainerRef(vcr);
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.productService.getCategoryProducts(_this.categories[_this.category = params['id']]);
        })
            .subscribe(function (products) { return _this.products = products; }, function (err) { return console.log("httpError: ", err); });
    };
    ProductsComponent.prototype.purchaseProduct = function (product) {
        var _this = this;
        console.log("product: ", product);
        this.productService
            .purchaseProduct(product)
            .then(function (products) {
            console.log("productsInBucket: ", products);
            _this.productsInBucket = products;
            _this.productService.onPurchased(_this.productsInBucket.numberOfPurchasedProducts);
            _this.toastr.success('Товар добавлен в корзину');
        }, function (err) {
            _this.toastr.error('Товар не был добавлен в корзину', 'Ошибка');
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'shop-products',
        templateUrl: 'products.component.html',
        styleUrls: [
            'assets/bootshop/css/bootstrap.css',
            'assets/bootshop/css/bootstrap-responsive.css',
            'assets/bootshop/angular_components/style.css',
            'assets/bootshop/js/google-code-prettify/prettify.css',
            'assets/css/progressusStyles.css'
        ]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        ng2_toastr_1.ToastsManager, core_1.ViewContainerRef,
        router_1.ActivatedRoute])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map