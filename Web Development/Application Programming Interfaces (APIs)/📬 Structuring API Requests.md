
---

## 🧠 What Is an API Request?

An **API request** is how you **ask a web server for data or actions** through an **endpoint** using a specific **HTTP method** like `GET`, `POST`, `PUT`, or `DELETE`.

> It's like filling out a form (request) and submitting it to a service (server) to get something back (response).

---

## 🧱 Parts of an API Request

### 1. **Endpoint (URL)**

- The **web address** of the API resource.
    
- Example:
    
    ```
    https://api.example.com/users
    ```
    

### 2. **HTTP Method**

- Tells the server what you want to do.
    

|Method|Purpose|
|---|---|
|`GET`|Retrieve data|
|`POST`|Create new data|
|`PUT`|Update existing data|
|`DELETE`|Remove data|

### 3. **Headers**

- Extra info about the request, such as content type or authentication.
    

```http
Content-Type: application/json  
Authorization: Bearer YOUR_API_KEY
```

### 4. **Query Parameters** (For `GET` requests)

- Data added to the end of the URL to filter or modify the request.
    

```http
GET https://api.example.com/users?age=25&country=US
```

### 5. **Request Body** (For `POST`, `PUT`)

- JSON-formatted data you send to the server.
    

```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

---

## ✍️ Example: Making a POST Request

To create a new user:

**Request:**

```http
POST https://api.example.com/users
Headers:
  Content-Type: application/json

Body:
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

**Response:**

```json
{
  "id": 101,
  "name": "Alice",
  "email": "alice@example.com"
}
```

---

## 🔐 Including an API Key

Often added in headers or query parameters:

### In headers:

```http
Authorization: Bearer YOUR_API_KEY
```

### In query:

```
https://api.example.com/data?apikey=YOUR_API_KEY
```

---

## 🔁 Summary Table

|Component|Purpose|
|---|---|
|Endpoint|Target API address|
|Method|Action (GET, POST, etc.)|
|Headers|Metadata (auth, content type)|
|Query Params|Extra data in URL|
|Body|Data payload (JSON)|

---

### 🏷️ Tags

#api #httprequests #json #webdev #apirequests #restapi #httpmethods #backend

---

Let me know when you're ready to move on to **consuming APIs in JavaScript using `fetch()`** or **understanding HTTP responses**!