/**
 * Created by abridge on 1/17/2017.
 */
console.log('Main JS');


class Chukka{
    constructor(private addam:number, private niluvu:number){}
    //methods to add two points/chukkalu
    addChukka(ck:Chukka):Chukka{
        return new Chukka(this.addam+ck.addam, this.niluvu+ck.niluvu);
    }
    getAddam():number{return this.addam};
    getNiluvu():number{return this.niluvu};
}

let oc:Chukka = new Chukka(1,7);
let rc:Chukka = new Chukka(3,3);
let kc:Chukka = oc.addChukka(rc);
console.log(kc);

class Chukka3D extends Chukka{
    constructor( addam:number, niluvu:number, private mandam:number){
        super(addam,niluvu);
    }
    //override method
    addChukka(ck: Chukka3D): Chukka3D {
        return new Chukka3D(ck.getAddam(), ck.getNiluvu(), this.mandam+ck.mandam);
    }

    getMandam(): number {
        return this.mandam;
    }
};

let oc3:Chukka3D = new Chukka3D(1,7,5);
let rc3:Chukka3D = new Chukka3D(3,3,-2);
let kc3:Chukka3D = oc3.addChukka(rc3);
console.log(kc3);
