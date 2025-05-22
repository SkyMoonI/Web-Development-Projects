
---

## 🧠 What Is a DELETE Route?

A **DELETE** route is used in RESTful APIs to **remove a resource** from the server (e.g., delete a user or a blog post).

- The route usually includes an **ID** or unique identifier.
    
- The server deletes the resource and sends a confirmation response.
    
- Follows RESTful conventions: `DELETE /resource/:id`
    

---

## 🛠️ Creating a DELETE Route

### ✅ Basic Example

```js
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  // Logic to delete user from DB or array
  res.json({ message: `User ${userId} deleted` });
});
```

> 🔍 `req.params.id` gets the dynamic `:id` from the URL

---

## 📌 Example Request

```http
DELETE /api/users/123
```

📤 Response:

```json
{
  "message": "User 123 deleted"
}
```

---

## 🧪 Example Use Case in Memory

```js
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.json({ message: `User ${userId} removed` });
});
```

---

## 🚦 Best Practices

- Always validate the `:id` before using it.
    
- Check if the item exists before deletion.
    
- Return a proper **HTTP status code** like:
    
    - `200 OK` → successfully deleted
        
    - `404 Not Found` → item not found
        
    - `204 No Content` → deleted, no return data
        

---

## ✅ Summary

|Method|Purpose|Example Route|
|---|---|---|
|DELETE|Remove resource|`/api/users/:id`|

---

## 🏷️ Tags

#express #api #delete #routes #restapi #webdev #nodejs #httpmethods

---

Let me know if you want help organizing all your CRUD routes into a controller-like structure or connecting them to a database like MongoDB or PostgreSQL.