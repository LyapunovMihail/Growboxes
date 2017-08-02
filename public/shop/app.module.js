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
require("http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js");
require("http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var ng2_toastr_1 = require("./node_modules/ng2-toastr/ng2-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var navbar_component_1 = require("./navbar.component");
var header_component_1 = require("./header.component");
//import { SidebarComponent } from './sidebar.component';
var footer_component_1 = require("./footer.component");
//import { HomeCarouselComponent } from './homeCarousel.component';
var homeBody_component_1 = require("./homeBody.component");
var homeBody_component1_1 = require("./homeBody.component1");
var homeBody_component2_1 = require("./homeBody.component2");
//import { SpecialOfferComponent } from './special_offer.component';
//import { NormalComponent } from './normal.component';
//import { AboutUsComponent } from './aboutUs.component';
var contact_component_1 = require("./contact.component");
var products_component_1 = require("./products.component");
var product_details_component_1 = require("./product_details.component");
var product_summary_component_1 = require("./product_summary.component");
var checkout_component_1 = require("./checkout.component");
//import { LoginComponent } from './login.component';
//import { RegisterComponent } from './register.component';
var save_product_component_1 = require("./save_product.component");
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_toastr_1.ToastModule.forRoot(),
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
                /*{
                     path: 'about_us',
                     component: AboutUsComponent
                },*/
                {
                    path: 'contact',
                    component: contact_component_1.ContactComponent
                },
                {
                    path: 'products/:id',
                    component: products_component_1.ProductsComponent
                },
                {
                    path: 'product_summary',
                    component: product_summary_component_1.ProductSummaryComponent
                },
                {
                    path: 'checkout',
                    component: checkout_component_1.CheckoutComponent
                },
                {
                    path: 'product_details/:id',
                    component: product_details_component_1.ProductDetailsComponent
                },
                /*{
                     path: 'login',
                     component: LoginComponent
                },
                {
                     path: 'register',
                     component: RegisterComponent
                },*/
                {
                    path: 'save_product',
                    component: save_product_component_1.SaveProductComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            homeBody_component_1.HomeBodyComponent,
            homeBody_component1_1.HomeBodyComponent1,
            homeBody_component2_1.HomeBodyComponent2,
            //AboutUsComponent,
            contact_component_1.ContactComponent,
            products_component_1.ProductsComponent,
            product_summary_component_1.ProductSummaryComponent,
            checkout_component_1.CheckoutComponent,
            product_details_component_1.ProductDetailsComponent,
            //LoginComponent,
            //RegisterComponent,
            save_product_component_1.SaveProductComponent
        ],
        providers: [product_service_1.ProductService],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map