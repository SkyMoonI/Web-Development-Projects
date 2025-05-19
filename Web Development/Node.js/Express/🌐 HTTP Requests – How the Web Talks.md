
---

### 🧠 What Are HTTP Requests?

**HTTP (HyperText Transfer Protocol)** is the foundation of communication on the web. When a browser or client wants something from a server, it sends an **HTTP request**.

✅ Every time you:

- Visit a website
    
- Submit a form
    
- Click a link
    

You are sending an HTTP request to a server.

---

### ✉️ Types of HTTP Requests (Methods)

Each request method tells the server **what action** the client wants to perform:

|Method|Purpose|
|---|---|
|`GET`|Retrieve data|
|`POST`|Send data to create something|
|`PUT`|Update existing data|
|`DELETE`|Remove data|
|`PATCH`|Partially update data|
|`HEAD`|Same as `GET` but without the body|
|`OPTIONS`|Check what methods are available|

---

### 🛤️ Common Example in Express

```js
app.get("/", (req, res) => {
  res.send("GET request to homepage");
});

app.post("/submit", (req, res) => {
  res.send("POST request to submit data");
});
```

---

### 🧾 Anatomy of an HTTP Request

|Part|Description|
|---|---|
|**URL**|The address of the resource (e.g., `/about`)|
|**Method**|The type of request (e.g., `GET`, `POST`)|
|**Headers**|Metadata (e.g., `Content-Type`, cookies, auth)|
|**Body**|Optional data sent with request (used in `POST`, `PUT`)|

---

### 📬 Example (Browser → Server)

```http
GET /about HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
```

---

### 🧪 Using Postman or Insomnia

Tools like **Postman** help you test HTTP requests by:

- Choosing method (`GET`, `POST`, etc.)
    
- Setting headers
    
- Adding body content
    
- Viewing server responses
    

---

### 🔄 Server Response

Servers respond with an **HTTP Response** that contains:

- **Status code** (e.g., `200 OK`, `404 Not Found`)
    
- **Headers**
    
- **Body** (HTML, JSON, text, etc.)
    

---

### ⚠️ Status Codes Cheat Sheet

|Code|Meaning|
|---|---|
|`200`|OK|
|`201`|Created|
|`400`|Bad Request|
|`401`|Unauthorized|
|`403`|Forbidden|
|`404`|Not Found|
|`500`|Server Error|

---

### 🏷️ Tags

#http #requests #web #backend #server #express #get #post #statuscodes

---

Let me know when you're ready to move on to **Routing Parameters**, **Handling Forms**, or **Middleware in Express**!