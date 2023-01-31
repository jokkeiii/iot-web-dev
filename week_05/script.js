// comments same as c++
/*
  Like this

  alert('Alert from the external file')

*/


console.log('Log from External File!');

const myString = 'Hello';
console.log(typeof myString);

const myBooleanTrue = true;
const myBooleanFalse = false;
console.log(typeof myBooleanTrue, typeof myBooleanFalse);

let x = 10;
const y = 1.1;
console.log(typeof x, typeof y);

let a;
console.log(a);

const b = null;
console.log(b);

let person = {
  firstName: 'John',
  lastName: 'Wick'
};
console.log(typeof person);

let counter = 111;
console.log(typeof counter);

counter = false;
console.log(typeof counter);

const hello = 'Hello';
const world = 'World';
const helloWorld = hello + world;
console.log(hello + world + x);

const cheersWorld = helloWorld.replace('Hello', 'Cheers');
console.log(cheersWorld);

// replace
// slice
// substring
// toLowerCase
// toUpperCase


// Template Strings
const templateString = `This is a ${hello} ${world} 
application.`;
console.log(templateString);

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / 2);
console.log(x ** 2);
console.log(x % 3);

console.log(x+= 5);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);
console.log(++x);

console.log(10 == 10);
console.log(10 === '10');

console.log(10 != 11);

if (x > y) {
  console.log('x is bigger than y');
} else {
  console.log('y is bigger than x');
}

let myOtherString = '';

for (let index = 0; index < 10; index++) {
  myOtherString = myOtherString + ' ' + index;
}
console.log(myOtherString);

x = 0

while (true) {

  if (x == 10) {
    break;
  }
  console.log(x);
  x++;
}

function sayHello(name, friend) {
  console.log(`Hello ${name} and ${friend}!!!`);
}

sayHello('Jokke', 'Zucc');

function square(number) {
  return number**10;
}

console.log(square(1000));

const add = function(a, b) {
  return a + b;
}

function callback(fn, a, b) {
  return fn(a, b);
}

console.log(add(5, 10));
console.log(typeof add);
console.log(add(10, 10));

console.log(callback(add, 11, 11));

// "Normal" function
function sum1(a, b) {
  return a + b;
}

// Arrow function, long form
const sum2 =  (a, b) => {
  return a + b;
}

console.log(sum1(100, 200));
console.log(sum2(10, 11));

// Arrow function, one line
const sum3 = (a, b) => a + b;

console.log(sum3(10, 113));
