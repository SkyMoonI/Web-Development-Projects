
---

## 🧠 What Is Axios?

**Axios** is a **promise-based HTTP client** for making requests to external APIs — both in **Node.js (server-side)** and **the browser (client-side)**.

It simplifies the process of making HTTP requests like `GET`, `POST`, `PUT`, `DELETE`, and more.

---

## 🚀 Why Use Axios?

✅ Easy to use syntax  
✅ Works on both client and server  
✅ Automatically parses JSON responses  
✅ Supports interceptors, error handling, and request customization

---

## 📦 Installing Axios

In a Node.js project:

```bash
npm install axios
```

---

## 📬 Making Requests with Axios

### 📄 GET Request (Fetch Data)

```js
const axios = require("axios");

axios.get("https://api.example.com/users")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

---

### 📝 POST Request (Send Data)

```js
const axios = require("axios");

axios.post("https://api.example.com/users", {
  name: "Alice",
  email: "alice@example.com"
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
```

---

## ⚙️ Customizing Headers

You can add things like API keys or auth tokens:

```js
axios.get("https://api.example.com/data", {
  headers: {
    Authorization: "Bearer YOUR_API_KEY"
  }
});
```

---

## 🔁 Other Methods

|Method|Usage|
|---|---|
|`axios.put()`|Update existing data|
|`axios.delete()`|Delete data|
|`axios.patch()`|Partial update|

---

## 🧪 Try/Catch with `async/await`

```js
const axios = require("axios");

async function getData() {
  try {
    const response = await axios.get("https://api.example.com/users");
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

---

## 🧰 Response Object Structure

```js
response = {
  data,         // response payload
  status,       // HTTP status code
  statusText,   // HTTP status text
  headers,      // response headers
  config        // request config
}
```

---

### 🏷️ Tags

#nodejs #axios #api #server #httprequests #webdev #javascript #backend

---

Let me know when you're ready to move on to **fetching APIs on the frontend**, or working with **environment variables for API keys**!