import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Protocolo} from "./protocolo";


@Injectable()
export class ProtocoloService {

    private url_servicios_protocolo = environment.url_servicios + "protocolo/";
    private url_servicios_protocolo_filtro_nombre = environment.url_servicios + "protocolo/filtro/";

    constructor(private _http: Http) {
    }

    listarProtocolos():Observable<Protocolo[]> {
        return this._http.get(this.url_servicios_protocolo).map((response: Response) => <Protocolo[]>response.json());
    }
    listarProtocolosFiltradosNombre(nombre):Observable<Protocolo[]> {
        return this._http.get(this.url_servicios_protocolo_filtro_nombre+nombre).map((response: Response) => <Protocolo[]>response.json());
    }
}
