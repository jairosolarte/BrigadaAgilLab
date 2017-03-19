import {Component} from "@angular/core";

@Component({
    selector: 'lab-top-nav-bar',
    moduleId: module.id,
    templateUrl: 'topnavbar.component.html'
})
export class TopNavBarComponent {
    public pageTitle: string = 'Welcome';
}