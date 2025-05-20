
---

### 🧠 What Are Partials?

**Partials** in EJS are **reusable chunks of HTML/EJS code** (like headers, footers, navbars) that can be shared across multiple pages. This helps avoid code duplication and keeps your project **modular and clean**.

---

### 🔁 Using Partials with `<%- include() %>`

You include a partial using:

```ejs
<%- include('partials/filename') %>
```

- Use `<%-` (not `<%=`) to **avoid escaping** the HTML.
    
- The path is relative to your `/views` folder.
    

---

### 📁 Folder Structure Example

```
views/
├── partials/
│   ├── header.ejs
│   └── footer.ejs
├── home.ejs
└── about.ejs
```

---

### 🧪 Example: header and footer partials

#### `header.ejs`

```html
<header>
  <h1>My Website</h1>
  <nav> ... </nav>
</header>
```

#### `footer.ejs`

```html
<footer>
  <p>© 2025 My Site</p>
</footer>
```

#### `home.ejs`

```ejs
<%- include('partials/header') %>

<h2>Welcome to the Home Page</h2>

<%- include('partials/footer') %>
```

---

### 📐 What About Layouts?

EJS **does not support layouts** natively (like other templating engines such as Handlebars). But you can **simulate layouts** by combining partials creatively.

---

### 🧰 Simulated Layout Example

#### `layout.ejs`

```ejs
<%- include('partials/header') %>

<%- body %>

<%- include('partials/footer') %>
```

Then in your route:

```js
res.render("layout", { body: renderedChildHTML });
```

For advanced layout control, developers often use **`express-ejs-layouts`** package:

```bash
npm install express-ejs-layouts
```

Then in your `app.js`:

```js
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
```

---

### 🏷️ Tags

#ejs #partials #layouts #templating #express #modularcode #javascript

---

Let me know when you're ready to move on to **RESTful Routing**, **Database integration**, or more EJS practice!