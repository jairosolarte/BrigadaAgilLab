import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Equipo } from "./equipo";

@Injectable()
export class EquiposService {

    listEquipos(number:number, search: string, order: string): Equipo[] {

        let items: Array<Equipo> = [];
        for(var i = 1; i <= number; i++){
            var nombre ='hola'+i;
            if(nombre.indexOf(search) != -1 || search.trim().length == 0){
                items.push({
                    id:i,
                    nombre:nombre,
                });
           }
        }

        items = items.sort(this.dynamicSort(order))
        return items;

        /*return [
            {
                id: 2,
                nombre: "Insumo"
            }
        ]*/
    }

    dynamicSort(property: string) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a:Equipo,b:Equipo) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

}