import { Component, OnInit } from "@angular/core";
import { ExperimentoService } from "./experimento.service";
import { Experimentos } from "./experimento"

@Component({
    moduleId: module.id,
    selector: 'experimento-buscador',
    templateUrl: 'experimento.buscador.component.html',
    providers: [ExperimentoService]
})
export class ExperimentoBuscadorComponent {
    public experimentos : Experimentos[]=[]
    constructor(private _experimentoService: ExperimentoService){}
    getExperimentos(){
        this._experimentoService.getExperimentos().then((experimentos: Experimentos[]) => this.experimentos = experimentos);
    }
    ngOnInit():any{
        this.getExperimentos();
    }
}