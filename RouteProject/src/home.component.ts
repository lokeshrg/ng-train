

import {Component} from "@angular/core";
@Component({
    styles: ['h3 {color: blue}'], //alt: styleUrl:[]
    template: '<h3>975666</h3>'//templateUrl
        +'{{price | currency | lowercase}}' // chaining - :"CLP"
        +'<br/>{{myDate | date: fullDate}}'
        +'<br/>{{productName}} >>>> when reversed becomes  >>>'
        +'<br/>{{productName | reverseText}}'

})

export class HomeComponent{
    price:number = 100.34;
    myDate = new Date();
    productName:string = 'MomoM isi a incocni palinilap';
}