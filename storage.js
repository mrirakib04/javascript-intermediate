// Local Storage & Session Storage Examples

// Local Storage
// Save data
localStorage.setItem("username", "Rakib");

// Get data
const user = localStorage.getItem("username");
console.log("LocalStorage username:", user);

// Remove item
localStorage.removeItem("username");

// Clear all local storage
// localStorage.clear();

// Session Storage
// Save data
sessionStorage.setItem("theme", "dark");

// Get data
const theme = sessionStorage.getItem("theme");
console.log("SessionStorage theme:", theme);

// Remove item
sessionStorage.removeItem("theme");

// Clear all session storage
// sessionStorage.clear();
