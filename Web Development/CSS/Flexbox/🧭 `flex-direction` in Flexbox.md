Here’s your **Obsidian-style note** explaining the `flex-direction` property in Flexbox, with clear examples for both **row** and **column** layouts.

---

**Controlling the layout direction of flex items**

---

### 🧠 What Is `flex-direction`?

The `flex-direction` property defines **how** flex items are **placed inside a flex container** — either in a **row (horizontal)** or **column (vertical)** layout.

---

### 🔧 Syntax

```css
.container {
  display: flex;
  flex-direction: row; /* or column */
}
```

---

### 🧱 Values of `flex-direction`

|Value|Description|
|---|---|
|`row`|(default) Items are placed **left to right** in a row|
|`row-reverse`|Items are placed **right to left**|
|`column`|Items are placed **top to bottom** in a column|
|`column-reverse`|Items are placed **bottom to top**|

---

### 🖼️ Visual Example

#### ➡️ `flex-direction: row;`

```html
<div class="container">
  <div>🍎</div>
  <div>🍊</div>
  <div>🍌</div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: row;
}
```

**Output:**  
🍎 🍊 🍌 (in a horizontal line, left to right)

---

#### ⬇️ `flex-direction: column;`

```css
.container {
  display: flex;
  flex-direction: column;
}
```

**Output:**  
🍎  
🍊  
🍌  
(vertical stack, top to bottom)

---

### 🧪 Tip

You can combine `flex-direction` with:

- `justify-content` → aligns items **along** the main axis
    
- `align-items` → aligns items **across** the cross axis
    

---

### 🧭 Summary Table

|`flex-direction`|Main Axis|Cross Axis|
|---|---|---|
|`row`|Horizontal|Vertical|
|`column`|Vertical|Horizontal|

---

### 🏷️ Tags

#css #flexbox #layout #flex-direction #responsive

---

Would you like a side-by-side visual diagram to compare all four `flex-direction` options?