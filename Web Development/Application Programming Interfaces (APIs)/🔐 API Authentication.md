
---

## 🧠 What Is API Authentication?

**API Authentication** is the process of **verifying the identity of a client** (e.g., your web app or server) trying to access an API.  
It ensures that **only authorized users** can interact with protected data or functionality.

---

## 🔑 Why Is It Important?

✅ Prevents **unauthorized access**  
✅ Protects **user data** and **API functionality**  
✅ Enables **tracking** and **rate-limiting** of usage  
✅ Often used with **API rate limits**, **quotas**, and **user roles**

---

## 🔐 Common API Authentication Methods

|Method|Description|
|---|---|
|**API Keys**|Simple token passed with each request (common for public APIs)|
|**Bearer Tokens**|Access tokens (usually OAuth) sent in `Authorization` header|
|**OAuth 2.0**|Industry-standard protocol for **secure delegated access**|
|**Basic Auth**|Sends `username:password` encoded in the header (not secure without HTTPS)|
|**Session Cookies**|Used in traditional web apps with sessions on the server|

---

## 🔑 1. **API Key Authentication**

### How it works:

You send a unique key as part of each request:

```http
GET /weather?city=London&apikey=YOUR_API_KEY
```

Or via headers:

```http
Authorization: Api-Key YOUR_API_KEY
```

⚠️ Don’t expose API keys on frontend — use server-side logic or environment variables.

---

## 🛡️ 2. **Bearer Token (OAuth2 Access Token)**

Sent via header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

✅ Tokens are often short-lived  
✅ Used for APIs requiring **user-level authentication**

---

## 🧰 Example with Axios (Bearer Token)

```js
const axios = require("axios");

axios.get("https://api.example.com/secure-data", {
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN"
  }
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
```

---

## 🔄 3. **OAuth 2.0 (Overview)**

OAuth 2.0 allows third-party apps to access user data **without needing the user’s credentials**.

### Flow:

1. App requests access to user data
    
2. User logs in via OAuth provider (Google, GitHub, etc.)
    
3. OAuth provider redirects back with an **access token**
    
4. App uses token to access user’s data
    

✅ Secure  
✅ Standardized  
✅ Ideal for login & access control

---

## ❌ Don’t Do This

🚫 Never hardcode tokens or API keys in frontend JS  
🚫 Never commit API keys to GitHub — use `.env` files!

---

## 🧪 Bonus: Environment Variables for API Keys

Use a `.env` file in Node.js apps:

```
API_KEY=your-secret-key
```

Then access it:

```js
require('dotenv').config();
console.log(process.env.API_KEY);
```

---

### 🏷️ Tags

#api #authentication #apikey #oauth #bearer #security #backend #nodejs #axios

---

Let me know if you want an example using **Firebase Auth**, **JWTs (JSON Web Tokens)**, or setting up a **custom auth system**!