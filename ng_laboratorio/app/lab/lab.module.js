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
var proyecto_adjuntos_component_1 = require("./proyecto/proyecto.adjuntos.component");
var proyecto_informacion_basica_component_1 = require("./proyecto/proyecto.informacion.basica.component");
var proyecto_panel_component_1 = require("./proyecto/proyecto.panel.component");
var proyecto_detalle_component_1 = require("./proyecto/proyecto.detalle.component");
var proyecto_list_component_1 = require("./proyecto/proyecto.list.component");
var router_1 = require("@angular/router");
var protocolo_component_1 = require("./protocolo/protocolo.component");
var protocolo_buscador_component_1 = require("./protocolo/protocolo.buscador.component");
var protocolo_detalle_component_1 = require("./protocolo/protocolo.detalle.component");
var notificaciones_component_1 = require("./notificaciones/notificaciones.component");
var notificaciones_service_1 = require("./notificaciones/notificaciones.service");
var keys_pipe_1 = require("./keys.pipe");
var equipos_component_1 = require("./equipos/equipos.component");
var equipos_service_1 = require("./equipos/equipos.service");
var insumos_component_1 = require("./insumos/insumos.component");
var insumos_service_1 = require("./insumos/insumos.service");
var experimento_buscador_component_1 = require("./experimento/experimento.buscador.component");
var experimento_detalles_component_1 = require("./experimento/experimento.detalles.component");
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
                { path: 'proyectos', component: proyecto_panel_component_1.ProyectoPanelComponent },
                { path: 'protocolos', component: protocolo_component_1.ProtocoloComponent }
            ]),
        ],
        declarations: [
            proyecto_component_1.ProyectoComponent,
            proyecto_informacion_basica_component_1.ProyectoInformacionBasicaComponent,
            proyecto_adjuntos_component_1.ProyectoAdjuntosComponent,
            proyecto_panel_component_1.ProyectoPanelComponent,
            protocolo_component_1.ProtocoloComponent,
            protocolo_buscador_component_1.ProtocoloBuscadorComponent,
            experimento_buscador_component_1.ExperimentoBuscadorComponent,
            experimento_detalles_component_1.ExperimentoDetallesComponent,
            protocolo_detalle_component_1.ProtocoloDetalleComponent,
            proyecto_list_component_1.ProyectoListComponent,
            proyecto_detalle_component_1.ProyectoDetalleComponent,
            notificaciones_component_1.NotificacionesComponent,
            keys_pipe_1.KeysPipe,
            equipos_component_1.EquiposComponent,
            insumos_component_1.InsumosComponent
        ],
        exports: [
            notificaciones_component_1.NotificacionesComponent,
            proyecto_informacion_basica_component_1.ProyectoInformacionBasicaComponent,
            protocolo_buscador_component_1.ProtocoloBuscadorComponent,
            experimento_buscador_component_1.ExperimentoBuscadorComponent,
            experimento_detalles_component_1.ExperimentoDetallesComponent,
            protocolo_detalle_component_1.ProtocoloDetalleComponent,
            proyecto_adjuntos_component_1.ProyectoAdjuntosComponent,
            proyecto_panel_component_1.ProyectoPanelComponent,
            proyecto_list_component_1.ProyectoListComponent,
            proyecto_detalle_component_1.ProyectoDetalleComponent,
            equipos_component_1.EquiposComponent,
            insumos_component_1.InsumosComponent
        ],
        providers: [
            proyecto_service_1.ProyectoService,
            protocolo_service_1.ProtocoloService,
            muestra_service_1.MuestraService,
            experimento_service_1.ExperimentoService,
            notificaciones_service_1.NotificacionesService,
            equipos_service_1.EquiposService,
            insumos_service_1.InsumosService
        ]
    })
], LabModule);
exports.LabModule = LabModule;
//# sourceMappingURL=lab.module.js.map