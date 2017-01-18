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
require("assets/js/jquery.js");
require("assets/js/widgets.js");
require("assets/js/google-code-prettify/prettify.js");
require("assets/js/application.js");
require("assets/js/bootstrap-transition.js");
require("assets/js/bootstrap-modal.js");
require("assets/js/bootstrap-scrollspy.js");
require("assets/js/bootstrap-alert.js");
require("assets/js/bootstrap-dropdown.js");
require("assets/js/bootstrap-tab.js");
require("assets/js/bootstrap-tooltip.js");
require("assets/js/bootstrap-popover.js");
require("assets/js/bootstrap-button.js");
require("assets/js/bootstrap-collapse.js");
require("assets/js/bootstrap-carousel.js");
require("assets/js/bootstrap-typeahead.js");
require("assets/js/bootstrap-affix.js");
require("assets/js/jquery.lightbox-0.5.js");
require("assets/js/bootsshoptgl.js");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar.component");
var header_component_1 = require("./header.component");
var sidebar_component_1 = require("./sidebar.component");
var footer_component_1 = require("./footer.component");
var homeCarousel_component_1 = require("./homeCarousel.component");
var homeBody_component_1 = require("./homeBody.component");
var special_offer_component_1 = require("./special_offer.component");
var normal_component_1 = require("./normal.component");
var contact_component_1 = require("./contact.component");
var products_component_1 = require("./products.component");
var product_summary_component_1 = require("./product_summary.component");
var product_details_component_1 = require("./product_details.component");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: homeBody_component_1.HomeBodyComponent
                },
                {
                    path: 'special_offer',
                    component: special_offer_component_1.SpecialOfferComponent
                },
                {
                    path: 'normal',
                    component: normal_component_1.NormalComponent
                },
                {
                    path: 'contact',
                    component: contact_component_1.ContactComponent
                },
                {
                    path: 'products',
                    component: products_component_1.ProductsComponent
                },
                {
                    path: 'product_summary',
                    component: product_summary_component_1.ProductSummaryComponent
                },
                {
                    path: 'product_details',
                    component: product_details_component_1.ProductDetailsComponent
                },
                {
                    path: 'login',
                    component: login_component_1.LoginComponent
                },
                {
                    path: 'register',
                    component: register_component_1.RegisterComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            header_component_1.HeaderComponent,
            sidebar_component_1.SidebarComponent,
            homeCarousel_component_1.HomeCarouselComponent,
            footer_component_1.FooterComponent,
            homeBody_component_1.HomeBodyComponent,
            special_offer_component_1.SpecialOfferComponent,
            normal_component_1.NormalComponent,
            contact_component_1.ContactComponent,
            products_component_1.ProductsComponent,
            product_summary_component_1.ProductSummaryComponent,
            product_details_component_1.ProductDetailsComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map