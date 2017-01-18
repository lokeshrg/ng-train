
import {Component} from "@angular/core";
import {IQuote} from "./app.models";
import {QuoteService} from "./app.services";

@Component({
    selector: "quote-app",
    templateUrl: "./partials/app.component.html"
})

export class AppComponent{
    pageHeading:string = "sample quote!";
    quote:IQuote;
    constructor(){
        let quoteSvc = new QuoteService();
        this.quote = quoteSvc.getRandomQuote();
    }
}
