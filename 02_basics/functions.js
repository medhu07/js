function addNummber(number1,number2){
    number1=Number(number1)
    number2=Number(number2)
    console.log(number1 + number2)
    return number1+number2
}

let vr=addNummber(3,"4")
console.log(vr)

function Login(username){
    if(username==undefined){
        console.log("pls enter a username")
        return
    }
    return  `${username} just logged in`   //using backtickr string manipulation


}
console.log(Login("Medhansh"))