
---

Learn how to make your websites more **interactive**, **dynamic**, and **responsive** using keyboard event listeners, simple animations, and powerful callback functions.

---

### 🎧 Using Keyboard Event Listeners to Check for Key Presses

You can respond to **keyboard input** using the `keydown`, `keyup`, or `keypress` events.

```js
document.addEventListener("keydown", function (event) {
  console.log("Key pressed: " + event.key);
});
```

✅ Useful for:

- Game controls
    
- Form shortcuts
    
- Triggering animations with keys
    

---

### 🔄 Example: Key-triggered Function

```js
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    alert("You pressed A!");
  }
});
```

---

### 💫 Adding Animation to Websites

Animations can be triggered by **adding/removing CSS classes** with JavaScript.

#### 🧪 CSS Example:

```css
.pressed {
  box-shadow: 0 3px 5px rgba(0,0,0,0.2);
  transform: scale(0.95);
}
```

#### 🧪 JavaScript Example:

```js
function animateButton(key) {
  const button = document.querySelector("." + key);
  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
```

✅ `setTimeout()` is used to remove the animation after a short delay.

---

### 🔁 Understanding Callbacks and How to Respond to Events

A **callback function** is a function passed as an **argument** to another function, typically to be **executed later**, like after an event happens.

#### 🧪 Example:

```js
function handleClick() {
  console.log("Button clicked!");
}

document.querySelector("button").addEventListener("click", handleClick);
```

In this case, `handleClick` is a **callback function** that runs **after the "click" event** occurs.

---

### 🧠 Callback vs Immediate Call

```js
// Correct (passes the function)
addEventListener("click", handleClick);

// ❌ Wrong (executes the function immediately)
addEventListener("click", handleClick());
```

---

### ✅ When to Use Callbacks

|Use Case|Why Use a Callback?|
|---|---|
|Event handling|Run code after a click or key press|
|Asynchronous code (AJAX)|Wait for data before executing code|
|Reusable logic|Modularize behavior by passing logic as a parameter|

---

### 🏁 Summary

- **Keyboard events** capture user input.
    
- **Animations** enhance interactivity with visual feedback.
    
- **Callbacks** are essential for responding to events and async behavior.
    

---

### 🏷️ Tags

#javascript #events #keyboard #animation #callbacks #dom #webdev #interactivity

---

Let me know when you're ready to go deeper into **event delegation**, **custom animations**, or **async callbacks like `setTimeout`, `setInterval`, and Promises**!