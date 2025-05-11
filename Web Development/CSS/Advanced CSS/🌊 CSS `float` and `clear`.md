Here’s a detailed and easy-to-understand **Obsidian note** explaining the CSS `float` and `clear` properties — perfect for your vault:

---

**Used to wrap text around elements and control flow**

---

### 🧠 Summary

- `float` lets an element **float to the left or right**, allowing text or inline elements to **wrap around** it.
    
- `clear` is used to **prevent wrapping** and force elements to stay **below floated elements**.
    

---

### 🔹 `float` Property

#### 🧭 Values:

- `left` → Floats to the **left**
    
- `right` → Floats to the **right**
    
- `none` → Default; no float
    
- `inherit` → Inherits float from parent
    

```css
img {
  float: left;
}
```

📌 Use cases: Wrapping **text around images**, floating **sidebars**, etc.

---

### 🔹 `clear` Property

#### Prevents elements from flowing **next to floated elements**.

#### 🧭 Values:

- `left` → Clears left floats
    
- `right` → Clears right floats
    
- `both` → Clears both sides
    
- `none` → Default; no clearing
    

```css
p {
  clear: both;
}
```

📌 Use cases: Ensuring **footers or blocks** appear below floated content.

---

### 🖼️ Example

```html
<img src="cat.jpg" style="float: left; width: 200px; margin: 10px;">
<p>This text wraps around the floated image.</p>

<div style="clear: both;"></div>
<p>This text is below the image.</p>
```

---

### ⚠️ Common Pitfall: Collapsing Container

Floated children may cause their parent containers to **collapse (zero height)** because floats are taken out of the normal flow.

✅ **Fix** using `clearfix`:

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

---

### 📌 Summary Table

|Property|Purpose|Common Use Case|
|---|---|---|
|`float`|Float elements left/right|Wrap text around images|
|`clear`|Prevent elements from wrapping/floating|Force content below floated items|

---

### 🏷️ Tags

#css #float #clear #layout #wrapping #clearfix #advanced

---
