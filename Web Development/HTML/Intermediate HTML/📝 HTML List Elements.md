
### 🧠 Summary

HTML provides **three types of lists** to structure content:

- **Ordered lists** (`<ol>`) – items with a numbered sequence.
    
- **Unordered lists** (`<ul>`) – items with bullet points.
    
- **Description lists** (`<dl>`) – term-description pairs.
    

Each list uses **`<li>`** (list item) or `<dt>` / `<dd>` to define content.

---

### 📦 1. `<ul>` – Unordered List

- Used for **non-sequential**, bulleted items.
    

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

🔹 Default bullets can be styled with CSS using `list-style-type`.

---

### 🔢 2. `<ol>` – Ordered List

- Used for **sequential steps or ranking**.
    

```html
<ol>
  <li>Open browser</li>
  <li>Type URL</li>
  <li>Press Enter</li>
</ol>
```

🔹 You can set a starting number or change the numbering type:

```html
<ol start="5" type="A">
  <li>Step A</li>
  <li>Step B</li>
</ol>
```

---

### 📚 3. `<dl>` – Description List

- Used to pair **terms** and **descriptions**.
    

```html
<dl>
  <dt>HTML</dt>
  <dd>Standard markup language for web pages.</dd>
  <dt>CSS</dt>
  <dd>Style language used to describe web content.</dd>
</dl>
```

🔹 Often used for glossaries, FAQs, or key-value pairs.

---

### 🧪 Nesting Lists

Lists can be nested to create hierarchical structures:

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
</ul>
```

---

### ✅ Best Practices

- Keep list structure **semantic and readable**.
    
- Avoid using `<br>` for list-like spacing—use lists instead.
    
- Use CSS to customize markers (bullets, numbers, etc.).
    

---

### 🏷️ Tags

#html #lists #ul #ol #dl #intermediate
