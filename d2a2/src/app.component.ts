
import {Component} from "@angular/core";
import {IQuote} from "./app.models";
import {QuoteService} from "./app.services";
import {Http} from "@angular/http";

@Component({
    selector: "quote-app",
    templateUrl: "./partials/app.component.html"
})

export class AppComponent{
    pageHeading:string = "sample quote!";
    quote:IQuote;
    details:Array<any>;
    msg:string = 'text';

    public getExternalData(){
        this.ht.get('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}')
            .subscribe(
                (response)=>{
                    console.log("Success: "+response);
                    this.details = response.json();
                },
                (error)=>console.log("Error: "+error),
                ()=>console.log("Completed!")
            );
    }
    private _counter:number = 0;

    constructor(private ht:Http){
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
