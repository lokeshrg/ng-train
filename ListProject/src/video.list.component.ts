
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {VideoList} from "./app.models";
import {VideoService} from "./app.services";

@Component({
    selector: "video-list",
    templateUrl: "./partials/video.list.component.html"
})

export class VideoListComponent{
    @Input()
    myVideos:Array<VideoList> = VideoService.getAllVideos();

    @Output()
    notify:EventEmitter<VideoList> = new EventEmitter();

    public showVideo(vid:VideoList):void{
        console.log("Show Video(in child):"+JSON.stringify(vid));
        this.notify.emit(vid);
    }

}
