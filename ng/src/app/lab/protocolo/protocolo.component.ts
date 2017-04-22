import {Component, OnInit} from "@angular/core";
import {ProtocoloService} from "./service/protocolo.service";
import {Protocolo} from "./service/protocolo";

@Component({
    moduleId: module.id,
    templateUrl: 'protocolo.component.html',
  providers: [ProtocoloService]
})
export class ProtocoloComponent implements OnInit{
  public protocolos:Protocolo[]=[];
  constructor(private _protocoloService:ProtocoloService){

  }
  getProtocolos(){
    this._protocoloService.listarProtocolos().subscribe((protocolos:Protocolo[])=>this.protocolos=protocolos);
  }
 ngOnInit(){
    this.getProtocolos();
 }
}
