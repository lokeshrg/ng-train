/**
 * Created by abridge on 1/17/2017.
 */
var varasa = 0;
var AhamBramhasmi = (function () {
    function AhamBramhasmi(maroti) {
        this.maroti = maroti;
        this.payru = 'Aum';
        this.varasa = varasa++;
    }
    AhamBramhasmi.prototype.getMaroti = function () {
        return this.maroti;
    };
    return AhamBramhasmi;
}());
var abObj = new AhamBramhasmi('ABH1');
console.log(abObj.getMaroti() + " : " + abObj.varasa);
var ab2Obj = new AhamBramhasmi('ABH2');
console.log(ab2Obj.getMaroti() + " : " + ab2Obj.varasa);
//
// interface OkaSumukham{
//     sample:string;
// } 
//# sourceMappingURL=custom-types.js.map