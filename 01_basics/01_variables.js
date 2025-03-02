const accId = 123
let accEmail = "abc@gmail.com"
var accPass = "12345"
accCity = "pune"

// accId = 3 // Not allowed - cannot re-initialize a const
accEmail = "abc@sharmad.com"
accPass = "223344"
accCity = "pTown"

console.log(accId);

console.table([accId, accEmail, accPass, accCity]);