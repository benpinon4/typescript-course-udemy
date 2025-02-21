//Union types give the value multiple posible type valeuis

let numberOrString: string | number = 0;

numberOrString = "asdas";
numberOrString = 3561;

// Unions with Object types

type Point3 = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

const locationPoint: Point3 | Loc = { lat: 1, long: 41 };
const locationPoint2: Point3 | Loc = { x: 1, y: 41 };

// Union type with funciton

function printAge(age: number | string) {
  console.log(age);
}

// Below this function is type narrowing. The if statement is checking to see if price is a spring or number and then converting to number because typescript knows there as math equation at the bottom of the function
const calculateTax = (price: number | string, tax: number) => {
  if (typeof price === "string") {
    parseFloat(price);
  } else return price * tax;
};

// Union types and Array Types
const nums: number[] = [1, 2, 3];
const string: string[] = ["as", "asd"];
const stuff: any[] = [1, 2, 3, "541as", true, { x: 1 }];

// Union and Array
const stuffWithUnion: (string | number)[] = [561,"5631asd"]

// Union types with Type Objects
const coords: (Point3 | Loc)[]=[]
coords.push({lat:65314,long:5614})
coords.push({x:5614,y:14563})

// literal Types -
let zero: 0 = 0;


let mood: "happy" | "sad" = "happy"

mood = "sad"

