Great! Here's a clear and structured **Obsidian note** on the CSS `display` property focusing on the three main types: `block`, `inline`, and `inline-block`.

---

**Controls how an element behaves in the layout**

---

### 🧠 Summary

The `display` property defines the **default layout behavior** of an HTML element—how it flows and interacts with other elements on the page.

---

### 1️⃣ `block`

- 📏 Takes up **the full width** of its container.
    
- 📐 Always starts on a **new line**.
    
- 🧩 You can set **width, height, padding, and margin**.
    

```css
div {
  display: block;
}
```

📦 Examples: `<div>`, `<p>`, `<h1>–<h6>`, `<section>`

---

### 2️⃣ `inline`

- ↔️ Only takes up **as much width as needed**.
    
- ⬅️⬅️ Elements appear **side-by-side** (no line breaks).
    
- ❌ Cannot set width/height; padding and margin may behave inconsistently.
    

```css
span {
  display: inline;
}
```

📦 Examples: `<span>`, `<a>`, `<strong>`, `<em>`

---

### 3️⃣ `inline-block`

- 🔄 Behaves like `inline` but **respects block-level styling**.
    
- ✅ Can **set width, height, padding, and margin**.
    
- 📐 Useful for layouts where you want elements side by side but styled like blocks.
    

```css
button {
  display: inline-block;
}
```

📦 Examples: Good for custom buttons, nav links, etc.

---

### 🧪 Example Comparison

```html
<div style="display: block;">Block</div>
<span style="display: inline;">Inline</span>
<div style="display: inline-block;">Inline-block</div>
```

---

### 📌 Summary Table

|Display Type|Line Break|Width/Height Settable|Appears Side-by-Side?|
|---|---|---|---|
|`block`|✅ Yes|✅ Yes|❌ No|
|`inline`|❌ No|❌ No|✅ Yes|
|`inline-block`|❌ No|✅ Yes|✅ Yes|

---

### 🏷️ Tags

#css #display #block #inline #inline-block #layout #advanced

---
