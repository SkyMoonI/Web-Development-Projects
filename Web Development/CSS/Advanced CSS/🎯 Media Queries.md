Here’s a clean and structured **Obsidian-style note** explaining **Media Queries** and how they help create responsive layouts using breakpoints.

---

**Adding breakpoints to define responsive layouts**

---

### 🧠 What Are Media Queries?

**Media queries** are a **CSS feature** used to apply styles based on the device’s characteristics like **screen width, height, resolution, or orientation**.

✅ **Goal:** Make your website **responsive** by adjusting layout and design based on screen size.

---

### 📱 Why Use Media Queries?

They allow you to:

- Resize or rearrange content for **mobile**, **tablet**, and **desktop** views.
    
- Hide/show elements at certain screen sizes.
    
- Apply different font sizes, padding, or layout structures based on the device.
    

---

### 🧪 Syntax

```css
@media (condition) {
  /* CSS rules here */
}
```

---

### 📏 Common Breakpoints (by screen width)

|Device|Max Width|
|---|---|
|Mobile|576px|
|Tablet|768px|
|Small Desktop|992px|
|Large Desktop|1200px+|

---

### 🔧 Example

```css
/* Default - Desktop */
nav {
  display: flex;
  flex-direction: row;
}

/* Mobile */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }
}
```

This rearranges the navigation bar vertically on screens smaller than 768px.

---

### ⚙️ Multiple Conditions

```css
@media (min-width: 600px) and (max-width: 900px) {
  .card {
    font-size: 1.2rem;
  }
}
```

---

### 🧰 Tips

- Start with **mobile-first** design → write base styles for small screens, then use `min-width` queries to scale up.
    
- Combine with **flexbox** or **grid** for powerful layouts.
    
- Keep styles clean by grouping media queries at the bottom of your CSS file or inside component-specific sections.
    

---

### 🏷️ Tags

#css #mediaqueries #responsive #breakpoints #mobilefirst #advanced 

---

