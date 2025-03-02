const accId = 123
let accEmail = "abc@gmail.com"
var accPass = "12345"
accCity = "pune"
let accState;

// accId = 3 // Not allowed - cannot re-initialize a const
accEmail = "abc@sharmad.com"
accPass = "223344"
accCity = "pTown"

console.log(accId);

// var causes block scope issue and functional scope issue, so don't use VAR

console.table([accId, accEmail, accPass, accCity, accState]);