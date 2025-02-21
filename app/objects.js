// Objects are the same as JS
// Typesript can describe the shape of the object
function printName(person) {
    console.log("This is ".concat(person.firstName, " ").concat(person.lastName));
}
printName({ firstName: "Bobby", lastName: "Mcgee" });
