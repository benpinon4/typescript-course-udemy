// Type Annotations
let myString: string = "hello";

console.log(myString);

// boolean

let myBoo: boolean = true;

myBoo = false;

const funct1 = () => {
  let number1: number = 1;
};
// Annotating any will allow for variable to any type
let string: any = 1;

string = false;

string();


const movies = ["Arrival", "Movie 1", "Movie 2" ]

let foundMovie;

for (const movie of movies){
    if(movie === "Movie 1"){
        foundMovie = movie
    }
}