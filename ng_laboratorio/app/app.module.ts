import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FooterComponent} from "./layout/footer.component";
import {NavigationComponent} from "./layout/navigation.component";
import {TopNavBarComponent} from "./layout/topnavbar.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,
        FooterComponent,
        NavigationComponent,
        TopNavBarComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
