/**
 * Created by abridge on 1/18/2017.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Chukka = (function () {
    function Chukka(addam, niluvu) {
        this.addam = addam;
        this.niluvu = niluvu;
    }
    //methods to add two points/chukkalu
    Chukka.prototype.addChukka = function (ck) {
        return new Chukka(this.addam + ck.getAddam(), this.niluvu + ck.getNiluvu());
    };
    Chukka.prototype.getAddam = function () { return this.addam; };
    ;
    Chukka.prototype.getNiluvu = function () { return this.niluvu; };
    ;
    return Chukka;
}());
exports.Chukka = Chukka;
var Chukka3D = (function (_super) {
    __extends(Chukka3D, _super);
    function Chukka3D(addam, niluvu, mandam) {
        var _this = _super.call(this, addam, niluvu) || this;
        _this.mandam = mandam;
        return _this;
    }
    //override method
    Chukka3D.prototype.addChukka = function (ck) {
        var ck1D = new Chukka(this.getAddam() + ck.getAddam(), this.getNiluvu() + ck.getNiluvu());
        return new Chukka3D(ck1D.getAddam(), ck1D.getNiluvu(), this.mandam + ck.mandam);
    };
    Chukka3D.prototype.getMandam = function () {
        return this.mandam;
    };
    return Chukka3D;
}(Chukka));
exports.Chukka3D = Chukka3D;
;
//# sourceMappingURL=module-eg.js.map