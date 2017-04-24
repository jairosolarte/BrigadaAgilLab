import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Insumo } from "./insumo";

@Injectable()
export class InsumosService {

    listInsumos(number:number, search: string, order: string): Insumo[] {

        let items: Array<Insumo> = [];

        for(var i = 1; i <= number; i++){
            var nombre = 'Insumo ' + i

            if(nombre.indexOf(search) != -1 || search.trim().length == 0){

                items.push({
                    id:i,
                    nombre:nombre,
                    descripcion: "Descripción muy corta del insumo " + i,
                    precio:"$2.5",
                    unidad:"gramos",
                    provedor:"Distri Quimicos N"+i,
                    estado: 1,
                    imagen:this.getImagen(),
                });
           }
        }
        items = items.sort(this.dynamicSort(order))
        return items;
    }

    dynamicSort(property: string) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a:Insumo,b:Insumo) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    getImagen(){
        var temp  = Math.round(Math.random() * (5 - 1) + 1);
        var img = "http://www.granvelada.com/4460-thickbox_default/azufre-bio-en-polvo.jpg";
        switch (temp) {
            case 2:
                img = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDBRE_ee5Dj6Lc9bYZhoWC7IGgkkIBzMNUSf7eA5_mDebucQbh";
                break;
            case 1:
                img = "http://www.granvelada.com/4460-thickbox_default/azufre-bio-en-polvo.jpg";
                break;
            case 3:
                img = "http://5jotas.pe/public_jotas/uploads/producto_pequeno_lkH8_producto-1.png";
                break;
            case 4:
                img = "http://3.bp.blogspot.com/_YWtRFN84rVw/SO6MwEpCN_I/AAAAAAAAALc/n7id99ZmQjg/s320/cobalto.jpg";
                break;
            case 5:
                img = "http://www.doncloro.cl/site/doncloro/wp-content/uploads/2013/08/acidomuriatico.png";
                break;
        }
        return img;
    }






}/**
 * Created by user on 29/03/2017.
 */
