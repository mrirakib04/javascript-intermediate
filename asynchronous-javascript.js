// Asynchronous JavaScript Examples

// 1. Callback example
function fetchDataWithCallback(callback) {
  console.log("Fetching data (callback)...");
  setTimeout(() => {
    callback("Data loaded using callback");
  }, 1000);
}

fetchDataWithCallback((message) => {
  console.log(message);
});

// 2. Promise example
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data (promise)...");
    setTimeout(() => {
      resolve("Data loaded using promise");
      // reject("Something went wrong"); // to test error handling
    }, 1000);
  });
}

fetchDataWithPromise()
  .then((message) => console.log(message))
  .catch((error) => console.log("Error:", error));

// 3. async/await example
async function fetchDataAsync() {
  try {
    console.log("Fetching data (async/await)...");
    const message = await fetchDataWithPromise();
    console.log(message);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchDataAsync();

// 4. fetch API example (basic usage)
async function getUsers() {
  try {
    console.log("Fetching users with fetch API...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Users:", data.slice(0, 3)); // show first 3 users
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}
getUsers();
