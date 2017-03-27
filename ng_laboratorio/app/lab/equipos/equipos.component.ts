
import { Component, Input, OnInit } from "@angular/core";
import { Equipo } from './equipo';
import { EquiposService } from "./equipos.service";

@Component({
    selector: 'lab-equipos',
    moduleId: module.id,
    templateUrl: 'equipos.component.html'
})
export class EquiposComponent implements OnInit {
    list: Equipo[] = [];
    search: string = '';
    selectedOrder: string = "-nombre";

    constructor(private _equipoService: EquiposService) {
    }
    ngOnInit(): void {
        this.getEquipos();
    }

    getEquipos(){
        console.info(this.search, this.selectedOrder);
        this.list = this._equipoService.listEquipos(5, this.search,this.selectedOrder);
    }


    onSelect(id:number){
        alert(id);
        //$('#dd').html(id);
    }


}