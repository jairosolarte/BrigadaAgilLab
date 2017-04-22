import { Component } from "@angular/core";
import {ProtocoloService} from "./service/protocolo.service";
import {Protocolo} from "./service/protocolo";
import {OnInit} from "@angular/core";

@Component({
    selector: 'protocolo-buscador',
    moduleId: module.id,
    templateUrl: 'protocolo.buscador.component.html'
})
export class ProtocoloBuscadorComponent {

    public protocolos: Protocolo[] = [];

    constructor(private _protocoloService: ProtocoloService) {
    }

    listarProtocolos() {
        this._protocoloService.listarProtocolos().subscribe((protocolos: Protocolo[]) => this.protocolos = protocolos);
    }

    ngOnInit(): any {
        this.listarProtocolos();
    }
}
