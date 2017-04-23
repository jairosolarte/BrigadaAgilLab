import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";
import {ProtocoloService} from "./service/protocolo.service";
import {Protocolo} from "./service/protocolo";
import {OnInit} from "@angular/core";

@Component({
    selector: 'protocolo-buscador',
    moduleId: module.id,
    templateUrl: 'protocolo.buscador.component.html'
})
export class ProtocoloBuscadorComponent{

    public protocolos: Protocolo[] = [];

    @Input() nombre: string = "";

    constructor(private _protocoloService: ProtocoloService) {
    }

    listarProtocolos() {
        if(this.nombre != ""){
            this._protocoloService.listarProtocolosFiltradosNombre(this.nombre).subscribe((protocolos: Protocolo[]) => this.protocolos = protocolos);
        }else{
            this._protocoloService.listarProtocolos().subscribe((protocolos: Protocolo[]) => this.protocolos = protocolos);
        }
    }

    keyup(){
        this.listarProtocolos();
    }

    ngOnInit(): any {
        this.listarProtocolos();
    }
}
