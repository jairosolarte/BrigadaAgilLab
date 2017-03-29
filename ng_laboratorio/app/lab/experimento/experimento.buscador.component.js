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
var experimento_service_1 = require("./experimento.service");
var ExperimentoBuscadorComponent = (function () {
    function ExperimentoBuscadorComponent(_experimentoService) {
        this._experimentoService = _experimentoService;
        this.experimentos = [];
    }
    ExperimentoBuscadorComponent.prototype.getExperimentos = function () {
        var _this = this;
        this._experimentoService.getExperimentos().then(function (experimentos) { return _this.experimentos = experimentos; });
    };
    ExperimentoBuscadorComponent.prototype.ngOnInit = function () {
        this.getExperimentos();
    };
    return ExperimentoBuscadorComponent;
}());
ExperimentoBuscadorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'experimento-buscador',
        templateUrl: 'experimento.buscador.component.html',
        providers: [experimento_service_1.ExperimentoService]
    }),
    __metadata("design:paramtypes", [experimento_service_1.ExperimentoService])
], ExperimentoBuscadorComponent);
exports.ExperimentoBuscadorComponent = ExperimentoBuscadorComponent;
//# sourceMappingURL=experimento.buscador.component.js.map