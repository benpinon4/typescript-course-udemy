// the importance of type annotations and fucntion parameters
// Dont do this
function sqaured(num) {
  return num * num;
}

sqaured(3);
sqaured(true);
sqaured("word");
// Do this
function sqaured2(num: number) {
  return num * num;
}

sqaured2(3);
// sqaured2(true);
// sqaured2("word");

function greet(person: string) {
  // this will not work
  // person * person

  return `hi there, ${person}`;
}
// Must include the correct arg types and number of arg or typescript will notify of error
const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("asd", 5, true);

// Setting default parameter values - value must be decalered after type annotation and equal sign.
function function1(person: string = "bobby") {
  return `I am ${person}`;
}

function1();
