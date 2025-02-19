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

// function return type annotations

const square3 = (num: number): number => {
  return num * num;
};

function sqaure22(num: number): number {
  return num;
}

// annonymous functions - typescript can infer the type so there is no need to ad type annotations

const colors = ["Blue", "Red", "Green"];

colors.map((color) => {
  // Will not work because it is not of string type
  // return color.toFixed()
  return color.toLowerCase();
});

// Void Type
// Used to indicate a function has no return value

function print12(msg: string): void{
  console.log(msg)
}

// Using Never
// Examples would be function that throws exception or function that runs in an infinite loop.

function makeError(msg: string): never{
  // return will error
  throw new Error(msg)
  
}
