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
var equipos_service_1 = require("./equipos.service");
var EquiposComponent = (function () {
    function EquiposComponent(_equipoService) {
        this._equipoService = _equipoService;
        this.list = [];
        this.search = '';
        this.selectedOrder = "-nombre";
    }
    EquiposComponent.prototype.ngOnInit = function () {
        this.getEquipos();
    };
    EquiposComponent.prototype.getEquipos = function () {
        console.info(this.search, this.selectedOrder);
        this.list = this._equipoService.listEquipos(5, this.search, this.selectedOrder);
    };
    EquiposComponent.prototype.onSelect = function (id) {
        alert(id);
        //$('#dd').html(id);
    };
    return EquiposComponent;
}());
EquiposComponent = __decorate([
    core_1.Component({
        selector: 'lab-equipos',
        moduleId: module.id,
        templateUrl: 'equipos.component.html'
    }),
    __metadata("design:paramtypes", [equipos_service_1.EquiposService])
], EquiposComponent);
exports.EquiposComponent = EquiposComponent;
//# sourceMappingURL=equipos.component.js.map