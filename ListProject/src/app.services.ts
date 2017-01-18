
import {Injectable} from "@angular/core";
import {VideoList} from "./app.models";

let videos:Array<VideoList>=[
    new VideoList(2, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 55 vid'),
    new VideoList(3, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 1 vid'),
    new VideoList(1, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 5 vid'),
    new VideoList(4, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 35 vid'),
    new VideoList(5, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 545 vid')
];

@Injectable()
export class VideoService{
    constructor(){
    }
    getVIdeoById(id:number):VideoList{
        return videos[id];
    }
}