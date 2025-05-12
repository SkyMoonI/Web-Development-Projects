

---

This note covers how to **place items inside a CSS Grid**, whether automatically or manually — giving you full control over your layout structure.

---

### 🧠 What Is Grid Item Placement?

Grid item placement determines **where each item appears** in the grid. CSS Grid can **auto-place** items or you can place them **explicitly** by row/column lines or by using **named areas**.

---

### 🔢 Manual Placement: Grid Lines

You can place items using **grid line numbers**:

```css
.item {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

- Starts at column **2**, ends **before 4** (spans 2 columns)
    
- Starts at row **1**, ends **before 3** (spans 2 rows)
    

---

### 📍 Shortcut Syntax

You can also use the **shorthand** properties:

```css
.item {
  grid-area: 1 / 2 / 3 / 4;
}
```

This is the same as:

```css
grid-row-start: 1;
grid-column-start: 2;
grid-row-end: 3;
grid-column-end: 4;
```

Format: `grid-area: row-start / column-start / row-end / column-end`

---

### 🧱 Span Multiple Tracks

```css
.item {
  grid-column: span 2;
  grid-row: span 3;
}
```

- Tells the item to **span 2 columns** and **3 rows**
    
- Starts wherever the auto-placement puts it
    

---

### 🧩 Named Grid Areas

Define areas in the container:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content";
}
```

Assign areas to items:

```css
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
```

✅ Easy to **visualize layout** directly in CSS  
✅ Great for **semantic structure** and responsive design

---

### 🔁 Auto-Placement

By default, Grid places items **in order** into the next available spot:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

```html
<div class="container">
  <div>Item 1</div> <!-- Placed at 1/1 -->
  <div>Item 2</div> <!-- Placed at 1/2 -->
  <div>Item 3</div> <!-- Placed at 1/3 -->
  <div>Item 4</div> <!-- Placed at 2/1 -->
</div>
```

Control auto flow:

```css
grid-auto-flow: row; /* default */
grid-auto-flow: column;
```

---

### 📦 Example

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item1 {
  grid-column: 1 / 3;
}

.item2 {
  grid-row: 2 / 4;
}
```

- `.item1` spans two columns
    
- `.item2` spans two rows vertically
    

---

### 📝 Summary

- Use **grid lines** or **shorthand** to place items precisely
    
- Use `span` to stretch items across multiple tracks
    
- Use `grid-template-areas` for semantic, named layout zones
    
- Auto-placement fills the grid in reading order unless otherwise specified
    

---

### 🏷️ Tags

#css #grid #layout #grid-placement #grid-area #positioning #responsive

---
