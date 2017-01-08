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
require("assets/js/widgets.js");
require("assets/js/jquery.js");
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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        $(function () {
            $('#gallery a').lightBox();
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        templateUrl: '/index.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map