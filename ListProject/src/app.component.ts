
import {Component} from "@angular/core";
import {VideoList} from "./app.models";
import {VideoService} from "./app.services";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: "app",
    templateUrl: "./partials/app.component.html"
})

export class AppComponent{
    pageTitle:string = "sample play list!";
    videos:Array<VideoList>;
    selVid:VideoList = new VideoList(0,'','','');
    constructor(){
        this.videos = VideoService.getAllVideos();
    }

    public onNotify(video:VideoList){
        console.log("Selected Video(in parent)"+JSON.stringify(video));
        this.selVid = video;
    }
}
