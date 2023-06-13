function logThis() {
  console.log(this);
}

const obj1 = { number: 1 };
const obj2 = { number: 2 };

logThis.call(obj1); // Logs obj1
logThis.call(obj2); // Logs obj2

const boundLogThis = logThis.bind(obj1);
boundLogThis(); // Logs obj1

function greet() {
  return `Hello, I am ${this.name}`;
}

let person1 = { name: 'Alice' };
let person2 = { name: 'Bob' };

// Create a bound function with "this" set to person1
let greetPerson1 = greet.bind(person1);

console.log(greetPerson1()); // Hello, I am Alice

// Attempt to change the context by using the call method; however, it still uses person1 as 'this' context
console.log(greetPerson1.call(person2)); // Hello, I am Alice

//  In contrast, a normal function call allows the 'this' context to be set by the call method
console.log(greet.call(person2)); // Hello, I am Bob