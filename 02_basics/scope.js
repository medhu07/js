let a =10;
const b=20

//console.log(a)

if (true){
    let d=10;
    const e=20;
    var f=30 
}
// console.log(d,e,f) error since out of scope , variables valid only till curly braces 

if(true){
    let a =300
    console.log("inner a=",a)//block scope
}
console.log(a)//global scope
// jab tak curly braces ayenge tab new scope aajayega 