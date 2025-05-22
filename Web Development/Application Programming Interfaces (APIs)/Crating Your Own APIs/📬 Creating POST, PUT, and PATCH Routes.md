
---

## 🧠 Overview

In RESTful APIs, different HTTP methods serve different purposes:

|Method|Purpose|Idempotent?|Description|
|---|---|---|---|
|`POST`|Create|❌ No|Submits new data (e.g., add user)|
|`PUT`|Replace|✅ Yes|Replaces entire resource|
|`PATCH`|Update|❌ No|Updates **part** of a resource|

---

## ✉️ `POST` — Creating New Resources

- Typically used to **add** a new item.
    
- Data is sent in the **request body** (usually JSON).
    
- Requires `body-parser` or `express.json()` middleware.
    

```js
app.use(express.json()); // Middleware to parse JSON

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  // Save newUser to database here...
  res.status(201).json({ message: "User created", user: newUser });
});
```

📌 Example request:

```http
POST /api/users
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@example.com"
}
```

---

## 🛠️ `PUT` — Replacing a Resource

- Used to **replace** an entire resource.
    
- All fields must be supplied, or they may be overwritten/removed.
    

```js
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  // Replace user logic...
  res.json({ message: `User ${userId} replaced`, user: updatedUser });
});
```

📌 Example request:

```http
PUT /api/users/1
Content-Type: application/json

{
  "name": "Bob",
  "email": "bob@example.com"
}
```

---

## 🔧 `PATCH` — Updating Part of a Resource

- Used to **partially update** a resource (e.g., change email only).
    

```js
app.patch("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updates = req.body;
  // Apply partial updates...
  res.json({ message: `User ${userId} updated`, updates });
});
```

📌 Example request:

```http
PATCH /api/users/1
Content-Type: application/json

{
  "email": "bob.new@example.com"
}
```

---

## ✅ Summary Table

|Route Type|Method|Purpose|Example Route|
|---|---|---|---|
|Create|POST|Add new resource|`POST /users`|
|Replace|PUT|Replace entire object|`PUT /users/:id`|
|Update|PATCH|Modify partial object|`PATCH /users/:id`|

---

## 🏷️ Tags

#express #api #post #put #patch #restapi #json #httpmethods #webdev #nodejs

---

Let me know when you're ready to cover **DELETE routes**, or how to organize RESTful API routes cleanly in Express projects.