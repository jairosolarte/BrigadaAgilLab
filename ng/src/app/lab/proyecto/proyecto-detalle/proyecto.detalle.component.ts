import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProyectoService} from "../service/proyecto.service";
import {Proyecto} from "../service/proyecto";


@Component({
  templateUrl: 'proyecto.detalle.component.html',
  providers: [ProyectoService]
})
export class ProyectoDetalleComponent implements OnInit {
  private idProyecto: string;
  public proyecto: Proyecto[] = [];


  constructor(route: ActivatedRoute, private _proyectoService: ProyectoService) {
    this.idProyecto = route.snapshot.params['id'];

  }

  getProyecto() {
    this._proyectoService
      .getProyectos()
      .subscribe((proyectos: Proyecto[]) =>
          this.proyecto = JSON.parse(JSON.stringify(proyectos.filter(p => p.id == parseInt(this.idProyecto))
            .pop())),
        error => console.log(error),
        () => console.log(this.proyecto));
  }

  ngOnInit(): any {
    this.getProyecto();
  }
}
