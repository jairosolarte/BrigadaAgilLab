import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
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

  nuevoProyecto() {
  }

  eliminarProyecto() {

  }
}
