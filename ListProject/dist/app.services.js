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
var videos = [
    new app_models_1.VideoList(2, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 55 vid'),
    new app_models_1.VideoList(3, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 1 vid'),
    new app_models_1.VideoList(1, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 5 vid'),
    new app_models_1.VideoList(4, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 35 vid'),
    new app_models_1.VideoList(5, 'title3', 'https://www.youtube.com/watch?v=e3djIqAGqZo', 'Angular 545 vid')
];
var VideoService = (function () {
    function VideoService() {
    }
    VideoService.prototype.getVIdeoById = function (id) {
        return videos[id];
    };
    VideoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=app.services.js.map