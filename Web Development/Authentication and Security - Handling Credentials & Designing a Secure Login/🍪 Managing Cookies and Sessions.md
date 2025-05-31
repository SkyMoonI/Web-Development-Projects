
---

## 🧠 What Are Cookies and Sessions?

**Cookies** and **sessions** are tools used to **maintain user state** across multiple HTTP requests — important because HTTP is a **stateless protocol**.

|Concept|Description|
|---|---|
|Cookie|Small piece of data stored on the **client (browser)**|
|Session|Server-side storage of user data, often linked to a session ID stored in a cookie|

---

## 🍪 Cookies: Small Data on Client Side

### ✅ What They Do

- Store data like `user_id`, `theme`, `token`
    
- Sent back to server with every request
    

### ✏️ Set a Cookie in Express

```js
res.cookie("userId", 123, { maxAge: 86400000, httpOnly: true });
```

- `maxAge`: time in ms
    
- `httpOnly`: inaccessible via JS (helps protect against XSS)
    

### ❌ Delete a Cookie

```js
res.clearCookie("userId");
```

### 📦 Read a Cookie

Install cookie parser:

```bash
npm install cookie-parser
```

Use in your app:

```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(req.cookies);
});
```

---

## 📦 Sessions: Server-Side User Data

Sessions keep sensitive info **off the client**, storing it on the **server** and sending just a **session ID** via a cookie.

### 🛠️ Use `express-session`

```bash
npm install express-session
```

```js
const session = require("express-session");

app.use(session({
  secret: "keyboard cat", // used to sign session ID
  resave: false,
  saveUninitialized: false
}));
```

### ✅ Set Session Data

```js
req.session.username = "john";
```

### 📖 Read Session Data

```js
console.log(req.session.username);
```

### ❌ Destroy Session (Logout)

```js
req.session.destroy();
```

---

## 🔐 Cookies vs. Sessions Summary

|Feature|Cookies|Sessions|
|---|---|---|
|Stored On|Client|Server|
|Capacity|~4KB|Depends on server/storage|
|Security|Less secure (client-based)|More secure (server-based)|
|Setup Complexity|Simple|Needs session management|

---

## 🔐 Best Practices

- Use `httpOnly` and `secure` flags for cookies.
    
- Don’t store sensitive data in cookies.
    
- Use sessions for storing authenticated user data.
    
- Implement session expiration (`maxAge`).
    

---

## 🏷️ Tags

#authentication #cookies #sessions #express #nodejs #security #backend #userauth

---

Let me know if you want to go over **JWTs (JSON Web Tokens)** or **OAuth authentication** next!