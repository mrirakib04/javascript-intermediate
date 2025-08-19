// Object Advanced Examples

const person = {
  name: "Rakib",
  age: 20,
  country: "Bangladesh",
  address: {
    city: "Dhaka",
    zip: 1205,
  },
};

// Object Destructuring → extract values from object
const { name, age } = person;
console.log("Destructuring:", name, age); // Rakib 20

// Destructuring with nested object
const { city } = person.address;
console.log("Nested Destructuring:", city); // Dhaka

// Spread operator → copy or merge objects
const updatedPerson = { ...person, age: 21 };
console.log("Spread:", updatedPerson);

// Rest operator → collect remaining properties
const { country, ...others } = person;
console.log("Rest:", country, others);

// Object.keys() → array of keys
console.log("keys:", Object.keys(person));

// Object.values() → array of values
console.log("values:", Object.values(person));

// Object.entries() → array of [key, value] pairs
console.log("entries:", Object.entries(person));

// Optional chaining → safely access nested properties
console.log("Optional chaining:", person.address?.city); // Dhaka
console.log("Optional chaining (non-existing):", person.job?.title); // undefined
