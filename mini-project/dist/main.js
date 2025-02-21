"use strict";
console.log("Hello Mini Project");
let header = document.getElementById("parent");
console.log(header);
const newDiv = document.createElement("div");
console.log(newDiv);
// Set properties (e.g., class, text content)
newDiv.className = "new-class";
newDiv.textContent = "Hello, this is a new div!";
// Select the parent element where you want to append
const parentElement = document.getElementById("parent");
// Append the new element to the parent
if (parentElement) {
    parentElement.appendChild(newDiv);
}
