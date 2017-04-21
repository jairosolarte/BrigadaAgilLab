import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
    templateUrl: 'proyecto.detalle.component.html',
})
export class ProyectoDetalleComponent {
    idProyecto: String;

    constructor(route: ActivatedRoute) {
        this.idProyecto = route.snapshot.params['id'];
    }
}