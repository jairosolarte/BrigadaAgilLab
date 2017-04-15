import {Component, OnInit} from "@angular/core";
import {ProyectoService} from "../service/proyecto.service";
import {LabelsService} from "../../labels.service";

@Component({
    templateUrl: 'proyecto-nuevo.component.html',
    providers: [ProyectoService, LabelsService]
})
export class ProyectoNuevoComponent implements OnInit {
    _: {};

    constructor(private _labelsService: LabelsService, private _proyectoService: ProyectoService) {
        this._ = _labelsService.getLabels();
    }

    ngOnInit() {
    }


}
