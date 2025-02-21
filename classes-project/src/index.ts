// javascript classes mini project
console.log("its working");
console.log("new");
//Everytime an object in instantiated a constructer is called. Ussually acceptig arguments to add properties to object class

class Player {
  //# indicates a private attribute and is only accesible from within the object
  #score: number = 0;
  //using static method is ideal for using property when the object does not need to be instantiated
  static description: string = "Player in the game";
  numlives: number = 10;
  name: string;
  last: string;
  // Public and private
  // by default everything all properties in an object is considered public
  public sex: string;
  private middle: string = "jack";

  constructor(name: string, last: string) {
    this.name = name;
    this.last = last;
    this.sex = "Male";
  }

  get fullName() {
    return `${this.name} ${this.last}`;
  }
  get score() {
    return this.#score;
  }

  set score(score) {
    if (score < 0) {
      throw console.error("Score cannot be less then 0");
    }
    this.#score = score;
  }

  taunt() {
    console.log("I taunted you pussy");
  }
}

const player1 = new Player("Bob", "Nod");

const player2 = new Player("Bob", "Nod");

player1.taunt();

player2.taunt();

console.log(player1);
console.log(player1.fullName);
// with getter you are able to acces private attributes/properties
console.log(player1.score);
player1.score = 10;
console.log(player1.score);

// extending classes

class AdminPlayer extends Player {
  isAdmin: boolean = true;
  powers: string[] = [];
  constructor(powers: string[]) {
    super("bob", "mc");
    this.powers = powers;
  }
}
const admin = new AdminPlayer(["billing", "modify"]);

// shorthand
class Dog {
  constructor(public bread: string, public name: string, public age: number) {}
}

// Protected properties can be used subclasses that extend the parent class.

// Interfaces and Classes

interface Colorful {
  color: string;
}

class Bike implements Colorful {
  constructor(public color: string, public brand: string) {}
}
const bike1 = new Bike("red", "huffy");

// Abstract Classes
// Abstract Classes are used to define a method that is implemented by an child class
abstract class Cat {
  constructor(public name: string) {}
//getPay() must exist in any class that implements Cat
  abstract getCatHair(): string;
}

class purringCar extends Cat {
    getCatHair(): string {
        return "purr"
    }

    
}
