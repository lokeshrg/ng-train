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
var http_1 = require("@angular/http");
var quotes = [];
//     {line:"Line1", author:"Auth1"},
//     {line:"Line2", author:"Auth2"},
//     {line:"Line3", author:"Auth3"},
//     {line:"Line4", author:"Auth4"}
// ];
var QuoteService = (function () {
    function QuoteService(ht) {
        this.ht = ht;
        this.restUrl = "http://localhost:2403/my-quotes";
        this.myHeaders = new http_1.Headers({ "Content-Type": "application/json" });
        this.options = new http_1.RequestOptions({ headers: this.myHeaders });
        this.svcQuote = quotes;
    }
    //CRUD ops
    QuoteService.prototype.getAllQuotes = function () {
        return this.ht.get(this.restUrl, this.options);
    };
    QuoteService.prototype.addQuote = function (quote) {
        return this.ht.post(this.restUrl, quote);
    };
    QuoteService.prototype.removeAllQuotes = function () {
        this.ht.delete(this.restUrl);
    };
    QuoteService.prototype.removeQuote = function (q) {
        return this.ht.delete(this.restUrl + "/" + q.id);
    };
    QuoteService.prototype.getRandomQuote = function () {
        return this.svcQuote[Math.floor(Math.random() * quotes.length)];
    };
    QuoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuoteService);
    return QuoteService;
}());
exports.QuoteService = QuoteService;
//# sourceMappingURL=app.services.js.map