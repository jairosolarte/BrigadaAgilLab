import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions} from "@angular/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Proyecto} from "./proyecto";
import 'rxjs/add/operator/map';


@Injectable()
export class ProyectoService {
  private url_servicios_proyectos = environment.url_servicios + "proyecto/";

  constructor(private _http: Http) {
  }

  getProyectos(): Observable<Proyecto[]> {
    return this._http.get(this.url_servicios_proyectos).map((response: Response) => <Proyecto[]>response.json());
  }

  nuevoProyecto(form):Observable<Proyecto[]> {
    console.log(form);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions(headers);
    return this._http.post(this.url_servicios_proyectos,form,options).map((response:Response) => <Proyecto[]>response.json());
  }

  eliminarProyecto() {

  }
}
