"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_models_1 = require("./app.models");
var platform_browser_1 = require("@angular/platform-browser");
var videos = [
    new app_models_1.VideoList(1, 'title1', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 5 vid'),
    new app_models_1.VideoList(2, 'title2', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 55 vid'),
    new app_models_1.VideoList(3, 'title3', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 1 vid'),
    new app_models_1.VideoList(4, 'title4', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 35 vid'),
    new app_models_1.VideoList(5, 'title5', 'https://www.youtube.com/embed/watch?v=e3djIqAGqZo', 'Angular 545 vid')
];
var VideoService = (function () {
    //let ds:DomSanitizer;
    function VideoService(domSanitizer) {
        this.domSanitizer = domSanitizer;
        //this.ds = domSanitizer;
        var v; //for for loop LHS should be any
        for (v in videos) {
            console.log("before sanitize: " + v.url);
            v.url = this.domSanitizer.bypassSecurityTrustResourceUrl(v.url);
            console.log("after sanitize: " + v.url);
        }
    }
    VideoService.getVideoById = function (id) {
        return videos[id];
    };
    VideoService.getAllVideos = function () {
        return videos;
    };
    VideoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=app.services.js.map