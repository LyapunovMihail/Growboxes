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
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isSidebarOpen = {
            subMenu1: false,
            subMenu2: false,
            subMenu3: false
        };
    }
    SidebarComponent.prototype.menuTransition = function (id, name) {
        console.log("access");
        console.log("id: ", id);
        if (!this.isSidebarOpen[name]) {
            id.style.display = "block";
            id.style.transition = "display 1s ease-out 0s";
        }
        else {
            id.style.display = "none";
        }
        this.isSidebarOpen[name] = !this.isSidebarOpen[name];
    };
    SidebarComponent.prototype.ngOnInit = function () {
        //console.log("ngOnInit", $("#sidebar .subMenu"));
        /*
                $("#sidebar .subMenu").on("click", (e) => {
                    console.log("ngOnInit.click", e);
                    let el = $(e.target).parent();
                    $(el).toggleClass("open");
                    if ($(el).hasClass("open")) {
                        $(el).find("ul").show();
                    } else {
                        $(el).find("ul").hide();
                    }
                });
        */
        /*
                 // side bar
            $('.bs-docs-sidenav').affix({
              offset: {
                top: function () { return $window.width() <= 980 ? 290 : 210 }
              , bottom: 270
              }
            });
        */
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'shop-sidebar',
        templateUrl: 'sidebar.component.html',
        styleUrls: ['sidebar.component.css'],
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map