/**
 * Created by abridge on 1/17/2017.
 */
let greet = (x)=>alert("Hello "+ x);
let calcAge = (x)=>{
    let a:number;
    // a='I Fail to compile';
    a=29;
    alert("Your age is : " +a)
};


/**? is used for optional parameters */
let fn1 = (a:number, b?:number, c=2):number=>{
    console.log('hi from fn data type');
    if(b!==undefined){
        a=a+b;
    }
    return 2+a+c;
}
console.log(fn1(5)+7);
// console.log(a);

//Rest parameters - like var args
let getSumVar = (...numb:number[]):number=>{
    var sum:number = 0;
    for(let i=0; i<numb.length; i++){
        sum+=numb[i];
    }
    return sum;
};
console.log(getSumVar(12,34,78));

//Fn over loading
// let myprint = ():void=>console.log('hi me ovl');
function myprint(msg:number):void; //=>console.log('hi me ovl, numb: '+a);
function myprint(msg:string):void; //=>console.log('hi me ovl, msg: '+msg);
// arrow types always use anony fns - while method over loading anony fn cant be used to provide defn
function myprint(msg:any):void{
    console.log('hi me ovl, msg: '+msg);
}
myprint(1);
myprint("Hello");


// using function type
// let f:Function = function () {
//     return 'anony fn';
// };
let f:Function = ()=> "anony fn";
console.log(typeof f());


// Object types
let myObj: {
    first:string,
    second:number
};
myObj = {first:'Shiva', second:12};
console.log(myObj.first+' '+myObj.second);

