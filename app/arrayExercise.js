var ages = [];
var gameboard = [];
var getTotal = function () {
    var count = 0;
    var newProdArray = [];
    while (count < 10) {
        count++;
        newProdArray.push({ name: "Product ".concat(count), price: Math.random() * 10 });
    }
    console.log(newProdArray);
    var sum = 0;
    for (var index = 0; index < newProdArray.length; index++) {
        sum = newProdArray[index].price + sum;
    }
    return sum;
};
console.log(getTotal());
