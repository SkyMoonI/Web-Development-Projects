
---

### 🧠 What Is Middleware?

**Middleware** are **functions** that execute **during the lifecycle of an HTTP request** in an Express.js app.

They sit **between** the **request** and **response**, and can:

✅ Modify the `req` and `res` objects  
✅ End the request-response cycle  
✅ Call the next middleware in the stack

---

### 🧰 How Middleware Works

A middleware function has access to:

```js
(req, res, next)
```

- `req` → the incoming request
    
- `res` → the outgoing response
    
- `next()` → passes control to the next middleware
    

---

### 🛠️ Basic Middleware Example

```js
app.use((req, res, next) => {
  console.log("A request was made:", req.method, req.url);
  next(); // Pass control to next middleware/route
});
```

---

### 🧪 Real-World Example

```js
app.use(express.json()); // Built-in middleware to parse JSON bodies

app.post("/data", (req, res) => {
  console.log(req.body); // Now req.body works!
  res.send("Data received");
});
```

---

### 📦 Types of Middleware in Express

|Type|Purpose|
|---|---|
|**Application-level**|Bound to an instance of Express using `app.use()` or `app.get()`|
|**Router-level**|Applied to an instance of `express.Router()`|
|**Built-in**|Comes with Express (e.g., `express.json()`)|
|**Third-party**|Installed via NPM (e.g., `morgan`, `cors`)|
|**Error-handling**|Middleware with 4 parameters: `(err, req, res, next)`|

---

### 🚦 Order Matters

Middleware runs **in the order it's defined**.  
That means middleware at the top will run before the ones below it.

---

### 🛑 Ending the Request

If you don't call `next()` or send a response, the request will hang.

```js
app.use((req, res, next) => {
  res.send("Request stopped here.");
});
```

---

### 🧰 Third-Party Middleware Example

```js
const morgan = require("morgan");
app.use(morgan("dev")); // Logs requests in the console
```

---

### 🧯 Error-Handling Middleware

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

---

### 🧱 Middleware Stack Visual

```plaintext
Client → [Middleware 1] → [Middleware 2] → [Route Handler] → Response
```

---

### 🏷️ Tags

#express #middleware #backend #nodejs #server #http #request #response

---

Let me know when you're ready to cover **Routing Parameters**, **Templating with EJS**, or **Connecting to Databases**!