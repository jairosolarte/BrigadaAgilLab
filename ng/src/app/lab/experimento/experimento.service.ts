import { Injectable } from "@angular/core";
import { EXPERIMENTOS } from "./experimento.list"
import {Observable} from "rxjs";
import {Experimentos} from "./experimento";
import {Http} from "@angular/http";
import {environment} from "../../../environments/environment";


@Injectable()
export class ExperimentoService {
   private url_servicios_proyectos = environment.url_servicios + "experimento/";
  constructor(private _http: Http) {
  }
    getExperimentos(){
        return Promise.resolve(EXPERIMENTOS);
    }

    findExperimento(id){
      return Promise.resolve(EXPERIMENTOS.filter(x=>x.id==id));
    }

}
