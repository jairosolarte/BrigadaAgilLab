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
var insumos_service_1 = require("./insumos.service");
//declare var jQuery:any;
var InsumosComponent = (function () {
    function InsumosComponent(_insumoService) {
        this._insumoService = _insumoService;
        this.list = [];
        this.listP = [];
        this.itemInsumoD = {
            id: 0,
            nombre: "---",
            descripcion: "---",
            precio: "$0.0",
            unidad: "---",
            provedor: "---",
            estado: 0,
            imagen: '',
        };
        this.search = '';
        this.selectedOrder = "-nombre";
    }
    InsumosComponent.prototype.ngOnInit = function () {
        this.getInsumos();
        this.getInsumosP();
    };
    InsumosComponent.prototype.getInsumos = function () {
        this.list = this._insumoService.listInsumos(5, this.search, this.selectedOrder);
        this.itemInsumo = this.list.length > 0 ? this.list[0] : this.itemInsumoD;
    };
    InsumosComponent.prototype.clicked = function (item) {
        this.itemInsumo = item;
    };
    InsumosComponent.prototype.getInsumosP = function () {
        this.listP = this._insumoService.listInsumos(5, this.search, this.selectedOrder);
        this.itemInsumoP = this.listP.length > 0 ? this.listP[0] : this.itemInsumoD;
    };
    InsumosComponent.prototype.clickedP = function (item) {
        console.info(item);
        this.itemInsumoP = item;
    };
    return InsumosComponent;
}());
InsumosComponent = __decorate([
    core_1.Component({
        selector: 'lab-insumos',
        moduleId: module.id,
        templateUrl: 'insumos.component.html'
    }),
    __metadata("design:paramtypes", [insumos_service_1.InsumosService])
], InsumosComponent);
exports.InsumosComponent = InsumosComponent;
//# sourceMappingURL=insumos.component.js.map