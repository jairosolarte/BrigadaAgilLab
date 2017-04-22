import {Component} from "@angular/core";
import {ProyectoService} from "../service/proyecto.service";
import {Proyecto} from "../service/proyecto";
import {OnInit} from "@angular/core";
import {Experimentos} from "../../experimento/experimento";
import {ExperimentoService} from "../../experimento/experimento.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "proyecto-experimento",
  templateUrl: 'proyecto.asociar.exp.component.html',
  providers: [ProyectoService, ExperimentoService]
})
export class ProyectoAsociarExpComponent implements OnInit {
  public experimentos: Experimentos[] = [];
  public experimento: Experimentos[] = [];
  public idProyecto: string;
  public proyecto: Proyecto[] = [];


  constructor(private _experimentoService: ExperimentoService,
              private _proyectoService: ProyectoService,
              route: ActivatedRoute) {
    this.idProyecto = route.snapshot.params['id'];
  }

  getExperimentos() {
    this._experimentoService
      .getExperimentos()
      .subscribe((experimentos: Experimentos[]) =>
        this.experimentos = experimentos);
  }

  onSelect(item: Experimentos[]) {
    this.experimento = item;
    window.scroll(0,300);
  }

  getProyecto(item) {
    this._proyectoService
      .getProyectos()
      .subscribe((proyectos: Proyecto[]) =>
          this.proyecto = JSON.parse(JSON.stringify(proyectos.filter(p => p.id == parseInt(this.idProyecto))
            .pop())),
        error => console.log(error),
        () => this.addExperimento(item));
  }

  addExperimento(item) {
    if (!this.proyecto["experimentos"])
      this.proyecto["experimentos"] = [];
    this.proyecto["experimentos"]
      .push(<Experimentos>item);
    this._proyectoService
      .asociarProyecto(this.proyecto)
      .subscribe(res => console.log(res));
  }
  inicializaVariables(){
  if (!this.proyecto["experimentos"])
      this.proyecto["experimentos"] = [];
  if(!this.experimento["experimento"])
    this.experimento["experimento"]=[];
  }

  ngOnInit(): any {
    this.inicializaVariables();
    this.getExperimentos();
    window.scrollTo(0, 0);

  }
}
