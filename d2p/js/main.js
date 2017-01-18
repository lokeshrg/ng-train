/**
 * Created by abridge on 1/18/2017.
 */
"use strict";
var module_eg_1 = require("./module-eg");
console.log("Day 2 Main JS");
var oc = new module_eg_1.Chukka(1, 7);
var rc = new module_eg_1.Chukka(3, 3);
var kc = oc.addChukka(rc);
console.log(kc);
var oc3 = new module_eg_1.Chukka3D(1, 7, 5);
var rc3 = new module_eg_1.Chukka3D(3, 3, -2);
var kc3 = oc3.addChukka(rc3);
console.log(kc3);
//# sourceMappingURL=main.js.map