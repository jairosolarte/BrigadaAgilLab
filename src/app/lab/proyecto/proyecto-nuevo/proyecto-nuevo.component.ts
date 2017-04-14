import {Component, OnInit} from "@angular/core";
import {ProyectoService} from "../service/proyecto.service";

@Component({
    templateUrl: 'proyecto-nuevo.component.html',
    providers: [ProyectoService]
})
export class ProyectoNuevoComponent implements OnInit {

    constructor(private _proyectoService: ProyectoService) {
    }

    ngOnInit() {
    }


}
