/**
 * Created by user on 22/03/2017.
 */
import {Component} from "@angular/core";


@Component({
    selector: 'dd-cienti',
    moduleId: module.id,
    templateUrl: 'panel-control-jefe.component.html'
})
export class PanelControlComponentJefe {
    list: Object[] = [{id:1,nombre:'asdasd'},{id:2,nombre:'hola'}];
    constructor() {
        this.list = this.createRange(10);
        console.info(this.list);
    }

    createRange(number: number){
        let items: Array<Object> = [];
        for(var i = 1; i <= number; i++){
           items.push({
               id:i,
               nombre:'hola'+i,
           });
        }
     return items;
    }

  onSelect(id:number){
        alert(id);
        //$('#dd').html(id);
  }
}