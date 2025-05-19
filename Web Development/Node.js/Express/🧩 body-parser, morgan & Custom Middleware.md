
---

### 📦 `body-parser` – Reading Data from the Request Body

---

#### 🧠 What Is It?

`body-parser` is **middleware** that parses incoming **request bodies**, making them available on `req.body`.

✅ Essential for handling:

- JSON payloads
    
- Form submissions (URL-encoded data)
    

---

#### ✅ How to Use

```bash
npm install body-parser
```

```js
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // For JSON data
app.use(bodyParser.urlencoded({ extended: true })); // For form data
```

➡️ Now you can access:

```js
app.post("/user", (req, res) => {
  console.log(req.body); // Works!
});
```

> ⚠️ `express.json()` and `express.urlencoded()` are now built-in alternatives and usually preferred.

---

### 📘 Modern Alternative

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

---

### 🔍 `morgan` – Logging Requests

---

#### 🧠 What Is It?

`morgan` is a **HTTP request logger** middleware for Node.js and Express.

✅ Helpful for:

- Debugging
    
- Monitoring routes
    
- Understanding traffic
    

---

#### ✅ How to Use

```bash
npm install morgan
```

```js
const morgan = require("morgan");

app.use(morgan("dev")); // Logs requests in a readable format
```

🖨️ Example log:

```
GET /home 200 4.573 ms - 102
```

---

### 🧱 Writing Your Own Custom Middleware

---

#### 🧠 What Is It?

A **custom middleware** is a function that does anything you want during the request-response cycle.

✅ You can:

- Log custom data
    
- Authenticate users
    
- Add custom headers
    
- Block/redirect certain requests
    

---

#### 🧰 Basic Custom Middleware

```js
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Always call next() unless you send a response
}

app.use(logger);
```

---

#### 🛑 Custom Middleware That Stops the Flow

```js
function blockBadUser(req, res, next) {
  const banned = req.query.user === "hacker";
  if (banned) {
    return res.status(403).send("Access denied");
  }
  next();
}

app.use(blockBadUser);
```

---

#### 🧯 Error-Handling Middleware

```js
function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);
  res.status(500).send("Something broke!");
}

app.use(errorHandler);
```

---

### 🏷️ Tags

#express #middleware #bodyparser #morgan #custommiddleware #logging #security #request #response #nodejs

---

Let me know when you're ready to move on to **Templating (EJS)** or **Working with Routes and Parameters**!