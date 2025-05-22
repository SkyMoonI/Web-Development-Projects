
---

## 🧠 What Is a JSON GET Route?

A **GET route** that returns **JSON** is used to deliver structured data (instead of plain text or HTML) to the client — often used in **REST APIs**.

---

## 🛠️ Basic JSON Response

```js
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello, JSON!" });
});
```

- `res.json(...)` automatically sets the **Content-Type** to `application/json`.
    
- Safer and cleaner than using `res.send()` for JSON.
    

---

## 🔄 Multiple JSON Items

```js
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  res.json(users);
});
```

- Returns an **array of objects**.
    
- Consumed easily by frontend apps or other APIs.
    

---

## 🔍 Using `req` in Different Ways

### 1. `req.query` → Query Parameters

Used for search or filters in the URL.

```js
app.get("/api/search", (req, res) => {
  const keyword = req.query.q;
  res.json({ message: `You searched for ${keyword}` });
});
```

- URL: `http://localhost:3000/api/search?q=cats`
    

---

### 2. `req.params` → URL Parameters

Used for dynamic routing (e.g., `/users/:id`).

```js
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ userId: userId });
});
```

- URL: `http://localhost:3000/api/users/42`
    

---

### 3. `req.headers` → Accessing HTTP Headers

```js
app.get("/api/headers", (req, res) => {
  const userAgent = req.headers["user-agent"];
  res.json({ userAgent: userAgent });
});
```

- Can be used for custom headers, authentication tokens, etc.
    

---

### 4. `req.path` → The Path of the Request

```js
app.get("/api/pathinfo", (req, res) => {
  res.json({ path: req.path });
});
```

---

### 5. `req.method` → Request Method Type

```js
app.get("/api/methodcheck", (req, res) => {
  res.json({ method: req.method }); // Returns "GET"
});
```

---

## ✅ Sample Complete JSON API Endpoint

```js
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 599 }
  ];

  const filter = req.query.search;
  const filteredProducts = filter
    ? products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    : products;

  res.json(filteredProducts);
});
```

- URL: `http://localhost:3000/api/products?search=phone`
    

---

## 🏁 Summary Table

|Property|Purpose|Example Usage|
|---|---|---|
|`req.query`|Access query params|`/search?q=js` → `req.query.q`|
|`req.params`|Access dynamic URL segments|`/user/:id` → `req.params.id`|
|`req.headers`|Access request headers|`req.headers['user-agent']`|
|`req.path`|Get path of the current route|`/api/products` → `req.path`|
|`req.method`|Get HTTP method|Returns `"GET"`|

---

### 🏷️ Tags

#express #api #get #json #req #backend #routing #nodejs #webdev #restapi

---

Let me know when you want to move on to **POST routes**, or build a complete RESTful API with CRUD operations.