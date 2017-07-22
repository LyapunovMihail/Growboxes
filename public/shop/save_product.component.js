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
var ng2_toastr_1 = require("./node_modules/ng2-toastr/ng2-toastr");
var SaveProductComponent = (function () {
    function SaveProductComponent(productService, toastr, vcr) {
        this.productService = productService;
        this.toastr = toastr;
        this.data = { name: "", category: "", description: "", price: "", imgUrl: "", imgUrl1: "",
            imgUrl2: "", imgUrl3: "", imgUrl4: "", imgUrl5: "", imgUrl6: "" };
        this.passwordToAccess = "";
        this.access = { access: false, passwordChecked: false };
        this.view = { currentView: "editProducts" };
        this.categories = ["Гроубоксы", "Свет", "Автоматизация"];
        this.toastr.setRootViewContainerRef(vcr);
    }
    SaveProductComponent.prototype.ngOnInit = function () {
    };
    SaveProductComponent.prototype.saveProduct = function (data) {
        var _this = this;
        console.log("data: ", data);
        this.productService
            .saveProduct(data)
            .then(function (product) {
            console.log("product: ", product);
            _this.toastr.success('Товар добавлен в базу данных');
        }, function (err) {
            console.log("httpError: ", err);
            if (data.name == '' || data.category == '' || data.description == '' || data.price == '')
                _this.toastr.error('Не введены имя, категория, описание или цена', 'Ошибка добавления');
            else
                _this.toastr.error('Этот товар уже в базе', 'Ошибка добавления');
        });
    };
    SaveProductComponent.prototype.updateProduct = function (data) {
        var _this = this;
        console.log("data: ", data);
        this.productService
            .updateProduct(data)
            .then(function (product) {
            console.log("product: ", product);
            _this.toastr.success('Товар обновлен');
        }, function (err) {
            console.log("httpError: ", err);
            _this.toastr.error('Товар с таким именем не найден', 'Ошибка обновления');
        });
    };
    SaveProductComponent.prototype.deleteProduct = function (item) {
        var _this = this;
        console.log("item: ", item);
        if (window.confirm("Вы действительно хотите удалить товар?") == true) {
            this.productService
                .deleteProduct(item)
                .then(function (response) {
                console.log("response: ", response);
                if (response.product.n == 0) {
                    _this.toastr.error('Товар не найден', 'Ошибка удаления');
                }
                else {
                    _this.toastr.success('Товар удалён' + response.message);
                }
                _this.getProducts();
                _this.productService.onPurchased(response.numberOfPurchasedProducts);
            }, function (err) { console.log("httpError: ", err); });
        }
    };
    SaveProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService
            .getProducts()
            .then(function (products) {
            console.log("products: ", products);
            _this.products = products;
        }, function (err) { return console.log("httpError: ", err); });
    };
    SaveProductComponent.prototype.changeView = function () {
        if (this.view.currentView == 'editProducts') {
            this.view.currentView = 'showProducts';
            this.getProducts();
        }
        else {
            this.view.currentView = 'editProducts';
        }
    };
    SaveProductComponent.prototype.editProduct = function (item) {
        this.data = item;
        this.changeView();
    };
    SaveProductComponent.prototype.getAccessToProductsManagement = function () {
        var _this = this;
        console.log("this.passwordToAccess: ", this.passwordToAccess);
        this.productService
            .getAccessToProductsManagement(this.passwordToAccess)
            .then(function (result) {
            console.log("result: ", result);
            _this.access.access = result.access;
            _this.access.passwordChecked = true;
        }, function (err) { return console.log("httpError: ", err); });
    };
    SaveProductComponent.prototype.appearanceOfErrorPassword = function () {
        if (this.passwordToAccess == '')
            this.access.passwordChecked = false;
    };
    return SaveProductComponent;
}());
SaveProductComponent = __decorate([
    core_1.Component({
        selector: 'shop-save-product',
        templateUrl: 'save_product.component.html',
        styleUrls: [
            'assets/bootshop/css/bootstrap.css',
            'assets/bootshop/css/bootstrap-responsive.css',
            'assets/bootshop/angular_components/style.css',
            'assets/bootshop/js/google-code-prettify/prettify.css',
            'assets/css/progressusStyles.css',
            'assets/css/font-awesome.min.css'
        ]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        ng2_toastr_1.ToastsManager, core_1.ViewContainerRef])
], SaveProductComponent);
exports.SaveProductComponent = SaveProductComponent;
//# sourceMappingURL=save_product.component.js.map