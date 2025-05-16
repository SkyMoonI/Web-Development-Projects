
---

Learn how to **read**, **change**, and **clear** text inside HTML elements using the **DOM text manipulation properties** in JavaScript.

---

### 🧠 What Is Text Manipulation?

Text manipulation means **reading or modifying** the **text content** of an HTML element using JavaScript.

✅ Useful for:

- Updating headings or paragraphs
    
- Showing dynamic user messages
    
- Creating interactive UIs without refreshing the page
    

---

### 🔑 Main Properties

|Property|Purpose|
|---|---|
|`textContent`|Gets/sets all text (ignores styling, hidden text shown)|
|`innerText`|Gets/sets **visible** text only (respects CSS like `display: none`)|
|`innerHTML`|Gets/sets HTML (not just text!) inside an element|

---

### 📥 Reading Text

```html
<h1 id="title">Welcome to My Page</h1>
```

```js
let title = document.getElementById("title");
console.log(title.textContent);  // "Welcome to My Page"
```

---

### ✍️ Changing Text

```js
title.textContent = "Hello, World!";
```

Now the page displays:

```html
<h1 id="title">Hello, World!</h1>
```

---

### ❌ Clearing Text

```js
title.textContent = "";  // Makes the text disappear
```

---

### 🔄 `textContent` vs `innerText`

```html
<p style="display: none">Hidden</p>
```

|Property|Result|
|---|---|
|`textContent`|`"Hidden"`|
|`innerText`|`""` (empty because it's hidden)|

✅ Use `textContent` if you want **all text** regardless of visibility  
✅ Use `innerText` if you only care about **what the user sees**

---

### ⚠️ `innerHTML`: For HTML Elements, Not Just Text

```js
document.getElementById("container").innerHTML = "<strong>Bold Text</strong>";
```

✅ Use `innerHTML` when inserting actual **HTML markup**  
🚫 Avoid it if you're only working with plain text (use `textContent` instead for safety)

---

### 🧩 Example: Live Text Update

```html
<input id="nameInput" placeholder="Your name">
<button onclick="updateGreeting()">Greet</button>
<p id="greetingText"></p>
```

```js
function updateGreeting() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("greetingText").textContent = `Hello, ${name}!`;
}
```

---

### 🏁 Summary

✅ `textContent` is safest for updating or reading **plain text**  
✅ `innerText` is like `textContent` but skips hidden content  
✅ `innerHTML` lets you add or read **HTML tags**, not just text  
✅ Ideal for dynamic UIs, user messages, or live content updates

---

### 🏷️ Tags

#javascript #dom #text #textcontent #innerText #innerHTML #webdev #frontend #manipulation

---

Let me know if you'd like to continue with **event handling**, **input form values**, or **CSS style changes via JavaScript**!