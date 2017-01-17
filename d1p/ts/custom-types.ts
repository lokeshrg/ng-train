/**
 * Created by abridge on 1/17/2017.
 */

var varasa:number = 0;
class AhamBramhasmi{
// in corresponding JS, IIFE with a constructor is created
    payru:string;
    varasa:number;
    constructor(private maroti:string){
        this.payru= 'Aum';
        this.varasa = varasa++;
    }
    getMaroti():string {
        return this.maroti;
    }
}

let abObj:AhamBramhasmi = new AhamBramhasmi('ABH1');
console.log(abObj.getMaroti() + " : " + abObj.varasa);
let ab2Obj:AhamBramhasmi = new AhamBramhasmi('ABH2');
console.log(ab2Obj.getMaroti() + " : " + ab2Obj.varasa);
//
// interface OkaSumukham{
//     sample:string;
// }