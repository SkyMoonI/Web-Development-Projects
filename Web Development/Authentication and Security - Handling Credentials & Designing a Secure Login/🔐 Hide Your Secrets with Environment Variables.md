
---

## 🧠 What Are Environment Variables?

**Environment Variables** are special variables used to **store sensitive information** like:

- API Keys
    
- Database credentials
    
- Secrets or tokens
    
- Port numbers
    

🔒 Instead of hardcoding sensitive data in your code, use environment variables to keep them **safe and configurable**.

---

## ⚠️ Why Use Environment Variables?

- **Keep secrets private** — especially when pushing to GitHub
    
- **Separate configuration** from your application logic
    
- **Easily switch environments** (dev, test, prod)
    

---

## 🛠️ Setting Up Environment Variables

### 1. 📄 Create a `.env` File

```env
PORT=3000
DB_USER=myuser
DB_PASS=supersecretpassword
SECRET_KEY=mytopsecretkey
```

> Never commit your `.env` file to version control!

---

### 2. 📦 Install `dotenv` Package

```bash
npm install dotenv
```

---

### 3. 📥 Load Variables in Your App

At the very top of your `server.js` or `app.js` file:

```js
require('dotenv').config();
```

Now you can access environment variables like this:

```js
const port = process.env.PORT;
const dbUser = process.env.DB_USER;
```

---

## 👀 Access Environment Variables

```js
console.log(process.env.PORT);
```

All variables from `.env` are available via `process.env`.

---

## 🛡️ Add `.env` to `.gitignore`

Add this line to your `.gitignore` file:

```
.env
```

✅ This prevents `.env` from being tracked by Git and pushed to GitHub.

---

## 🌍 Setting Environment Variables in Production

In production environments (like Heroku, Vercel, etc.), set env variables via the hosting dashboard — **no `.env` file needed**.

---

## 📑 Example

```env
# .env
API_KEY=abc123
PORT=5000
```

```js
// app.js
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});

const apiKey = process.env.API_KEY;
```

---

## 🏷️ Tags

#nodejs #dotenv #security #backend #env #express #apikeys #gitignore #authentication

---

Let me know if you want a walkthrough of deploying an app with env variables!