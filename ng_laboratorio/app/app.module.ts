import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FooterComponent} from "./layout/footer.component";
import {NavigationComponent} from "./layout/navigation.component";
import {TopNavBarComponent} from "./layout/topnavbar.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { PanelControlComponent } from "./panel-control/panel-control.component";
import { LabModule } from "./lab/lab.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'panel-control', component: PanelControlComponent },
            {path: '', redirectTo: 'panel-control', pathMatch:'full'},
            {path: '**', redirectTo: 'panel-control', pathMatch:'full'},
        ]),
        LabModule,
    ],
    declarations: [AppComponent,
        FooterComponent,
        NavigationComponent,
        TopNavBarComponent,
        PanelControlComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
