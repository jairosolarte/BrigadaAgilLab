import { Injectable } from "@angular/core";
import { EXPERIMENTOS } from "./experimento.list"

@Injectable()
export class ExperimentoService {
    getExperimentos(){
        return Promise.resolve(EXPERIMENTOS);
    }
}