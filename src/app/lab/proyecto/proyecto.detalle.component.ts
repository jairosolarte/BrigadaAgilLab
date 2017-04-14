import { Component } from "@angular/core";
import {ProyectoService} from "./service/proyecto.service";

@Component({
    moduleId: module.id,
    selector: "proyecto-detalle",
    templateUrl: 'proyecto.detalle.component.html',
    providers: [ProyectoService]
})
export class ProyectoDetalleComponent{

}