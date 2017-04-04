import {Injectable} from "@angular/core";
import {PROYECTOS} from "./proyecto.list";


@Injectable()


export class ProyectoService {
   getProyectos() {
      return Promise.resolve(PROYECTOS);
   }
}