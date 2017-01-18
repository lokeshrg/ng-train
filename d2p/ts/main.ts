/**
 * Created by abridge on 1/18/2017.
 */

import {Chukka, Chukka3D} from "./module-eg"

console.log("Day 2 Main JS");


let oc:Chukka = new Chukka(1,7);
let rc:Chukka = new Chukka(3,3);
let kc:Chukka = oc.addChukka(rc);
console.log(kc);


let oc3:Chukka3D = new Chukka3D(1,7,5);
let rc3:Chukka3D = new Chukka3D(3,3,-2);
let kc3:Chukka3D = oc3.addChukka(rc3);
console.log(kc3);