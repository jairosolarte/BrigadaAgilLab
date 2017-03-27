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
        this.checkEquipos = [];
        this.selectedOrder = "-nombre";
        this.dateEquipos = [];
    }
    EquiposComponent.prototype.ngOnInit = function () {
        this.getEquipos();
        this.createCalendar();
    };
    EquiposComponent.prototype.getEquipos = function () {
        console.info(this.search, this.selectedOrder);
        this.list = this._equipoService.listEquipos(5, this.search, this.selectedOrder);
    };
    EquiposComponent.prototype.onSelect = function (id) {
        alert(id);
        //$('#dd').html(id);
    };
    EquiposComponent.prototype.getDateCalendar = function (id) {
        var index = this.checkEquipos.indexOf(id);
        if (index != -1) {
            this.checkEquipos.splice(index, 1);
        }
        else {
            this.checkEquipos.push(id);
        }
        this.dateEquipos = this._equipoService.getDateEquipos(this.checkEquipos);
        //console.info(this.dateEquipos);
        this.createCalendar();
        //jQuery('#calendar').fullCalendar('renderEvent',this.dateEquipos );
        //jQuery('#calendar').fullCalendar( 'rerenderEvents' );
    };
    EquiposComponent.prototype.createCalendar = function () {
        jQuery('#calendar').fullCalendar('destroy');
        jQuery('#calendar').fullCalendar({
            header: {
                //left: 'prev,next today',
                center: 'left',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: false,
            events: this.dateEquipos
        });
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