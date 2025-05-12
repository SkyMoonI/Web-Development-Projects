
---

Here’s a clear, concise Obsidian note explaining **CSS Grid**, a **two-dimensional layout system** in CSS that handles both **rows** and **columns**.

---

### 🧠 What Is CSS Grid?

**CSS Grid** is a **2D layout system** used to design web pages and interfaces by defining both **rows** and **columns** inside a container.

✅ Great for:

- Full-page layouts
    
- Image galleries
    
- Complex dashboard interfaces
    
- Aligning content in **both axes** (horizontal & vertical)
    

---

### 🧰 Core Concept

You apply `display: grid;` to a **container**, and then define rows and columns with `grid-template-rows` and `grid-template-columns`.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
}
```

---

### 📐 Grid Axes

|Axis|Controlled By|Direction|
|---|---|---|
|Horizontal (Inline)|`grid-template-columns`|Left ↔ Right|
|Vertical (Block)|`grid-template-rows`|Top ↕ Bottom|

Unlike Flexbox, Grid lets you position items **in both directions at once**.

---

### 🧱 Defining Columns and Rows

```css
.container {
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: auto 100px;
}
```

- `px` = fixed size
    
- `fr` = fraction of remaining space
    
- `auto` = adjusts to content
    

---

### 🔢 Placing Items in the Grid

```css
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

- Start at column 1 and end before column 3
    
- Span across two columns
    

---

### 📦 Simple Example

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

This creates **three equal columns** with a **10px gap** between items.

---

### 🔁 Repeat Function

```css
grid-template-columns: repeat(4, 1fr);
```

Creates 4 equal columns — short and clean syntax.

---

### ⚙️ Auto Placement

CSS Grid **automatically places** items in the next available cell unless you manually assign positions.

You can also use:

- `grid-auto-rows`
    
- `grid-auto-columns`
    
- `grid-auto-flow`
    

---

### 🧩 Grid Area Naming

```css
.container {
  grid-template-areas:
    "header header"
    "sidebar content";
}
```

```css
.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
```

Use named areas to design templates in a **declarative** way.

---

### 📝 Summary

- **2D system**: Rows + Columns
    
- **Explicit placement** or **auto flow**
    
- Use `fr` units for responsive layouts
    
- Combine with media queries for powerful responsive design
    

---

### 🏷️ Tags

#css #grid #layout #responsive #2d #columns #rows #template-areas

---

