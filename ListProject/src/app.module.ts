
import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {AppComponent} from "./app.component"
import {VideoListComponent} from "./video.list.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, VideoListComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}