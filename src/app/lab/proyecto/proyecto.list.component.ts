import { Component } from "@angular/core";
import {ProyectoService} from "./proyecto.service";
import {Proyectos} from "./proyecto";
import {OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "proyecto-list",
    templateUrl: 'proyecto.list.component.html',
    providers: [ProyectoService]
})
export class ProyectoListComponent implements OnInit{
     public proyectos : Proyectos[]=[]
    constructor(private _proyectoService: ProyectoService){}
    getProyectos(){
         this._proyectoService.getProyectos().then((proyectos: Proyectos[]) => this.proyectos = proyectos);
    }
    ngOnInit():any{
      this.getProyectos();
   }
}