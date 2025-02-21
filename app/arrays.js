// This syntax only allows for empty array see correct syntax beloow.
var activeUsers = [];
//Correct syntax
var users = [];
var numbersArray = [];
var addNumbers = [54, 98, 41, 65];
users.push("TOny");
numbersArray.push.apply(numbersArray, addNumbers);
console.log(users);
console.log(numbersArray);
// Alternate Syntax for Array
var NumberArray = [];
var cords = [];
cords.push({ x: 54, y: 65 });
// Nesting levels in arrays
var nestTriStringArray = [];
for (var index = 0; index < 3; index++) {
    nestTriStringArray.push(["564".concat(index)]);
}
console.log(nestTriStringArray);
