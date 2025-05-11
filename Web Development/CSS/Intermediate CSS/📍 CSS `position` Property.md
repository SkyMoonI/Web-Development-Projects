Here’s a well-structured **Obsidian note** explaining the CSS `position` property with all 4 main types: `static`, `relative`, `absolute`, and `fixed`.

---

**Controls how elements are positioned on the page**

---

### 🧠 Summary

The `position` property determines **how an element is placed** in the document flow and how it behaves with `top`, `right`, `bottom`, and `left`.

---

### 1️⃣ `static` (default)

- ✅ **Default position** for all elements.
    
- 🧩 Element stays in the normal document flow.
    
- ❌ `top`, `left`, etc. **do not apply**.
    

```css
div {
  position: static;
}
```

---

### 2️⃣ `relative`

- ✅ Element remains in the **normal flow**.
    
- ✅ Can use `top`, `left`, `bottom`, `right` to move **relative to its original position**.
    

```css
div {
  position: relative;
  top: 20px;
  left: 10px;
}
```

📌 Useful for **positioning child elements absolutely** inside it.

---

### 3️⃣ `absolute`

- 🚫 Removed from **normal flow** (doesn’t take up space).
    
- ✅ Positioned **relative to the nearest positioned ancestor** (not `static`).
    
- 🧭 If no positioned ancestor, it’s relative to the `<html>` (viewport).
    

```css
div {
  position: absolute;
  top: 0;
  right: 0;
}
```

📌 Great for **floating elements** like dropdowns, tooltips, etc.

---

### 4️⃣ `fixed`

- 🚫 Removed from normal flow.
    
- ✅ Positioned **relative to the viewport** (browser window).
    
- 📌 Stays **fixed in place** when scrolling.
    

```css
div {
  position: fixed;
  bottom: 0;
  right: 0;
}
```

📌 Ideal for **sticky navbars**, **back to top buttons**, etc.

---

### 📌 Summary Table

|Position Type|In Flow?|Positioned Relative To|Scrolls with Page?|
|---|---|---|---|
|`static`|✅|Normal flow|✅|
|`relative`|✅|Its own original position|✅|
|`absolute`|❌|Nearest positioned ancestor|❌|
|`fixed`|❌|Viewport|❌|

---

### 🏷️ Tags

#css #position #layout #relative #absolute #fixed #static #intermediate 

---

