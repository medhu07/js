const user={
    username:"medhansh",
    price:999,
    welcomemsg:function(){
        console.log(`${this.username},welcome to website`)
    }

}
user.welcomemsg()
user.username="MEDHUU"
user.welcomemsg()


//arrow function just simply use arrow


//1
const newf= () =>{
        username:"Medhansh"
        console.log("welcome")
}
newf()


//2
const AddTwo  =(num1,num2) =>{
    return num1+num2

}
const a=AddTwo(3,4)
console.log(a)


//3
const addthree= (num1,num2,num3)=> num1 + num2 + num3
console.log(addthree(3,2,1))


//when we use {} we have to use return keyword , when we dont use {} we can skip return keyword
