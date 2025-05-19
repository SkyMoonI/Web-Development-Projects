
---

### 🧠 What Is Postman?

**Postman** is a **GUI-based tool** used to develop, test, and debug **APIs** (Application Programming Interfaces).

✅ With Postman, you can:

- Send HTTP requests (GET, POST, PUT, DELETE, etc.)
    
- Test your **backend APIs**
    
- View responses from your **Express.js** or other servers
    
- Automate and document API workflows
    

---

### 🚀 Why Use Postman?

- You can test server routes **without needing a frontend**
    
- Easily **change headers, body, and params**
    
- Great for **debugging backend logic**
    

---

### 🧰 Key Features

|Feature|Purpose|
|---|---|
|**Request Builder**|Build and send HTTP requests|
|**Environment Variables**|Use variables across requests (e.g., base URLs)|
|**Collections**|Save and organize related requests|
|**Tests**|Automate response validation using JavaScript|
|**Pre-requests**|Run scripts before requests|
|**History**|Access previously sent requests|

---

### 🛠️ How to Use Postman

#### ✅ 1. Install Postman

- Download from [https://www.postman.com](https://www.postman.com/)
    

#### ✅ 2. Create a Request

- Choose method: `GET`, `POST`, `PUT`, `DELETE`, etc.
    
- Enter the **URL** (e.g., `http://localhost:3000/api/users`)
    
- Set **Headers** (e.g., `Content-Type: application/json`)
    
- Add a **Body** (for POST/PUT) in JSON:
    

```json
{
  "name": "John",
  "email": "john@example.com"
}
```

#### ✅ 3. Send and View Response

- Click **Send**
    
- View:
    
    - **Status code** (200, 404, etc.)
        
    - **Response body**
        
    - **Time taken**
        
    - **Headers**
        

---

### 🧪 Example: Testing Express POST Route

```js
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send("User data received!");
});
```

**Postman setup:**

- Method: `POST`
    
- URL: `http://localhost:3000/users`
    
- Body (raw → JSON):
    

```json
{
  "name": "Jane"
}
```

---

### 📌 Tip: Enable Body Parsing in Express

To read JSON in requests:

```js
app.use(express.json());
```

---

### 🏷️ Tags

#postman #api #backend #testing #express #http #requests #json

---

Let me know when you want to explore **API testing**, **creating collections**, or **automating workflows with Postman**!