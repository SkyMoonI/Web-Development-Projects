Here’s a complete and easy-to-digest **Obsidian-style note** explaining **CSS Flexbox** — what it is, how it works, and why it's useful.

---

**What is it and how does it work?**

---

### 🧠 What Is Flexbox?

**Flexbox** (Flexible Box Layout) is a **1-dimensional layout model** in CSS used to distribute space and align items **along a single axis** — either **horizontal (row)** or **vertical (column)**.

✅ Great for:

- Building **responsive navbars**
    
- Aligning cards, buttons, or items
    
- Centering content (even vertically!)
    

---

### 🧰 Core Concept

You apply `display: flex;` to a **container** element, and then use flex properties to control the layout of its **children (flex items)**.

```css
.container {
  display: flex;
}
```

---

### 📐 Flexbox Axes

|Axis|Direction|Controlled By|
|---|---|---|
|Main Axis|Row / Column|`flex-direction`|
|Cross Axis|Perpendicular Axis|Alignment properties|

---

### 🛠️ Key Flex Container Properties

|Property|Purpose|
|---|---|
|`display: flex;`|Turns the container into a flex container|
|`flex-direction`|Sets direction: `row`, `row-reverse`, `column`, `column-reverse`|
|`justify-content`|Aligns items **horizontally** (main axis)|
|`align-items`|Aligns items **vertically** (cross axis)|
|`flex-wrap`|Allows wrapping of flex items|
|`gap`|Adds spacing between flex items|

---

### 📦 Example

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

### 📏 Common `justify-content` Values

|Value|Effect|
|---|---|
|`flex-start`|Align items to the start|
|`flex-end`|Align items to the end|
|`center`|Center items|
|`space-between`|Space between items|
|`space-around`|Even space around items|
|`space-evenly`|Equal spacing all around|

---

### 🔧 Aligning Items

- `align-items`: Controls vertical alignment (if `flex-direction: row`)
    
- `align-self`: Overrides alignment on individual item
    

---

### 🔄 Wrap Items with `flex-wrap`

```css
.container {
  flex-wrap: wrap;
}
```

Items will move to the next line when there's not enough space.

---

### 🏷️ Tags

#css #flexbox #layout #responsive #alignment

---
