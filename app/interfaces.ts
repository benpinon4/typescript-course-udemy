// Interfaces are very similar to type annotations

interface Person {
  name: string;
  age: number;
}

const bob: Person = { name: "Bob", age: 55 };

// Optional Properties with Interaces
interface Person2 {
  name: string;
  age: number;
  sign?: string;
}

const tim: Person2 = { name: "Tim", age: 55 };

// Adding methods to Interface

interface Person3 {
  readonly id: number;
  method1: () => string;
  applyDiscount(discount: number): number;
}

const Per: Person3 = {
  id: 56134,
  method1: () => {
    return "string"
  },
  applyDiscount(){
    return 5
  }
};

// reopening Interfaces

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    bread: string;
    bark(rough: string): string;
}

const dog1: Dog = {
    bread: "shnowzer",
    bark() {
        return "rough"
    },
    name: "Snugs",
    age: 56,
}

// Extending Interface also multipe interfaces can be extended to another inferface

interface ServiceDog extends Dog {
    job: "drug" | "bomb" | "guide";
}

const chewy: ServiceDog = {
    bread: "Shepard",
    bark(rough) {
        return rough
    },
    name: "chewy",
    age: 55,
    job: "bomb",

}

// Interfaces and Type Aliases
// Key differences in Interaces and Type Aliases
// Interfaces can only describe the shape of an object
// Type can describe any data types
// Interfaces can reopen and add on. Cannot do this why type aliases.
// Interfaces use extend syntax and type aliases uses ampersand &.



