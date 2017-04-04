import { Component } from "@angular/core";
import {ProyectoService} from "./proyecto.service";
import {Proyectos} from "./proyecto";
import {OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "proyecto-detalle",
    templateUrl: 'proyecto.detalle.component.html',
    providers: [ProyectoService]
})
export class ProyectoDetalleComponent{

}