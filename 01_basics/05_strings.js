//const name = "Sharmad";
//const age = 23;

// string interpolation

// console.log(`I am ${name} and my age is ${age}`);

// string methods

const gameName = new String("Sharmad");

// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(2,4);
console.log(newString);

const anotherString = gameName.slice(-3, 8);
console.log(anotherString);

const splitString = gameName.split('r');
console.log(splitString)