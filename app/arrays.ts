// This syntax only allows for empty array see correct syntax beloow.

const activeUsers: [] = [];
//Correct syntax
const users: string[] = [];
const numbersArray: number[] = [];

const addNumbers: number[] = [54, 98, 41, 65];

users.push("TOny");

numbersArray.push(...addNumbers);

console.log(users);
console.log(numbersArray);

// Alternate Syntax for Array

const NumberArray: Array<number> = [];

//Usig typed objects in array with custom type

type Point1 = {
  x: number;
  y: number;
};

const cords: Point1[] = []

cords.push({x:54,y:65})

// Nesting levels in arrays

const nestTriStringArray: string[][] = []

for (let index = 0; index < 3; index++) {
    nestTriStringArray.push([`564${index}`])
    
}


console.log(nestTriStringArray)


