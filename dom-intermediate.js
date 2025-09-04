// DOM Intermediate Examples

// 1. Creating/removing elements dynamically
const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

const newItem = document.createElement("p");
newItem.textContent = "This is a dynamic paragraph.";
container.appendChild(newItem);

// Remove the element after 3 seconds
setTimeout(() => {
  container.removeChild(newItem);
  console.log("Paragraph removed dynamically.");
}, 3000);

// 2. ClassList methods
const box = document.createElement("div");
box.className = "box";
document.body.appendChild(box);

box.classList.add("active"); // add class
console.log("Class added:", box.className);

box.classList.remove("active"); // remove class
console.log("Class removed:", box.className);

box.classList.toggle("highlight"); // toggle class
console.log("Class toggled:", box.className);

console.log("Contains 'highlight'?", box.classList.contains("highlight"));

// 3. Event delegation
const list = document.createElement("ul");
document.body.appendChild(list);

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}

// Add event listener to parent (ul) instead of each li
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    alert(`Clicked: ${event.target.textContent}`);
  }
});
