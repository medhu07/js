const newuser=new Object()//singleton object
newuser.id="123abc"
newuser.name="medhuu"
newuser.isloggedIn=false
//console.log(user)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"choudary"

        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname)
const obj1={
    1:"a",
    2:"b"
}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)

//console.log(obj3)

const users=[
    {
        id:1,
        email:"medhuu@gmail.com"
    },
    {
        id:1,
        email:"medhuu@gmail.com"
    },
     {   id:1,
        email:"medhuu@gmail.com"
    },
     {   id:1,
        email:"medhuu@gmail.com"
    },
    {   
    id:1,
        email:"medhuu@gmail.com"
    }


]
//console.log(users[2].email)
console.log(Object.keys(newuser)) //ways to extract all keys of object
console.log(Object.values(newuser)) //ways to extract all values of object

