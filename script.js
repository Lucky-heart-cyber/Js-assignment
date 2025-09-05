// ===============================
// Part 1: Basics (Variables, Conditionals)
// ===============================
function checkAge() {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    document.getElementById("age-result").innerText = "You are an adult.";
  } else {
    document.getElementById("age-result").innerText = "You are a minor.";
  }
}

// ===============================
// Part 2: Functions
// ===============================

// Function 1: calculate total with tax
function calculateTotal() {
  let price = 50;
  let tax = 0.1;
  let total = getTotal(price, tax);
  document.getElementById("total-result").innerText = "Total with tax: $" + total;
}

// Reusable function
function getTotal(price, taxRate) {
  return (price + price * taxRate).toFixed(2);
}

// Function 2: format name
function formatName(first, last) {
  return first.charAt(0).toUpperCase() + first.slice(1) + " " + last.toUpperCase();
}
console.log(formatName("john", "doe")); // Test in console

// ===============================
// Part 3: Loops
// ===============================
function showCountdown() {
  let countdownList = document.getElementById("countdown-list");
  countdownList.innerHTML = "";
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    countdownList.appendChild(li);
  }
}

// Example loop with array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log("Fruit: " + fruit));

// ===============================
// Part 4: DOM Manipulation
// ===============================

// 1. Change text
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("dom-text").innerText = "The text has been changed!";
});

// 2. Toggle class highlight
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("highlight-text").classList.toggle("highlight");
});

// 3. Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let ul = document.getElementById("dynamic-list");
  let li = document.createElement("li");
  li.innerText = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
});
