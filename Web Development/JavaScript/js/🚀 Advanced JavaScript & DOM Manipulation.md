
---

Master deeper concepts in JavaScript like event listeners, higher-order functions, sound playback, and switch statements to build richer and more interactive web apps.

---

### 🔘 Adding Event Listeners to a Button

Use `addEventListener()` to run code when a user **clicks**, **hovers**, **presses keys**, etc.

```html
<button id="clickMe">Click Me</button>
```

```js
const button = document.getElementById("clickMe");

button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

✅ Keeps JS separate from HTML  
✅ You can attach multiple listeners to one element

---

### 🧠 Higher Order Functions & Passing Functions as Arguments

A **Higher Order Function** is a function that:

- **Takes another function** as an argument
    
- OR **returns a function**
    

```js
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  const userName = "Alice";
  callback(userName);
}

processUser(greet); // Output: Hello Alice
```

✅ Enables **callbacks**, **modular code**, and **functional programming**

---

### 🔊 How to Play Sounds on a Website

You can play audio using the `Audio` object.

```js
const audio = new Audio("sounds/click.mp3");
audio.play();
```

Or define a reusable function:

```js
function playSound(fileName) {
  const sound = new Audio("sounds/" + fileName);
  sound.play();
}

playSound("ding.mp3");
```

✅ Useful for games, notifications, UI feedback  
⚠️ Audio files must be in correct path & format

---

### 🔁 How to Use Switch Statements in JavaScript

The `switch` statement lets you handle **multiple conditions** more cleanly than `if...else`.

```js
let key = "a";

switch (key) {
  case "a":
    console.log("You pressed A");
    break;
  case "b":
    console.log("You pressed B");
    break;
  default:
    console.log("Unknown key");
}
```

✅ Cleaner than long chains of `if/else if`  
✅ Must include `break` to avoid fall-through

---

### 🧠 When to Use Each

|Feature|Use Case|
|---|---|
|`addEventListener()`|Respond to clicks, keypresses, etc.|
|Higher-order functions|Reusable logic, callbacks, animation loops|
|`Audio` object|Play UI sounds, music, game SFX|
|`switch` statement|Handle specific cases based on input|

---

### 🏷️ Tags

#javascript #dom #events #functions #audio #switch #webdev #frontend #advancedjs

---

Let me know when you move to event delegation, animations, or keypress handling — or if you'd like a diagram or mini project demo next!