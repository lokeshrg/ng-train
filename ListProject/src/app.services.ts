
import {Injectable} from "@angular/core";
import {VideoList} from "./app.models";
import {DomSanitizer} from "@angular/platform-browser";

let videos:Array<VideoList>=[
    new VideoList(1, 'title1', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 5 vid'),
    new VideoList(2, 'title2', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 55 vid'),
    new VideoList(3, 'title3', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 1 vid'),
    new VideoList(4, 'title4', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 35 vid'),
    new VideoList(5, 'title5', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 545 vid')
];

@Injectable()
export class VideoService{
    //let ds:DomSanitizer;
    constructor(private domSanitizer:DomSanitizer){
        //this.ds = domSanitizer;
        let v:any; //for for loop LHS should be any
        for(v in videos){
            console.log("before sanitize: "+v.url);
            v.url = this.domSanitizer.bypassSecurityTrustResourceUrl(v.url);
            console.log("after sanitize: "+v.url);
        }
    }
    public static getVideoById(id:number):VideoList{
        return videos[id];
    }
    public static getAllVideos():Array<VideoList>{
        return videos;
    }
}