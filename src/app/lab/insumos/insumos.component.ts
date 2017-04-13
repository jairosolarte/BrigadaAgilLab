import { Component, Input, OnInit } from "@angular/core";
import { Insumo } from './insumo';
import { InsumosService } from "./insumos.service";
//declare var jQuery:any;

@Component({
    selector: 'lab-insumos',
    moduleId: module.id,
    templateUrl: 'insumos.component.html'
})

export class InsumosComponent implements OnInit{

    list: Insumo[] = [];
    listP: Insumo[] = [];
    itemInsumoD: Insumo = {
        id:0,
        nombre:"---",
        descripcion: "---",
        precio:"$0.0",
        unidad:"---",
        provedor:"---",
        estado: 0,
        imagen:'',
    }
    itemInsumo: Insumo;
    itemInsumoP: Insumo;
    search: string = '';
    selectedOrder: string = "-nombre";

    constructor(private _insumoService: InsumosService) {

    }

    ngOnInit(): void {

        this.getInsumos();
        this.getInsumosP();
    }


    getInsumos(){
        this.list = this._insumoService.listInsumos(5, this.search,this.selectedOrder);
        this.itemInsumo = this.list.length > 0 ? this.list[0] : this.itemInsumoD;
    }

    clicked(item:Insumo){
        this.itemInsumo = item;
    }

    getInsumosP(){
        this.listP = this._insumoService.listInsumos(5, this.search,this.selectedOrder);
        this.itemInsumoP = this.listP.length > 0 ? this.listP[0] : this.itemInsumoD;
    }

    clickedP(item:Insumo){
        console.info(item);
        this.itemInsumoP = item;
    }

}
