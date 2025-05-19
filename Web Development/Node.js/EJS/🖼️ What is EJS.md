
---

### 🧠 Introduction to EJS

**EJS (Embedded JavaScript)** is a **templating language** that lets you generate **HTML with JavaScript**.

✅ Useful for:

- Rendering dynamic web pages
    
- Injecting variables/data into HTML
    
- Creating reusable layout structures (e.g. headers/footers)
    

---

### ⚙️ How It Works

EJS lets you **embed JavaScript logic directly into HTML** using special tags:

```html
<%= %>  → Output escaped content (safe HTML)
<%- %>  → Output unescaped content (raw HTML)
<% %>   → Run JavaScript without output
```

---

### 📦 Installing and Setting Up EJS with Express

```bash
npm install ejs
```

```js
app.set("view engine", "ejs");
```

🛠️ Your `views/` folder holds all `.ejs` templates.

---

### 🧰 Example: Render Dynamic HTML

**index.ejs**:

```html
<h1>Hello, <%= username %>!</h1>
```

**server.js**:

```js
app.get("/", (req, res) => {
  res.render("index", { username: "Alice" });
});
```

📄 Output:

```html
<h1>Hello, Alice!</h1>
```

---

### 🔁 Example: Loops and Conditionals

```html
<ul>
  <% items.forEach(item => { %>
    <li><%= item %></li>
  <% }) %>
</ul>
```

```js
res.render("list", { items: ["apple", "banana", "orange"] });
```

---

### 🧩 Layouts and Partials

✅ You can create **partials** (reusable components) for headers, footers, navbars, etc.

```ejs
<!-- header.ejs -->
<header><h1>My Site</h1></header>

<!-- index.ejs -->
<%- include("header") %>
<p>Welcome!</p>
```

---

### 🏷️ Tags

#ejs #templating #html #express #dynamiccontent #partials #rendering

---

Let me know when you’re ready to move on to **Creating Layouts with EJS** or **Route Parameters and Views**!