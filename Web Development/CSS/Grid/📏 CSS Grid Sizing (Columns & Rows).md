
---

This note explains **how to size columns and rows** in CSS Grid using various units and functions — essential for mastering layout control.

---

### 🧠 What Is Grid Sizing?

In **CSS Grid**, you define the **size of tracks** (columns and rows) using the `grid-template-columns` and `grid-template-rows` properties.

You can use **fixed units**, **responsive units**, or **content-based** sizing.

---

### 📐 Common Sizing Units

|Unit|Meaning|Responsive?|
|---|---|---|
|`px`|Fixed size (e.g. `200px`)|❌|
|`fr`|Fraction of remaining space|✅|
|`%`|Percentage of container|✅|
|`auto`|Size to fit content|✅|
|`min-content`|Smallest content size|✅|
|`max-content`|Largest content size|✅|

---

### 📦 Example: Mixed Sizing

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: auto 100px;
}
```

- First column: fixed `200px`
    
- Second: 1 share of leftover space
    
- Third: 2 shares of leftover space
    
- First row: auto-sized to content
    
- Second row: fixed height
    

---

### 🔁 Using `repeat()`

```css
grid-template-columns: repeat(3, 1fr);
```

Creates **three equal columns**, each taking 1 fraction of space.

---

### 🎛️ `minmax()` for Flexible Tracks

```css
grid-template-columns: repeat(3, minmax(150px, 1fr));
```

Each column will be at least `150px` wide, but can **grow** to `1fr` when there’s space.

✅ Ideal for **responsive designs**.

---

### 🔒 Intrinsic Sizing

|Value|Effect|
|---|---|
|`auto`|Size based on content|
|`min-content`|Smallest possible size without overflow|
|`max-content`|Largest content size before breaking|

Example:

```css
grid-template-columns: min-content max-content auto;
```

---

### ⚠️ Combining Sizing Strategies

```css
grid-template-columns: 200px 1fr minmax(100px, 300px);
```

- First: Fixed
    
- Second: Responsive
    
- Third: Min–Max range
    

This gives **fine-grained control** over layout behavior.

---

### 📝 Summary

- Use `px` for strict control, `fr` for flexibility
    
- Use `minmax()` for **adaptive layouts**
    
- Use `auto`, `min-content`, and `max-content` for **content-based sizing**
    

---

### 🏷️ Tags

#css #grid #layout #responsive #sizing #columns #rows #minmax #fr

---

