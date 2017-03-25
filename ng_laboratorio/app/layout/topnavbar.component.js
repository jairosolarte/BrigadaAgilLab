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
var TopNavBarComponent = (function () {
    function TopNavBarComponent(_el) {
        this._el = _el;
    }
    TopNavBarComponent.prototype.ngOnInit = function () {
    };
    TopNavBarComponent.prototype.minimizeNavbar = function (event) {
        event.preventDefault();
        jQuery("body").toggleClass("mini-navbar");
        this.smoothlyMenu();
    };
    TopNavBarComponent.prototype.smoothlyMenu = function () {
        if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            jQuery('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(function () {
                jQuery('#side-menu').fadeIn(400);
            }, 200);
        }
        else if (jQuery('body').hasClass('fixed-sidebar')) {
            jQuery('#side-menu').hide();
            setTimeout(function () {
                jQuery('#side-menu').fadeIn(400);
            }, 100);
        }
        else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            jQuery('#side-menu').removeAttr('style');
        }
    };
    return TopNavBarComponent;
}());
TopNavBarComponent = __decorate([
    core_1.Component({
        selector: 'lab-top-nav-bar',
        moduleId: module.id,
        templateUrl: 'topnavbar.component.html'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], TopNavBarComponent);
exports.TopNavBarComponent = TopNavBarComponent;
//# sourceMappingURL=topnavbar.component.js.map