import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProyectoService} from "../service/proyecto.service";
import {Proyecto} from "../service/proyecto";
import {ExperimentoService} from "../../experimento/experimento.service";


@Component({
    templateUrl: 'proyecto.detalle.component.html',
    providers: [ProyectoService]
})
export class ProyectoDetalleComponent implements OnInit {
    public idProyecto:string;
    public proyecto:Proyecto;
    public show:string;

    constructor(route:ActivatedRoute, private _proyectoService:ProyectoService, private _experimentoService:ExperimentoService) {
        this.idProyecto = route.snapshot.params['id'];
    }

    getProyecto() {
        console.log("Esto es el id del proyecto: "+this.idProyecto)
        this.proyecto = this._proyectoService.obtenerPorId(this.idProyecto);
    }


    ngOnInit():any {
        this.getProyecto();

    }
}
