import { Component } from "@angular/core";
import {ActivatedRoute} from "@angular/router";


@Component({
    moduleId: module.id,
    templateUrl: 'proyecto.panel.component.html',
})
export class ProyectoPanelComponent {
    private idProyecto: String;

    constructor(route: ActivatedRoute) { // 2
        this.idProyecto = route.snapshot.params['id']; // 3
    }
}