const twoFer = (person: string = "you"): string => {
  return `One for ${person}, one for me`;
};

console.log(twoFer("Bobby"));

console.log(twoFer());

function leapYear(year: number): boolean {
  let isLeapYear: boolean = false;
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }
  return isLeapYear;
}

console.log(leapYear(2003));
