var highScore;
var stuff2;
var skillLevel;
var colors;
var greetPersons = function (persons) {
    if (typeof persons === "string") {
        console.log("Hello ".concat(persons));
    }
    else {
        for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
            var element = persons_1[_i];
            console.log("Hello ".concat(element));
        }
    }
};
greetPersons("Bobby McGee");
greetPersons(["Gerald Ford", "Anderson Cooper", "Roger Clemens"]);
