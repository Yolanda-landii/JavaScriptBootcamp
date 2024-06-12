// Exercise 1 : Numbers
const num1 = 10;
const num2 = 2.2;
const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2;
const exponentiation = Math.pow(num1, num2);

console.log("num1 : " + num1);
console.log("num2 : " + num2);
console.log("addition : " + addition);
console.log("subtraction : " + subtraction);
console.log("multiplication : " + multiplication);
console.log("division : " + division);
console.log("modulus : " + modulus);
console.log("exponentiation : " + exponentiation);

// Exercise 2 : Boolean and Operators
const numb1 = 8;
const numb2 = 7;
const equalTo = numb1 == numb2;
const equalValueAndEqualType = numb1 === 8;
const notEqual = numb1 != numb2;
const notEqualValueOrNotEqualType = numb1 !== numb2;
const greaterThan = numb1 > numb2;
const lessThan = numb1 < numb2;
const greaterOrEqualTo = numb1 >= numb2;
const lessOrEqualTo = numb1 <= numb2;

const x = 8;
const y = 12;

console.log(x > y);
console.log(x <= y);
console.log(x == y);
console.log(x != y);

const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

let p = 10;

console.log((p += 5));
console.log((p -= 7));
console.log((p *= 2));
console.log((p /= 2));
console.log((p %= 3));
