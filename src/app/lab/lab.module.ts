import {NgModule} from "@angular/core";
import {ProyectoService} from "./proyecto/service/proyecto.service";
import {ProtocoloService} from "./protocolo/protocolo.service";
import {MuestraService} from "./muestra/muestra.service";
import {ExperimentoService} from "./experimento/experimento.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ProyectoComponent} from "./proyecto/proyecto.component";
import {ProyectoAdjuntosComponent} from "./proyecto/proyecto.adjuntos.component";
import {ProyectoInformacionBasicaComponent} from "./proyecto/proyecto.informacion.basica.component";
import {ProyectoPanelComponent} from "./proyecto/proyecto.panel.component";
import {ProyectoDetalleComponent} from "./proyecto/proyecto.detalle.component";
import {ProyectoListComponent} from "./proyecto/proyecto.list.component";
import {RouterModule} from "@angular/router";
import {ProtocoloComponent} from "./protocolo/protocolo.component";
import {ProtocoloBuscadorComponent} from "./protocolo/protocolo.buscador.component";
import {ProtocoloDetalleComponent} from "./protocolo/protocolo.detalle.component";
import {ProtocoloResumenComponent} from "./protocolo/protocolo.resumen.component";
import {NotificacionesComponent} from "./notificaciones/notificaciones.component"
import {NotificacionesService} from "./notificaciones/notificaciones.service";
import {KeysPipe} from "./keys.pipe";
import {EquiposComponent} from "./equipos/equipos.component";
import {EquiposService} from "./equipos/equipos.service";
import {InsumosComponent} from "./insumos/insumos.component";
import {InsumosService} from "./insumos/insumos.service";
import {ExperimentoBuscadorComponent} from "./experimento/experimento.buscador.component";
import {ExperimentoDetallesComponent} from "./experimento/experimento.detalles.component";
import {ProyectoNuevoComponent} from './proyecto/proyecto-nuevo/proyecto-nuevo.component';
import {ProyectoControladorComponent} from './proyecto/proyecto-controlador/proyecto-controlador.component';
import {UIModule} from "../ui/ui.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path: 'proyectos', component: ProyectoControladorComponent},
            {path: 'proyectos/nuevo', component: ProyectoNuevoComponent},
            {path: 'protocolos', component: ProtocoloComponent}
        ]),
        UIModule,
    ],
    declarations: [
        ProyectoComponent,
        ProyectoInformacionBasicaComponent,
        ProyectoAdjuntosComponent,
        ProyectoPanelComponent,
        ProtocoloComponent,
        ProtocoloBuscadorComponent,
        ProtocoloResumenComponent,
        ExperimentoBuscadorComponent,
        ExperimentoDetallesComponent,
        ProtocoloDetalleComponent,
        ProyectoListComponent,
        ProyectoDetalleComponent,
        NotificacionesComponent,
        KeysPipe,
        EquiposComponent,
        InsumosComponent,
        ProyectoNuevoComponent,
        ProyectoControladorComponent
    ],
    exports: [
        NotificacionesComponent,
        ProyectoInformacionBasicaComponent,
        ProtocoloBuscadorComponent,
        ExperimentoBuscadorComponent,
        ExperimentoDetallesComponent,
        ProtocoloDetalleComponent,
        ProtocoloResumenComponent,
        ProyectoAdjuntosComponent,
        ProyectoPanelComponent,
        ProyectoListComponent,
        ProyectoDetalleComponent,
        EquiposComponent,
        InsumosComponent

    ],
    providers: [
        ProyectoService,
        ProtocoloService,
        MuestraService,
        ExperimentoService,
        NotificacionesService,
        EquiposService,
        InsumosService

    ]


})
export class LabModule {

}