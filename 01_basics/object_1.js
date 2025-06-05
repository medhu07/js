//object literal
// carefully see syntax to describe an object in js 

const Jsuser={
    name:"Medhansh",
    "full name":"Medhansh Mathur",
    age :18,
    location:"delhi",
    email:"medhansh@gmail.com",
    isLoggedIn:false



}
// use . to access elements of the object 
console.log(Jsuser.email)
Jsuser.email="medhuu@gmail.com"
console.log(Jsuser.email)

console.log(Jsuser["full name"])
//to access string datatype we have to use square bracket 
//square bracket method is another way of accessing elements in object




//Object.freeze(Jsuser)
//Jsuser is freezed hence we cant change values now 

Jsuser.greeting= function(){
    console.log("Hello JS USER");
}

console.log(Jsuser.greeting()) 