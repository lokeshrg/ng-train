
import {Component} from "@angular/core";
import {VideoList} from "./app.models";

@Component({
    selector: "my-app",
    templateUrl: "./partials/app.component.html"
})

export class AppComponent{
    pageTitle:string = "sample play list!";
    videos:Array<VideoList>;
    constructor(){
        //vid
    }
}
