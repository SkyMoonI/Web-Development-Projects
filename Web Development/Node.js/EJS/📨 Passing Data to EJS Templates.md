
---

### 🧠 Why Pass Data to Templates?

EJS lets you render **dynamic content** in your HTML pages by passing data from your **Express server** into your **EJS files**. This enables you to create **personalized**, **dynamic**, and **reusable** views.

---

### 📦 How It Works

You use the `res.render()` method in Express to:

1. Choose the EJS file (from the `/views` folder)
    
2. Pass a **JavaScript object** as the second argument
    

```js
res.render("templateName", { key: value });
```

---

### 🧪 Example: Passing a Single Variable

#### `server.js`

```js
app.get("/", (req, res) => {
  res.render("home", { name: "Alice" });
});
```

#### `home.ejs`

```html
<h1>Hello, <%= name %>!</h1>
```

🖥️ Output:

```html
Hello, Alice!
```

---

### 📋 Example: Passing an Array

#### `server.js`

```js
app.get("/fruits", (req, res) => {
  const fruits = ["Apple", "Banana", "Cherry"];
  res.render("fruits", { fruits: fruits });
});
```

#### `fruits.ejs`

```html
<ul>
  <% fruits.forEach(fruit => { %>
    <li><%= fruit %></li>
  <% }) %>
</ul>
```

---

### 🔀 Example: Passing Objects

```js
res.render("profile", {
  user: {
    name: "Bob",
    age: 25,
    city: "Tokyo"
  }
});
```

```ejs
<h2><%= user.name %> - <%= user.age %> - <%= user.city %></h2>
```

---

### ⚙️ Accessing Nested Properties

You can access any property inside the object using dot notation:

```ejs
<%= user.address.street %>
```

---

### 🏷️ Tags

#ejs #express #templating #data #dynamiccontent #serverrendering #javascript

---

Let me know if you want to move on to **EJS Partials**, **EJS Layout Structure**, or **Routing with Parameters** next!