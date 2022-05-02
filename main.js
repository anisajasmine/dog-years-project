// Defining my (human) age
var myAge = 25;

// First early years
var earlyYears = 2;
earlyYears *= 10.5;

// Remainder of human age
var laterYears = myAge - 2;
laterYears *= 4;

// Total dog years age
var myAgeInDogYears = earlyYears + laterYears;

// My name
var myName = "Jasmine".toLowerCase();

// Logging results
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
