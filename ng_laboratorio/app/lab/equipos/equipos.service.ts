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

    getDateEquipos(checked: number[]){
        let dateEquipo: Array<Object> = [];

        if(checked.length == 0){
            return dateEquipo;
        }
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        dateEquipo = [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1)
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d-5),
                    end: new Date(y, m, d-2)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d-3, 16, 0),
                    allDay: false
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d+4, 16, 0),
                    allDay: false
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d+1, 19, 0),
                    end: new Date(y, m, d+1, 22, 30),
                    allDay: false
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }
            ];
        return dateEquipo;

    }

}