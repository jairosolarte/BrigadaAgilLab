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
var notificaciones_service_1 = require("./notificaciones.service");
var NotificacionesComponent = (function () {
    function NotificacionesComponent(_notificacionService) {
        this._notificacionService = _notificacionService;
    }
    NotificacionesComponent.prototype.ngOnInit = function () {
        this.notificaciones = this._notificacionService.listNotificaciones();
    };
    return NotificacionesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], NotificacionesComponent.prototype, "tiposNotificaciones", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NotificacionesComponent.prototype, "usuario", void 0);
NotificacionesComponent = __decorate([
    core_1.Component({
        selector: 'lab-notificaciones',
        moduleId: module.id,
        templateUrl: 'notificaciones.component.html'
    }),
    __metadata("design:paramtypes", [notificaciones_service_1.NotificacionesService])
], NotificacionesComponent);
exports.NotificacionesComponent = NotificacionesComponent;
//# sourceMappingURL=notificaciones.component.js.map