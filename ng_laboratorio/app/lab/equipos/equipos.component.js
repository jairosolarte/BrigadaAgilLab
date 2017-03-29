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
        this.createCalendar();
        this.getEquipos();
    };
    EquiposComponent.prototype.getEquipos = function () {
        this.list = this._equipoService.listEquipos(10, this.search, this.selectedOrder);
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var d = _a[_i];
            this.getDateCalendar(d.id);
        }
    };
    EquiposComponent.prototype.getDateCalendar = function (id) {
        var index = this.checkEquipos.findIndex(function (eq) { return eq['id'] === id; });
        var equipos = this.list.filter(function (eq) { return eq['id'] == id; });
        var equipo = equipos[0];
        if (index != -1 && equipo.selected) {
            var p = this.checkEquipos.filter(function (eq) { return eq['id'] == id; });
            this.checkEquipos.splice(index, p.length);
        }
        else {
            if (!equipo['color']) {
                equipo['color'] = this.getRandomColor();
            }
            for (var _i = 0, _a = this._equipoService.getDateEquipos(equipo); _i < _a.length; _i++) {
                var d = _a[_i];
                this.checkEquipos.push(d);
            }
        }
        //this.dateEquipos = this._equipoService.getDateEquipos(this.checkEquipos)
        var myCalendar = jQuery('#calendar');
        myCalendar.fullCalendar('removeEvents');
        myCalendar.fullCalendar('addEventSource', this.checkEquipos);
    };
    EquiposComponent.prototype.createCalendar = function () {
        jQuery('#calendar').fullCalendar('destroy');
        jQuery('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            //columnFormat:'ddd M',
            allDaySlot: false,
            selectable: true,
            lang: 'es',
            minTime: "08:00:00",
            maxTime: "18:00:00",
            hiddenDays: [6, 0],
            defaultView: 'agendaWeek',
            firstDay: 1,
            editable: false,
            events: this.dateEquipos
        });
    };
    EquiposComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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