/**
 * Created by abridge on 1/17/2017.
 */
var greet = function (x) { return alert("Hello " + x); };
var calcAge = function (x) {
    var a;
    // a='I Fail to compile';
    a = 29;
    alert("Your age is : " + a);
};
/**? is used for optional parameters */
var fn1 = function (a, b, c) {
    if (c === void 0) { c = 2; }
    console.log('hi from fn data type');
    if (b !== undefined) {
        a = a + b;
    }
    return 2 + a + c;
};
console.log(fn1(5) + 7);
// console.log(a);
//Rest parameters - like var args
var getSumVar = function () {
    var numb = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numb[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < numb.length; i++) {
        sum += numb[i];
    }
    return sum;
};
console.log(getSumVar(12, 34, 78));
// arrow types always use anony fns - while method over loading anony fn cant be used to provide defn
function myprint(msg) {
    console.log('hi me ovl, msg: ' + msg);
}
myprint(1);
myprint("Hello");
// using function type
// let f:Function = function () {
//     return 'anony fn';
// };
var f = function () { return "anony fn"; };
console.log(typeof f());
// Object types
var myObj;
myObj = { first: 'Shiva', second: 12 };
console.log(myObj.first + ' ' + myObj.second);
//# sourceMappingURL=ex2.js.map