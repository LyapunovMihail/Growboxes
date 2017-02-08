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
require("assets/js/headroom.min.js");
require("assets/js/jQuery.headroom.min.js");
require("assets/js/template.js");
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar.component');
var header_component_1 = require('./header.component');
//import { SidebarComponent } from './sidebar.component';
var footer_component_1 = require('./footer.component');
//import { HomeCarouselComponent } from './homeCarousel.component';
var homeBody_component_1 = require('./homeBody.component');
var homeBody_component1_1 = require('./homeBody.component1');
var homeBody_component2_1 = require('./homeBody.component2');
//import { SpecialOfferComponent } from './special_offer.component';
//import { NormalComponent } from './normal.component';
var aboutUs_component_1 = require('./aboutUs.component');
var contact_component_1 = require('./contact.component');
var products_component_1 = require('./products.component');
var product_summary_component_1 = require('./product_summary.component');
var product_details_component_1 = require('./product_details.component');
var login_component_1 = require('./login.component');
var register_component_1 = require('./register.component');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule() {
    }
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
                        path: 'about_us',
                        component: aboutUs_component_1.AboutUsComponent
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
                footer_component_1.FooterComponent,
                homeBody_component_1.HomeBodyComponent,
                homeBody_component1_1.HomeBodyComponent1,
                homeBody_component2_1.HomeBodyComponent2,
                aboutUs_component_1.AboutUsComponent,
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
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map