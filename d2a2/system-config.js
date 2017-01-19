/**
 * Created by abridge on 1/18/2017.
 */
SystemJS.config({
    packages: {
        "app": {
            main: "entry",
            defaultExtention: "js"
        },
        "rxjs": {defaultExtention: "js"}
    },
    map: {
        "app": "dist",
        //umd - universal module definition
        "@angular/core": "node_modules/@angular/core/bundles/core.umd.js",
        "@angular/common": "node_modules/@angular/common/bundles/common.umd.js",
        "@angular/compiler": "node_modules/@angular/compiler/bundles/compiler.umd.js",
        "@angular/forms": "node_modules/@angular/forms/bundles/forms.umd.js",
        "@angular/platform-browser": "node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
        "@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
        "rxjs": "node_modules/rxjs"
    }
});
SystemJS.import("app");