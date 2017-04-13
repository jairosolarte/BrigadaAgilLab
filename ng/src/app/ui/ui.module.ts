import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { iBoxToolsComponent } from "./ibox-tools.component"


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        iBoxToolsComponent,
    ],
    exports:[
        iBoxToolsComponent,
    ]

})
export class UIModule {

}