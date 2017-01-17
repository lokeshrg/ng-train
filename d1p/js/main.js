var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by abridge on 1/17/2017.
 */
console.log('Main JS');
var Chukka = (function () {
    function Chukka(addam, niluvu) {
        this.addam = addam;
        this.niluvu = niluvu;
    }
    //methods to add two points/chukkalu
    Chukka.prototype.addChukka = function (ck) {
        return new Chukka(this.addam + ck.addam, this.niluvu + ck.niluvu);
    };
    Chukka.prototype.getAddam = function () { return this.addam; };
    ;
    Chukka.prototype.getNiluvu = function () { return this.niluvu; };
    ;
    return Chukka;
}());
var oc = new Chukka(1, 7);
var rc = new Chukka(3, 3);
var kc = oc.addChukka(rc);
console.log(kc);
var Chukka3D = (function (_super) {
    __extends(Chukka3D, _super);
    function Chukka3D(addam, niluvu, mandam) {
        var _this = _super.call(this, addam, niluvu) || this;
        _this.mandam = mandam;
        return _this;
    }
    //override method
    Chukka3D.prototype.addChukka = function (ck) {
        return new Chukka3D(ck.getAddam(), ck.getNiluvu(), this.mandam + ck.mandam);
    };
    Chukka3D.prototype.getMandam = function () {
        return this.mandam;
    };
    return Chukka3D;
}(Chukka));
;
var oc3 = new Chukka3D(1, 7, 5);
var rc3 = new Chukka3D(3, 3, -2);
var kc3 = oc3.addChukka(rc3);
console.log(kc3);
//# sourceMappingURL=main.js.map