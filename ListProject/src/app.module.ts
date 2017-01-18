
import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {AppComponent} from "./app.component"
//import {QuoteService} from "./app.services"

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
   // providers: [QuoteService],
    bootstrap: [AppComponent]
})

export class AppModule{}