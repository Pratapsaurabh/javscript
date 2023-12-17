const accountId = 1234
let accountEmail = "sp@gmail.com"
var accountPass = "123"
accountCity = "Nagina"  // variable can be declared this way as well
let accountState; // will give undefined because value is not defined yet

// accountId = 2

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail,accountPass,accountState])