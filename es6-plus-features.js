// ES6+ Features Examples

// Template literals → easier string concatenation
const name = "Rakib";
const age = 20;
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Default parameters → fallback values when no argument is provided
function greet(user = "Guest") {
  return `Welcome, ${user}!`;
}
console.log(greet()); // Welcome, Guest!
console.log(greet("Rakib")); // Welcome, Rakib!

// Arrow functions (advanced usage)

// 1. Short syntax
const add = (a, b) => a + b;
console.log("add:", add(5, 3)); // 8

// 2. Returning objects directly
const createUser = (name, age) => ({ name, age });
console.log("createUser:", createUser("Rakib", 20));

// 3. Lexical `this` in arrow functions
const counter = {
  count: 0,
  increment: () => {
    // ⚠️ Arrow function does not have its own `this`
    // so here `this` will not work as expected
    this.count++;
  },
};
console.log("Arrow `this` issue:", counter.count); // 0 (not incremented)

// Correct usage with normal function
const counterFixed = {
  count: 0,
  increment() {
    this.count++;
  },
};
counterFixed.increment();
console.log("Fixed counter:", counterFixed.count); // 1

// Modules (import/export)
// ---- utils.js ----
// export function sayHello(name) {
//   return `Hello, ${name}!`;
// }

// ---- main.js ----
// import { sayHello } from './utils.js';
// console.log(sayHello("Rakib"));
