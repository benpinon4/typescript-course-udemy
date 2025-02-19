var twoFer = function (person) {
    if (person === void 0) { person = "you"; }
    return "One for ".concat(person, ", one for me");
};
console.log(twoFer("Bobby"));
console.log(twoFer());
function leapYear(year) {
    var isLeapYear = false;
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
        isLeapYear = true;
    }
    else {
        isLeapYear = false;
    }
    return isLeapYear;
}
console.log(leapYear(2003));
