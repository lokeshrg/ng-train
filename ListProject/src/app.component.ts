
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
    constructor(private domSanitizer:DomSanitizer){
        let v:any; //for for loop LHS should be any
        for(v in this.videos){
            console.log("before sanitize: "+v.url);
            v.url = this.domSanitizer.bypassSecurityTrustResourceUrl(v.url);
            console.log("after sanitize: "+v.url);
        }
        this.videos = VideoService.getAllVideos();
    }

    public onNotify(video:VideoList){
        console.log("Selected Video(in parent)"+JSON.stringify(video));
        this.selVid = video;
    }
    public closeVideo(){
        this.selVid = new VideoList(0,'','','');
    }
}
