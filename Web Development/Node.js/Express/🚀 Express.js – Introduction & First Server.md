

---

### 🧠 What Is Express?

**Express.js** is a **minimal and flexible Node.js web application framework** that provides a robust set of features for building **web apps and APIs**.

✅ Express simplifies:

- Creating HTTP servers
    
- Routing requests
    
- Handling form data
    
- Serving static files
    
- Middleware usage
    

---

### 📦 Why Use Express?

Without Express:

```js
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello");
});
```

With Express:

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000);
```

✅ Cleaner, scalable, and easier to maintain.

---

### 🛠️ Installing Express

```bash
npm install express
```

---

### 🧪 Your First Express Server

```js
// app.js
const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

- `app.get()` handles GET requests to the root path (`/`)
    
- `res.send()` sends a response to the client
    
- `app.listen()` starts the server on port 3000
    

---

### 🛤️ Basic Routing in Express

```js
app.get("/about", (req, res) => {
  res.send("This is the About page");
});
```

- Route: `/about`
    
- Method: `GET`
    

---

### ⚠️ Important Notes

- Express handles routing, middleware, and request/response cycle.
    
- You can create APIs or full-stack apps using it.
    
- You should **restart the server** manually or use **nodemon** for auto-reload:
    

```bash
npm install --save-dev nodemon
npx nodemon app.js
```

---

### 🏷️ Tags

#nodejs #express #backend #server #http #javascript #routing #npm

---

Let me know when you’re ready to learn about **routing**, **serving static files**, or **middleware** in Express!