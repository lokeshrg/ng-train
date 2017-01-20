"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var contact_component_1 = require("./contact.component");
var feedback_component_1 = require("./feedback.component");
var not_found_component_1 = require("./not.found.component");
var routeList = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "contact", component: contact_component_1.ContactComponent },
    { path: "feedback", component: feedback_component_1.FeedbackComponent },
    { path: "**", component: not_found_component_1.NotFoundComponent } //** is for any other path
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routeList)],
        declarations: [app_component_1.AppComponent, not_found_component_1.NotFoundComponent, home_component_1.HomeComponent,
            contact_component_1.ContactComponent, about_component_1.AboutComponent, feedback_component_1.FeedbackComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.modules.js.map