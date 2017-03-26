import { Component, OnInit, ElementRef } from "@angular/core";

declare var jQuery:any;

@Component({
    selector: 'lab-navigation',
    moduleId: module.id,
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit {
    constructor(private _el: ElementRef) {
    
    }

    ngOnInit(): void {
        jQuery(this._el.nativeElement).filter('#side-menu').metisMenu();
        jQuery(this._el.nativeElement).filter('.sidebar-collapse').slimScroll({
            height: '100%',
            railOpacity: 0.9
        });
    }


}