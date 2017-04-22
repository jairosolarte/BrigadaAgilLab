import { Injectable } from "@angular/core";
import { EXPERIMENTOS } from "./experimento.list"
import {Observable} from "rxjs";
import {Experimentos} from "./experimento";
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../../environments/environment";


@Injectable()
export class ExperimentoService {
   private url_servicios_proyectos = environment.url_servicios + "experimento/";
  constructor(private _http: Http) {
  }
    getExperimentosStatic(){
        return Promise.resolve(EXPERIMENTOS);
    }

    getExperimentos(): Observable<Experimentos[]> {
    return this._http.get(this.url_servicios_proyectos)
      .map(response=><Experimentos[]>response.json());

  }

    findExperimento(id){
      return Promise.resolve(EXPERIMENTOS.filter(x=>x.id==id));
    }

    asociarProtocolo(item):Observable<Experimentos[]>{

      let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(headers);
       return this._http.put(this.url_servicios_proyectos+item["id"]+"/",item,options).map(response=><Experimentos[]>response.json());

    }
}
