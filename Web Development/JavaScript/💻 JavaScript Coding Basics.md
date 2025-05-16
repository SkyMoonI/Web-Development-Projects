
---

This note introduces **core JavaScript coding** concepts: variables, data types, operators, functions, conditionals, loops, and DOM interaction — everything you need to start coding with confidence.

---

### 🔢 1. Variables

Variables store data you can use later.

```js
let name = "Alice";     // can be changed later
const age = 25;         // constant, cannot be reassigned
var oldWay = true;      // older keyword, avoid using it now
```

✅ Use `let` and `const` in modern JS.

---

### 🔤 2. Data Types

|Type|Example|
|---|---|
|String|`"hello"`|
|Number|`42`, `3.14`|
|Boolean|`true`, `false`|
|Null|`null`|
|Undefined|`undefined`|
|Object|`{ name: "Alice" }`|
|Array|`[1, 2, 3]`|

```js
let isLoggedIn = false;
let fruits = ["apple", "banana"];
```

---

### ➕ 3. Operators

```js
// Arithmetic
let total = 5 + 3;   // 8

// Comparison
5 > 3       // true
5 === "5"   // false (strict equality)
5 == "5"    // true (loose equality)

// Logical
true && false  // false
true || false  // true
!true          // false
```

---

### 🧠 4. Functions

Functions are reusable blocks of code.

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Alice"); // Output: Hello Alice
```

Arrow function syntax (modern JS):

```js
const greet = (name) => {
  console.log(`Hello ${name}`);
};
```

---

### 📏 5. Conditionals

Make decisions in your code.

```js
let score = 90;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

---

### 🔁 6. Loops

Repeat actions.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let fruits = ["apple", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### 🏗️ 7. Objects & Arrays

```js
let person = {
  name: "Alice",
  age: 30
};

console.log(person.name); // Alice

let colors = ["red", "green", "blue"];
console.log(colors[1]); // green
```

---

### 🖱️ 8. DOM Manipulation

Change the HTML content dynamically.

```html
<h1 id="title">Old Title</h1>
```

```js
document.getElementById("title").textContent = "New Title!";
```

---

### 📦 Full Example

```html
<button onclick="sayHello()">Click Me</button>
<p id="output"></p>
```

```js
function sayHello() {
  document.getElementById("output").textContent = "Hello, world!";
}
```

---

### 🏁 Summary

JavaScript lets you:

✅ Store and manipulate data  
✅ Make decisions with conditions  
✅ Automate tasks with loops  
✅ Reuse code with functions  
✅ Interact with the webpage (DOM)

Start with these basics and you’re well on your way!

---

### 🏷️ Tags

#javascript #coding #basics #variables #functions #dom #conditionals #loops #webdev

---

Let me know when you’re ready for more advanced topics like **DOM Events**, **ES6 features**, or **JavaScript arrays and methods**!