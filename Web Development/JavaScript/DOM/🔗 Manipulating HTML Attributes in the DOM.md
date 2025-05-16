
---

Learn how to **access**, **change**, **add**, and **remove** HTML attributes using JavaScript. Perfect for dynamically updating links, images, input fields, or any HTML element.

---

### 🧠 What Are Attributes?

**HTML attributes** are key-value pairs added to elements to configure their behavior or appearance.

Examples:

```html
<a href="https://example.com">Visit</a>
<img src="image.jpg" alt="Photo">
<input type="text" placeholder="Enter name">
```

---

### 🛠️ Core Methods for Attributes

| Method                      | Purpose                                            |
| --------------------------- | -------------------------------------------------- |
| `getAttribute(attr)`        | Reads the value of an attribute                    |
| `setAttribute(attr, value)` | Sets/updates an attribute                          |
| `removeAttribute(attr)`     | Removes an attribute                               |
| `hasAttribute(attr)`        | Checks if the element has a given attribute        |
| attribute                   | Gets all the attributes of the element as an array |

---

### 📥 `getAttribute()`

Use it to **read** the value of an attribute.

```js
let link = document.querySelector("a");
console.log(link.getAttribute("href"));  // outputs: "https://example.com"
```

---

### ✍️ `setAttribute()`

Use it to **set or change** an attribute value.

```js
let img = document.querySelector("img");
img.setAttribute("src", "new-image.jpg");
img.setAttribute("alt", "New description");
```

---

### ❌ `removeAttribute()`

Use it to **delete** an attribute.

```js
let input = document.querySelector("input");
input.removeAttribute("placeholder");
```

---

### ✅ `hasAttribute()`

Check if an element **has** a certain attribute.

```js
let button = document.querySelector("button");
if (button.hasAttribute("disabled")) {
  console.log("Button is disabled");
}
```

---

### 🧩 Example: Toggle a Link's Destination

```html
<a id="toggleLink" href="https://google.com">Google</a>
<button onclick="toggleLink()">Toggle Link</button>
```

```js
function toggleLink() {
  let link = document.getElementById("toggleLink");
  let current = link.getAttribute("href");

  if (current === "https://google.com") {
    link.setAttribute("href", "https://bing.com");
    link.textContent = "Bing";
  } else {
    link.setAttribute("href", "https://google.com");
    link.textContent = "Google";
  }
}
```

---

### 🧪 Advanced Tip: `dataset` for Custom Attributes

Custom attributes that begin with `data-` can be accessed via `.dataset`:

```html
<div id="userCard" data-user-id="123" data-role="admin"></div>
```

```js
let card = document.getElementById("userCard");
console.log(card.dataset.userId); // "123"
console.log(card.dataset.role);   // "admin"
```

---

### 🏁 Summary

✅ Use DOM methods to read and manipulate element attributes  
✅ `getAttribute`, `setAttribute`, `removeAttribute`, and `hasAttribute` are essential  
✅ `dataset` is powerful for custom data attributes in dynamic apps

---

### 🏷️ Tags

#javascript #dom #attributes #html #webdev #frontend #manipulation #dataset

---

Let me know if you'd like to move on to **DOM events**, **CSS manipulation**, or **working with forms and user input**!