
import {Injectable} from "@angular/core";
import {IQuote} from "./app.models";
import {Http, Headers, RequestOptions} from "@angular/http";


let quotes:IQuote[]=[];
//     {line:"Line1", author:"Auth1"},
//     {line:"Line2", author:"Auth2"},
//     {line:"Line3", author:"Auth3"},
//     {line:"Line4", author:"Auth4"}
// ];

@Injectable()
export class QuoteService{
    private restUrl:string="http://localhost:2403/my-quotes";
    private myHeaders = new Headers({"Content-Type":"application/json"});
    private options = new RequestOptions({headers: this.myHeaders});
    constructor(private ht:Http){
        this.svcQuote=quotes;
    }
    //CRUD ops
    public getAllQuotes(){//:Observable<any>
        return this.ht.get(this.restUrl, this.options);
    }

    public addQuote(quote:IQuote){
        return this.ht.post(this.restUrl, quote);
    }

    public removeAllQuotes(){
        this.ht.delete(this.restUrl);
    }

    public removeQuote(q:IQuote){
        return this.ht.delete(this.restUrl+"/"+q.id);
    }


    private svcQuote:IQuote[];
    public getRandomQuote():IQuote{
        return this.svcQuote[Math.floor(Math.random()*quotes.length)];
    }

}