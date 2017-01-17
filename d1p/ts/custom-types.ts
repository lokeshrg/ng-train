/**
 * Created by abridge on 1/17/2017.
 */
class AhamBramhasmi{
// in corresponding JS, IIFE with a constructor is created
    payru:string;
    varasa:number = 0;
    constructor(){
        this.payru= 'Aum';
        this.varasa = this.varasa+1;
    }
}

let abObj:AhamBramhasmi = new AhamBramhasmi();
console.log(abObj.varasa);
let ab2Obj:AhamBramhasmi = new AhamBramhasmi();
console.log(ab2Obj.varasa);