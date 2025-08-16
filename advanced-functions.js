// Higher-order function example
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplyBy(2);
console.log(double(5)); // 10

// Callback function example
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data loaded!");
  }, 1000);
}
fetchData((message) => console.log(message));

// Closure example
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2

// IIFE (Immediately Invoked Function Expression) example
(function () {
  console.log("IIFE executed immediately!");
})();
