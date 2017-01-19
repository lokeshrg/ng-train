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
var app_services_1 = require("./app.services");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(ht) {
        this.ht = ht;
        this.pageHeading = "sample quote!";
        this.msg = 'text';
        this._counter = 0;
        var quoteSvc = new app_services_1.QuoteService();
        this.quote = quoteSvc.getRandomQuote();
    }
    AppComponent.prototype.getExternalData = function () {
        var _this = this;
        this.ht.get('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}')
            .subscribe(function (response) {
            console.log("Success: " + response);
            _this.details = response.json();
        }, function (error) { return console.log("Error: " + error); }, function () { return console.log("Completed!"); });
    };
    Object.defineProperty(AppComponent.prototype, "counter", {
        get: function () {
            return this._counter;
        },
        set: function (value) {
            this._counter = value;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.incrementCount = function () {
        this.counter++;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "quote-app",
            templateUrl: "./partials/app.component.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map