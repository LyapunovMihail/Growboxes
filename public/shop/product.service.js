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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.onPurchased$ = new core_1.EventEmitter();
    }
    ProductService.prototype.onPurchased = function (numberOfPurchasedProducts) {
        this.onPurchased$.emit(numberOfPurchasedProducts);
    };
    ProductService.prototype.saveProduct = function (data) {
        return this.http.post("/api/products", data)
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.updateProduct = function (data) {
        return this.http.post("/api/productsUpdate", data)
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (data) {
        console.log("data: ", data);
        return this.http.post("/api/productsDelete", data)
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get("/api/products")
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.getCategoryProducts = function (category) {
        return this.http.post("/api/categoryProducts", { category: category })
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.getProductDetails = function (productId) {
        console.log("productId: ", productId);
        return this.http.post("/api/product_details", { productId: productId })
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.purchaseProduct = function (product) {
        console.log("product: ", product);
        return this.http.post("/api/purchase", product)
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.getPurchasedProducts = function () {
        return this.http.get("/api/purchase")
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.deletePurchasedProduct = function (item) {
        return this.http.post("/api/purchaseDelete", item)
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.updatePurchasedProduct = function (item) {
        return this.http.post("/api/purchaseUpdate", item)
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.getAccessToProductsManagement = function (password) {
        return this.http.post("/api/products/getAccess", { password: password })
            .toPromise()
            .then(function (response) { return Promise.resolve(response.json()); })
            .catch(this.handleError);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map