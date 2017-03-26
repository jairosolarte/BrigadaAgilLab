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
var iBoxToolsComponent = (function () {
    function iBoxToolsComponent() {
    }
    iBoxToolsComponent.prototype.ngOnInit = function () {
    };
    iBoxToolsComponent.prototype.clickCollapse = function (event) {
        var elem = event.target;
        var ibox = jQuery(elem).closest('div.ibox');
        var button = jQuery(elem).find('i');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    };
    return iBoxToolsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], iBoxToolsComponent.prototype, "collapse", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], iBoxToolsComponent.prototype, "fullscreen", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], iBoxToolsComponent.prototype, "close", void 0);
iBoxToolsComponent = __decorate([
    core_1.Component({
        selector: 'ui-ibox-tools',
        moduleId: module.id,
        templateUrl: './ibox-tools.component.html'
    })
], iBoxToolsComponent);
exports.iBoxToolsComponent = iBoxToolsComponent;
//# sourceMappingURL=ibox-tools.component.js.map