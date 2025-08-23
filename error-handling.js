// Error Handling Examples

// try...catch
try {
  let result = 10 / 0; // not an error in JS, but just an example
  console.log("Result:", result);

  // simulate an error
  JSON.parse("{ invalid json }");
} catch (error) {
  console.log("Caught an error:", error.message);
}

// throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // throws error
} catch (error) {
  console.log("Error from divide():", error.message);
}

// finally
function connectToServer() {
  try {
    console.log("Connecting to server...");
    throw new Error("Server not reachable"); // simulate error
  } catch (error) {
    console.log("Connection failed:", error.message);
  } finally {
    console.log("Closing connection (always runs).");
  }
}

connectToServer();
