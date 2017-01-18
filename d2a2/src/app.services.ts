
import {Injectable} from "@angular/core";
import {IQuote} from "./app.models";


let quotes:IQuote[]=[
    {line:"Line1", author:"Auth1"},
    {line:"Line2", author:"Auth2"},
    {line:"Line3", author:"Auth3"},
    {line:"Line4", author:"Auth4"}
];

@Injectable()
export class QuoteService{
    private svcQuote:IQuote[];
    constructor(){
        this.svcQuote=quotes;
    }
    public getRandomQuote():IQuote{
        return this.svcQuote[Math.floor(Math.random()*quotes.length)];
    }
}