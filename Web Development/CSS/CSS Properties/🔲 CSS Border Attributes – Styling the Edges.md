
### 🧠 Summary

CSS borders let you **outline** elements with lines of different **widths, styles, and colors**. Borders can be applied to all sides or individually.

---

### 🔹 Basic Shorthand Syntax

```css
selector {
  border: 2px solid black;
}
```

- `2px` → **Width**
    
- `solid` → **Style**
    
- `black` → **Color**
    

---

### 🔸 1️⃣ `border-width`

Controls the **thickness** of the border.

```css
border-width: 3px;
```

You can also specify **individual sides**:

```css
border-top-width: 5px;
border-right-width: 2px;
```

---

### 🔸 2️⃣ `border-style`

Sets the **line style** of the border.

```css
border-style: dashed;
```

✅ Valid values:

- `none` (no border)
    
- `solid`
    
- `dotted`
    
- `dashed`
    
- `double`
    
- `groove`
    
- `ridge`
    
- `inset`
    
- `outset`
    

---

### 🔸 3️⃣ `border-color`

Defines the **color** of the border.

```css
border-color: red;
```

You can also use:

- Hex (`#ff0000`)
    
- RGB (`rgb(255, 0, 0)`)
    
- HSL, named colors, etc.
    

---

### 🧱 Full Shorthand

```css
border: [width] [style] [color];
```

```css
border: 4px dotted blue;
```

---

### 📐 Individual Sides

You can apply borders to specific sides:

```css
border-top: 2px solid red;
border-right: 1px dashed gray;
border-bottom: none;
border-left: 3px double green;
```

---

### 🌀 Rounded Borders – `border-radius`

Used to **round corners** of an element.

```css
border-radius: 10px;
```

You can round specific corners:

```css
border-top-left-radius: 10px;
border-bottom-right-radius: 20px;
```

---

### 🏷️ Tags

#css #borders #styling #visuals #beginner

---
