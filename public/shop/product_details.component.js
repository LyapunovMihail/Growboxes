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
Object.defineProperty(exports, "__esModule", { value: true });
require("assets/fancybox/source/jquery.fancybox.pack.js?v=2.1.6");
require("assets/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5");
require("assets/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6");
require("assets/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var ng2_toastr_1 = require("./node_modules/ng2-toastr/ng2-toastr");
require("rxjs/add/operator/switchMap");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(productService, toastr, vcr, route) {
        this.productService = productService;
        this.toastr = toastr;
        this.route = route;
        this.categories = { "Гроубоксы": "growboxes", "Свет": "lights", "Автоматизация": "automatics" };
        this.top = '0';
        this.toastr.setRootViewContainerRef(vcr);
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.productService.getProductDetails(params['id']); })
            .subscribe(function (productDetail) {
            _this.productDetail = productDetail;
            console.log("product_details: ", productDetail);
            _this.getCategoryProducts();
        }, function (err) { return console.log("httpError: ", err); });
        $(".fancybox-thumb").fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            helpers: {
                title: {
                    type: 'outside'
                },
                thumbs: {
                    width: 50,
                    height: 50
                }
            }
        });
        $(window).resize(this.debounce(function () {
            if (document.body.clientWidth < 962) {
                _this.top = '13px';
            }
            else {
                _this.top = '0';
            }
        }, 50));
    };
    ProductDetailsComponent.prototype.getCategoryProducts = function () {
        var _this = this;
        this.productService.getCategoryProducts(this.productDetail.category)
            .then(function (products) { return _this.products = products; }, function (err) { return console.log("httpError: ", err); });
    };
    ProductDetailsComponent.prototype.purchaseProduct = function (product) {
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
    ProductDetailsComponent.prototype.debounce = function (f, ms) {
        var state = null;
        var COOLDOWN = 1;
        return function () {
            if (state)
                return;
            f.apply(this, arguments);
            state = COOLDOWN;
            setTimeout(function () { state = null; }, ms);
        };
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        selector: 'shop-product-details',
        templateUrl: 'product_details.component.html',
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
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product_details.component.js.map