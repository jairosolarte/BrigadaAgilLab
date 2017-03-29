"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InsumosService = (function () {
    function InsumosService() {
    }
    InsumosService.prototype.listInsumos = function (number, search, order) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            var nombre = 'Insumo ' + i;
            if (nombre.indexOf(search) != -1 || search.trim().length == 0) {
                items.push({
                    id: i,
                    nombre: nombre,
                    descripcion: "Descripción muy corta del insumo " + i,
                    precio: "$2.5",
                    unidad: "gramos",
                    provedor: "Distri Quimicos N" + i,
                    estado: 1,
                    imagen: this.getImagen(),
                });
            }
        }
        items = items.sort(this.dynamicSort(order));
        return items;
    };
    InsumosService.prototype.dynamicSort = function (property) {
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
    InsumosService.prototype.getImagen = function () {
        var temp = Math.round(Math.random() * (5 - 1) + 1);
        var img = "http://www.granvelada.com/4460-thickbox_default/azufre-bio-en-polvo.jpg";
        switch (temp) {
            case 2:
                img = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDBRE_ee5Dj6Lc9bYZhoWC7IGgkkIBzMNUSf7eA5_mDebucQbh";
                break;
            case 1:
                img = "http://www.granvelada.com/4460-thickbox_default/azufre-bio-en-polvo.jpg";
                break;
            case 3:
                img = "http://5jotas.pe/public_jotas/uploads/producto_pequeno_lkH8_producto-1.png";
                break;
            case 4:
                img = "http://3.bp.blogspot.com/_YWtRFN84rVw/SO6MwEpCN_I/AAAAAAAAALc/n7id99ZmQjg/s320/cobalto.jpg";
                break;
            case 5:
                img = "http://www.doncloro.cl/site/doncloro/wp-content/uploads/2013/08/acidomuriatico.png";
                break;
        }
        return img;
    };
    return InsumosService;
}()); /**
 * Created by user on 29/03/2017.
 */
InsumosService = __decorate([
    core_1.Injectable()
], InsumosService);
exports.InsumosService = InsumosService;
//# sourceMappingURL=insumos.service.js.map