"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Player_score;
// javascript classes mini project
console.log("its working");
console.log("new");
//Everytime an object in instantiated a constructer is called. Ussually acceptig arguments to add properties to object class
class Player {
    constructor(name, last) {
        //# indicates a private attribute and is only accesible from within the object
        _Player_score.set(this, 0);
        this.numlives = 10;
        this.middle = "jack";
        this.name = name;
        this.last = last;
        this.sex = "Male";
    }
    get fullName() {
        return `${this.name} ${this.last}`;
    }
    get score() {
        return __classPrivateFieldGet(this, _Player_score, "f");
    }
    set score(score) {
        if (score < 0) {
            throw console.error("Score cannot be less then 0");
        }
        __classPrivateFieldSet(this, _Player_score, score, "f");
    }
    taunt() {
        console.log("I taunted you pussy");
    }
}
_Player_score = new WeakMap();
//using static method is ideal for using property when the object does not need to be instantiated
Player.description = "Player in the game";
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
    constructor(powers) {
        super("bob", "mc");
        this.isAdmin = true;
        this.powers = [];
        this.powers = powers;
    }
}
const admin = new AdminPlayer(["billing", "modify"]);
// shorthand
class Dog {
    constructor(bread, name, age) {
        this.bread = bread;
        this.name = name;
        this.age = age;
    }
}
class Bike {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
}
const bike1 = new Bike("red", "huffy");
// Abstract Classes
// Abstract Classes are used to define a method that is implemented by an child class
class Cat {
    constructor(name) {
        this.name = name;
    }
}
class purringCar extends Cat {
    getCatHair() {
        return "purr";
    }
}
