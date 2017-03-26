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
/**
 * Created by user on 22/03/2017.
 */
var core_1 = require("@angular/core");
var PanelControlComponentJefe = (function () {
    function PanelControlComponentJefe() {
        this.list = [{ id: 1, nombre: 'asdasd' }, { id: 2, nombre: 'hola' }];
        this.list = this.createRange(10);
        console.info(this.list);
    }
    PanelControlComponentJefe.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push({
                id: i,
                nombre: 'hola' + i,
            });
        }
        return items;
    };
    PanelControlComponentJefe.prototype.onSelect = function (id) {
        alert(id);
        //$('#dd').html(id);
    };
    return PanelControlComponentJefe;
}());
PanelControlComponentJefe = __decorate([
    core_1.Component({
        selector: 'dd-cienti',
        moduleId: module.id,
        templateUrl: 'panel-control-jefe.component.html'
    }),
    __metadata("design:paramtypes", [])
], PanelControlComponentJefe);
exports.PanelControlComponentJefe = PanelControlComponentJefe;
//# sourceMappingURL=panel-control-jefe.component.js.map