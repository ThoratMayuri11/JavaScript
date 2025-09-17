const accountId = 112341
let accountEmail = "abc@gamil.com"
var accountPassword = "12321"
accountCity = "Shevgaon"

//accountId = 11   // not allowed

//console.log(accountId);
// Not allowed

accountEmail = "absc@gamil.com"
accountPassword = "23454322"
accountCity = "Pune"

console.table([accountId, accountEmail,accountPassword,accountCity])

// prefer not to use var
// because of issue in block scope and functional scope