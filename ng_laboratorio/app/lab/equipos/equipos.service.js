"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EquiposService = (function () {
    function EquiposService() {
    }
    EquiposService.prototype.listEquipos = function (number, search, order) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            var nombre = 'hola' + i;
            if (nombre.indexOf(search) != -1 || search.trim().length == 0) {
                items.push({
                    id: i,
                    nombre: nombre,
                });
            }
        }
        items = items.sort(this.dynamicSort(order));
        return items;
        /*return [
            {
                id: 2,
                nombre: "Insumo"
            }
        ]*/
    };
    EquiposService.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    return EquiposService;
}());
EquiposService = __decorate([
    core_1.Injectable()
], EquiposService);
exports.EquiposService = EquiposService;
//# sourceMappingURL=equipos.service.js.map