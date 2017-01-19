
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
    private _counter:number = 0;

    constructor(){
        let quoteSvc = new QuoteService();
        this.quote = quoteSvc.getRandomQuote();
    }

    get counter(): number {
        return this._counter;
    }

    set counter(value: number) {
        this._counter = value;
    }

    public incrementCount(){
        this.counter++;
    }
}
