
import { Component, Input, OnInit } from "@angular/core";
import { Equipo } from './equipo';
import { EquiposService } from "./equipos.service";
declare var jQuery:any;

@Component({
    selector: 'lab-equipos',
    moduleId: module.id,
    templateUrl: 'equipos.component.html'
})
export class EquiposComponent implements OnInit {
    list: Equipo[] = [];
    search: string = '';
    checkEquipos: number[] = [];
    selectedOrder: string = "-nombre";
    dateEquipos:Array<Object> = [];

    constructor(private _equipoService: EquiposService) {

    }
    ngOnInit(): void {
        this.getEquipos();
        this.createCalendar();
    }

    getEquipos(){
        console.info(this.search, this.selectedOrder);
        this.list = this._equipoService.listEquipos(5, this.search,this.selectedOrder);

    }


    onSelect(id:number){
        alert(id);
        //$('#dd').html(id);
    }

    getDateCalendar(id:number) {

        var index = this.checkEquipos.indexOf(id);
        if(index!= -1){
            this.checkEquipos.splice(index, 1);
        }else{
           this.checkEquipos.push(id);
        }

        this.dateEquipos = this._equipoService.getDateEquipos(this.checkEquipos)
        //console.info(this.dateEquipos);
        this.createCalendar();
        //jQuery('#calendar').fullCalendar('renderEvent',this.dateEquipos );
        //jQuery('#calendar').fullCalendar( 'rerenderEvents' );

    }

    createCalendar(){
        jQuery('#calendar').fullCalendar('destroy');
        jQuery('#calendar').fullCalendar({
            header: {
                //left: 'prev,next today',
                center: 'left',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: false,
            events: this.dateEquipos
        });
    }


}