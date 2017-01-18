/**
 * Created by abridge on 1/18/2017.
 */

export class Chukka{
    constructor(private addam:number, private niluvu:number){}
    //methods to add two points/chukkalu
    addChukka(ck:Chukka):Chukka{
        return new Chukka(this.addam+ck.getAddam(), this.niluvu+ck.getNiluvu());
    }
    getAddam():number{return this.addam};
    getNiluvu():number{return this.niluvu};
}


export class Chukka3D extends Chukka{
    constructor( addam:number, niluvu:number, private mandam:number){
        super(addam,niluvu);
    }
    //override method
    addChukka(ck: Chukka3D): Chukka3D {
        let ck1D = new Chukka(this.getAddam()+ck.getAddam(), this.getNiluvu()+ck.getNiluvu());
        return new Chukka3D(ck1D.getAddam(), ck1D.getNiluvu(), this.mandam+ck.mandam);
    }

    getMandam(): number {
        return this.mandam;
    }
};