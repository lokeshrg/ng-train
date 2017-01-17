var a="Helio";
console.log(a+b);

for (let i=1; i<3; i++){
    console.log(i);
}

// console.log(i);
const tryReDefiningMe = 'Seetayya';
console.log(tryReDefiningMe);
// tryReDefiningMe='S serious';

//Arrow function
let m1=function () {
    return "fn m1";
}
console.log(m1());

let m2= ()=>"fn m2";
console.log(m2());

let m3= (msg)=>"fn m3, msg:"+msg;
console.log(m3('hi'));

function temp(m4){
    console.log( m4('test'));
}
temp(()=>"anonym to arrow");
// temp((x)=>{
//     console.log(x);
//     console.log("the inner arg: "+x);
// })