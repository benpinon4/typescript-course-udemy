let highScore: number | boolean;

let stuff2: string[] | number[];

let skillLevel: "Beginner" | "Intermediate" | "Advanced" | "Expert" ;

type RGB = {
    r: number;
    g: number;
    b: number;
}

type HSL = {
    h: number;
    s: number;
    l: number;
}

let colors: (RGB | HSL)[];

const greetPersons = (persons: string | string[]) => {
    if(typeof persons === "string"){
        console.log(`Hello ${persons}`)
    } else {
        for (const element of persons) {

            console.log(`Hello ${element}`)
        }
    }
}

greetPersons("Bobby McGee")
greetPersons(["Gerald Ford", "Anderson Cooper", "Roger Clemens"])