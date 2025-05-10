
### 🧠 Summary

CSS (**Cascading Style Sheets**) is used to **style** and **design** HTML elements. There are **three main ways** to apply CSS:

1. **Inline** – within a single HTML tag
    
2. **Internal** – inside a `<style>` block in the HTML file
    
3. **External** – linked from a separate `.css` file (best practice for large projects)
    

---

### 1️⃣ Inline CSS

**CSS applied directly to an HTML element using the `style` attribute.**

```html
<p style="color: red; font-size: 20px;">This is red text.</p>
```

✅ Quick and easy for small changes  
🚫 Not reusable, clutters HTML, poor for larger projects

---

### 2️⃣ Internal CSS

**CSS written inside a `<style>` tag in the `<head>` section of an HTML file.**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <p>This is blue text.</p>
</body>
</html>
```

✅ Good for small projects or single-page styling  
🚫 Not reusable across multiple pages

---

### 3️⃣ External CSS

**CSS stored in a separate `.css` file and linked using the `<link>` tag.**

🔗 `style.css`

```css
p {
  color: green;
  font-size: 16px;
}
```

🧾 `index.html`

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

✅ Best practice: keeps HTML and CSS separate  
✅ Reusable across multiple pages  
✅ Easier to maintain and scale

---

### ⚠️ Cascade Priority Order

From **highest to lowest priority**:

1. Inline CSS
    
2. Internal CSS
    
3. External CSS
    

> 🔧 Later rules **override** earlier ones if they target the same element.

---

### 🧭 When to Use What

|Method|Use Case|
|---|---|
|Inline CSS|Quick testing, one-off tweaks|
|Internal CSS|Small projects, single file websites|
|External CSS|Multi-page sites, professional projects|

---

### 🏷️ Tags

#css #stylesheets #inline #internal #external #beginner

---
