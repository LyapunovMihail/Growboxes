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
require("assets/js/fancybox/source/jquery.fancybox.pack.js?v=2.1.6");
require("assets/js/fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5");
require("assets/js/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.6");
require("assets/js/fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7");
var core_1 = require("@angular/core");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent() {
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
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
    };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        selector: 'shop-product-details',
        templateUrl: 'product_details.component.html',
        styleUrls: ['product_details.component.css']
    }),
    __metadata("design:paramtypes", [])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product_details.component.js.map