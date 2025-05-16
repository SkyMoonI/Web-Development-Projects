
---

When you want to **dynamically change styles with JavaScript**, the best practice is to **use CSS classes** and apply them using the DOM’s `classList` API.

This helps **keep your styling in CSS** and **your logic in JavaScript**, preserving the principle of Separation of Concerns.

---

#### ✅ Good Example with `classList`

**HTML (structure):**

```html
<button id="modeToggle">Toggle Theme</button>
<div id="page">Welcome!</div>
```

**CSS (style):**

```css
.dark-mode {
  background-color: black;
  color: white;
}
```

**JavaScript (behavior):**

```js
const page = document.getElementById("page");
const button = document.getElementById("modeToggle");

button.addEventListener("click", () => {
  page.classList.toggle("dark-mode");
});
```

---

### 🧠 What Is `classList`?

`classList` is a built-in DOM property that allows you to:

|Method|Description|
|---|---|
|`.add('class')`|Add a class|
|`.remove('class')`|Remove a class|
|`.toggle('class')`|Add class if missing, remove if present|
|`.contains('class')`|Check if the element has a class|

✅ This approach lets **CSS handle appearance** and **JavaScript handle logic** without hardcoding styles into JS.

---

### ⚠️ Why Not Use `.style` Inline?

```js
element.style.color = "blue";
```

While this works, it **injects CSS into JavaScript**, which:

- **Violates separation of concerns**
    
- Makes styling less reusable
    
- Clutters JS with visual logic
    

---

### 🏁 Summary (Reinforced)

|Layer|Task|Tool|
|---|---|---|
|Structure|HTML content|HTML|
|Style|Appearance & layout|CSS classes & selectors|
|Behavior|Interactivity & logic|JavaScript + `classList` ✅|

---

### 🏷️ Tags

#dom #javascript #css #classlist #separationOfConcerns #bestpractices #frontend #webdev

---

Let me know if you’d like this merged back into the full Separation of Concerns note, or if we’re moving to DOM events next!