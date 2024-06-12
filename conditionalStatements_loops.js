// Exercise 1 : Temperature check
const temperature = 170;

if (temperature < 0) {
  console.log("It's freezing!");
} else {
  if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
  } else {
    if (temperature >= 16 && temperature <= 25) {
      console.log("It's mild.");
    } else {
      console.log("It's warm.");
    }
  }
}

switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature >= 0 && temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature >= 16 && temperature <= 25:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
    break;
}

// Exercise 2 : Divisibility Check
const num = 17;

if (num % 2 == 0 && num % 3 == 0) {
  console.log("Divisible by both.");
} else {
  if (num % 2 == 0) {
    console.log("Divisible by 2.");
  } else {
    if (num % 3 == 0) {
      console.log("Divisible by 3.");
    } else {
      console.log("Not divisible by 2 or 3.");
    }
  }
}

switch (true) {
  case num % 2 == 0 && num % 3 == 0:
    console.log("Divisible by both.");
    break;
  case num % 2 == 0:
    console.log("Divisible by 2.");
    break;
  case num % 3 == 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
    break;
}

// Exercise 3 : For loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const numbers2 = [3, 7, 2, 5, 10, 6];
current = numbers2[0];
for (let i = 0; i < numbers2.length; i++) {
  if (current < numbers2[i]) {
    current = numbers2[i];
  }
}
console.log(current);

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let j = 2;
while (j <= 20) {
  console.log(j);
  j += 2;
}

let sum2 = 0;
let k = 1;
while (k <= 100) {
  sum2 += k;
  k++;
}
console.log(sum2);

let m = 1;
let multiple = 5;
while (multiple < 50) {
  console.log(multiple);
  m++;
  multiple = m * 5;
}

// Exercise 5 : Do While loops
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 10);

let sum3 = 0;
let h = 1;
do {
  sum3 += h;
  h++;
} while (h <= 100);

console.log(sum3);

const prompt = require("prompt-sync")();
let val = 0;
do {
  const input = prompt("Enter number greater than 10\n");
  val = parseInt(input);
} while (val <= 10);

let inputNum = 100;
const luckyNum = 7;
do {
  const input = prompt("Enter number between 1 and 10\n");
  inputNum = parseInt(input);
} while (luckyNum != inputNum);
