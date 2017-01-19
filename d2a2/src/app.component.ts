
import {Component} from "@angular/core";
import {IQuote} from "./app.models";
import {QuoteService} from "./app.services";
import {Http} from "@angular/http";
import {timestamp} from "rxjs/operator/timestamp";

@Component({
    selector: "quote-app",
    templateUrl: "./partials/app.component.html"
})

export class AppComponent{
    pageHeading:string = "sample quote!";
    newQuote:IQuote = {id:"", line:"", author:""};
    oldQuote:IQuote = {id:"", line:"", author:""};
    details:Array<IQuote>;
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

    constructor(private ht:Http, private quoteSvc:QuoteService){
        // let quoteSvc = new QuoteService();
        // this.quote = quoteSvc.getRandomQuote();
    }

    public getQuotes(){
        this.quoteSvc.getAllQuotes().subscribe(
            (response)=>this.details = response.json(),
            (error)=>console.log("Error: "+error),
            ()=>console.log("Get Quotes request completed at: "+new Date())
        );
    }

    public addQuote(){
        this.quoteSvc.addQuote(this.newQuote).subscribe(
            (response)=>console.log("Added this quote:"+response),
            (error)=>console.log("Error: "+error),
            ()=>console.log("Add quote request completed at: "+new Date())
        );
        // reset new quote
        this.newQuote = {id:"", line:"", author:""};
    }

    public removeQuote(q:IQuote){
        this.oldQuote = Object.assign({}, q);
        this.quoteSvc.removeQuote(this.oldQuote).subscribe(
            (response)=>console.log("Removed this quote:"+this.oldQuote),
            (error)=>console.log("Error: "+error),
            ()=>console.log("Remove quote request completed at: "+new Date())
        );
        // reset new quote
        this.oldQuote = {id:"", line:"", author:""};
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
