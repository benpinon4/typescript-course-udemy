// Objects are the same as JS
// Typesript can describe the shape of the object

function printName(person: { firstName: string; lastName: string }) {
  console.log(`This is ${person.firstName} ${person.lastName}`);
}

printName({ firstName: "Bobby", lastName: "Mcgee" });

//
let coordinate: { x: number; y: number } = { x: 44, y: 55 };

function returnAcountSet(): { x: number } {
  return { x: 4 };
}
// TS will not allow extra args into function but will allow if you pass it in as variaBLE
// printName({ firstName: "mick", lastName: "Jager", age: 984 });

const singer = { firstName: "mick", lastName: "Jager", age: 984 };

printName(singer);

// Type alias can be used to exclusively define an object type

type Point = {
  x: number;
  y: number;
};

function returnPoint(location: Point): Point {
  return location;
}

// Nested objects with type

type Movie = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

const myMovie: Movie = {
  title: "asdas",
  artist: "asdsda",
  numStreams: 5615631,
  credits: {
    producer: "asd",
    writer: "asd",
  },
};

// Optional Properties in an Object - z is optional and typescript will not error if the property is not used when a object of that type is created.
type AnotherPoint = {
  x: number;
  y: number;
  z?: number;
};

// Ready Only for Object projects

type User = {
  readonly id: number;
  username: string;
};

const userCredentials: User = {
  id: 6516531,
  username: "asdas",
};

// Intersection Type - the syntax is one ampersand &
type Bread = {
  typeBread: string;
};

type Meat = {
  typeMeet: string;
};

type Cheese = {
  typeCheese: string;
};
type Sandwich = Bread & Meat & Cheese;

const hamAndCheeseSandwich: Sandwich = {
  typeBread: "White",
  typeMeet: "Ham",
  typeCheese: "American",
};


