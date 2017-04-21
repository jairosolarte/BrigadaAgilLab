import {Component} from "@angular/core";
import {ProyectoService} from "../service/proyecto.service";
import {Proyecto} from "../service/proyecto";
import {OnInit} from "@angular/core";

@Component({
    selector: "proyecto-list",
    templateUrl: 'proyecto.list.component.html',
    providers: [ProyectoService]
})
export class ProyectoListComponent implements OnInit {
    public proyectos: Proyecto[] = [];

    constructor(private _proyectoService: ProyectoService) {
    }

    getProyectos() {
        this._proyectoService.getProyectos().subscribe((proyectos: Proyecto[]) => this.proyectos = proyectos);
    }

    ngOnInit(): any {
        this.getProyectos();
    }
}