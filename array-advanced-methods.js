// Array Advanced Methods Examples
const numbers = [1, 2, 3, 4, 5];

// map() → creates a new array by transforming each element
const doubled = numbers.map((num) => num * 2);
console.log("map:", doubled); // [2, 4, 6, 8, 10]

// filter() → creates a new array with elements that pass the condition
const evens = numbers.filter((num) => num % 2 === 0);
console.log("filter:", evens); // [2, 4]

// reduce() → reduces the array to a single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce:", sum); // 15

// forEach() → runs a function on each element (does not return a new array)
console.log("forEach:");
numbers.forEach((num) => console.log(num * num)); // 1, 4, 9, 16, 25

// find() → returns the first element that matches the condition
const firstEven = numbers.find((num) => num % 2 === 0);
console.log("find:", firstEven); // 2

// findIndex() → returns the index of the first element that matches the condition
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log("findIndex:", firstEvenIndex); // 1

// some() → returns true if at least one element matches the condition
const hasNegative = numbers.some((num) => num < 0);
console.log("some:", hasNegative); // false

// every() → returns true if all elements match the condition
const allPositive = numbers.every((num) => num > 0);
console.log("every:", allPositive); // true
