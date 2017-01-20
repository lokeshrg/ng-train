
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component"
import {HomeComponent} from "./home.component"
import {AboutComponent} from "./about.component"
import {ContactComponent} from "./contact.component"
import {FeedbackComponent} from "./feedback.component"

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        {path:"", component: HomeComponent},
        {path:"about", component: AboutComponent},
        {path:"contact", component: ContactComponent},
        {path:"feedback", component: FeedbackComponent}
    ])],
    declarations: [AppComponent, HomeComponent, ContactComponent, AboutComponent, FeedbackComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}