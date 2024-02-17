"use strict";
// Q16. more guests: you just found a bigger dinner table, so now more space is available. think of three more guests to invite to dinner.
// . start with your program from exercise 15. add a print statment to the end of your bigger dinner table.
// . add one new guest to the beginning of your array.
// .add one new guest to the middlw of your array.
// .use append() to add one new guest to the end of your list.
// .print a new set of inviation messages, one for each person in your list.
let guestArr = ["Junaid Hafeez", "Nida Rizwan", "Ahsen", "Ducky"];
let canNotAttend = "Junaid Hafeez";
let newGuest = "Aroob";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//  ab beginning me humein newguest add krna hai
let guestBegin = "Asna";
guestArr.unshift(guestBegin);
console.log(guestArr);
// ab ek new name middle me add krna hai
// or ek or method use kryngy splice ka wo isliye use krty hai kun k middle me koi chez add krwani ho to ye method use krty hai.
let middleguest = "Faizan";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleguest);
console.log(guestArr);
// ab ek or new guest ko add krwayngy list k end me .push k method sy
guestArr.push("hamza");
console.log(guestArr);
// #ab hum ek message type kryngy jo sb k sat show hogi jesa k question me kaha gya hai or yahan per question complete hojayga.
guestArr.map((item) => (console.log(`Dear ${item}, you are cordinally invited to the dinner`)));
