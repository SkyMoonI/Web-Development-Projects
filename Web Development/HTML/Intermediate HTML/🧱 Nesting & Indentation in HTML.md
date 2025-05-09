
### 🧠 Summary

**Nesting** in HTML means placing elements inside other elements to reflect a **parent-child relationship**.  
**Indentation** is how you visually format nested code to keep it readable and maintainable.

---

### 🌳 Nesting

- HTML is **hierarchical**: elements can be **parents**, **children**, or **siblings**.
    
- Proper nesting ensures correct structure and behavior.
    

✅ **Example of Correct Nesting**

```html
<ul>
  <li>
    Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
</ul>
```

🚫 **Incorrect Nesting**

```html
<p><h1>Title inside paragraph</h1></p> <!-- ❌ Invalid HTML -->
```

> 📌 Block-level elements like `<h1>` should not be inside inline-level elements like `<p>`.

---

### 🎯 Why Nesting Matters

- Affects **layout**, **functionality**, and **semantic meaning**.
    
- Helps **screen readers** and **search engines** understand content structure.
    
- Improper nesting can break styles or behavior in browsers.
    

---

### 📐 Indentation

- Indentation is **not required** by HTML, but it's critical for **human readability**.
    
- Most developers use **2 or 4 spaces** per level of nesting (avoid using tabs inconsistently).
    

✅ **Good Indentation**

```html
<div>
  <h2>About Me</h2>
  <p>Hello! I’m learning web development.</p>
</div>
```

---

### 🔧 Tips for Indentation

- Be **consistent** throughout your codebase.
    
- Use a **code formatter or IDE setting** (e.g., VS Code auto-format with Prettier).
    
- Align closing tags with their opening counterparts for clarity.
    

---

### 🧪 Nesting Examples

#### ✔️ Nested Elements

```html
<div>
  <section>
    <h2>My Projects</h2>
    <ul>
      <li>Portfolio</li>
      <li>Blog</li>
    </ul>
  </section>
</div>
```

---

### 🏷️ Tags

#html #nesting #indentation #structure #intermediate

---

Would you like a reusable Obsidian **template for HTML elements** that includes nesting and usage examples automatically?