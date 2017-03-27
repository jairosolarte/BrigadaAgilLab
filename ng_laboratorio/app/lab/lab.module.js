"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var proyecto_service_1 = require("./proyecto/proyecto.service");
var protocolo_service_1 = require("./protocolo/protocolo.service");
var muestra_service_1 = require("./muestra/muestra.service");
var experimento_service_1 = require("./experimento/experimento.service");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var proyecto_component_1 = require("./proyecto/proyecto.component");
var proyecto_list_component_1 = require("./proyecto/proyecto.list.component");
var router_1 = require("@angular/router");
var protocolo_component_1 = require("./protocolo/protocolo.component");
var protocolo_buscador_component_1 = require("./protocolo/protocolo.buscador.component");
var notificaciones_component_1 = require("./notificaciones/notificaciones.component");
var notificaciones_service_1 = require("./notificaciones/notificaciones.service");
var keys_pipe_1 = require("./keys.pipe");
var LabModule = (function () {
    function LabModule() {
    }
    return LabModule;
}());
LabModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'proyectos', component: proyecto_component_1.ProyectoComponent },
                { path: 'protocolos', component: protocolo_component_1.ProtocoloComponent }
            ]),
        ],
        declarations: [
            proyecto_component_1.ProyectoComponent,
            protocolo_component_1.ProtocoloComponent,
            protocolo_buscador_component_1.ProtocoloBuscadorComponent,
            proyecto_list_component_1.ProyectoListComponent,
            notificaciones_component_1.NotificacionesComponent,
            keys_pipe_1.KeysPipe,
        ],
        exports: [
            notificaciones_component_1.NotificacionesComponent,
            protocolo_buscador_component_1.ProtocoloBuscadorComponent,
            proyecto_list_component_1.ProyectoListComponent,
        ],
        providers: [
            proyecto_service_1.ProyectoService,
            protocolo_service_1.ProtocoloService,
            muestra_service_1.MuestraService,
            experimento_service_1.ExperimentoService,
            notificaciones_service_1.NotificacionesService,
        ]
    })
], LabModule);
exports.LabModule = LabModule;
//# sourceMappingURL=lab.module.js.map