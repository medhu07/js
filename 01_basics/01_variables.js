const accountId = 144333 
let accountEmail="medhanshm7@gmail.com"
var accountPassword = "12345"
accountCity="Delhi"

// accountId=2; not allowed to change constant variable
console.log(accountId);
accountEmail="djada@gmail.com"
accountPassword="12333"

console.log(accountEmail)
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])
