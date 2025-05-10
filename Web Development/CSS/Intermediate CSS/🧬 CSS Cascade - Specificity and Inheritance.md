![[CSS Cascade.png]]
### 🧠 Summary

When multiple CSS rules apply to the same element, the **Cascade** decides which rule "wins." The decision is based on 4 main factors:

1. **Position**
    
2. **Specificity**
    
3. **Type (Origin)**
    
4. **Importance**
    

---

### 1️⃣ 🔁 **Position (Order in Code)**

If two selectors are equal in specificity, **the last one written wins**.

```css
li {
  color: red;
  color: blue; /* ✅ This wins */
}
```

---

### 2️⃣ 🧠 **Specificity (Strength of Selector)**

The more **specific** the selector, the more priority it gets.

|Selector Type|Specificity Value|
|---|---|
|Element (`li`, `h1`)|0,0,0,1|
|Class (`.class`)|0,0,1,0|
|Attribute (`[type]`)|0,0,1,0|
|ID (`#id`)|0,1,0,0|
|Inline style (`style=""`)|1,0,0,0|

📌 Example from your image:

```css
li { color: blue; }                     /* Element */
.first-class { color: red; }           /* Class */
li[draggable] { color: purple; }       /* Attribute */
#first-id { color: orange; }           /* ✅ ID wins */
```

---

### 3️⃣ 🌐 **Type (Origin of Style)**

CSS comes from different sources, each with a different priority:

1. **User agent stylesheet** (default browser styles)
    
2. **External/Internal CSS** (`<link>`, `<style>`)
    
3. **Inline CSS** (`style=""`) → overrides both
    

📌 Example:

```html
<link rel="stylesheet" href="style.css">   <!-- External -->
<style> h1 { color: green; } </style>      <!-- Internal -->
<h1 style="color: blue;">Hello</h1>        <!-- ✅ Inline wins -->
```

---

### 4️⃣ ❗ **Importance (`!important`)**

Overrides everything else, **even specificity**.

```css
color: red;
color: green !important; /* ✅ This wins */
```

⚠️ Use sparingly—it breaks the cascade and makes debugging harder.

---

### 🧬 Summary Table

|Rule|Wins?|
|---|---|
|Later position|✅|
|More specific selector|✅|
|Inline > Internal > External|✅|
|`!important`|✅ Always|

---

### 🧓 Inheritance

Some properties (like `color`, `font`) are **inherited** from parent elements. Others (like `margin`, `padding`) are **not**.

```css
body {
  color: blue;
}
p {
  /* Inherits blue color from body */
}
```

You can force inheritance with:

```css
property: inherit;
```

---

### 🏷️ Tags

#css #cascade #specificity #inheritance #important #selectors #rules #intermediate 

---
