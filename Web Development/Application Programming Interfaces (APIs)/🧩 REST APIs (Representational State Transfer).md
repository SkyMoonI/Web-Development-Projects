
---

## 🧠 What Is a REST API?

A **REST API** is a set of rules for building and interacting with **web services**. It follows the principles of **REST (Representational State Transfer)** — an architectural style for designing **stateless** client-server communication using **HTTP methods**.

In simple terms:

> REST APIs let you **communicate with a server** using standard **HTTP requests** like `GET`, `POST`, `PUT`, and `DELETE`.

---

## 🔄 REST Principles (Simplified)

|Principle|Description|
|---|---|
|**Stateless**|Each request must contain all necessary information. No client state is stored on the server.|
|**Client-Server**|Clear separation between client (frontend) and server (backend)|
|**Uniform Interface**|Use of standard HTTP methods and status codes|
|**Cacheable**|Responses can be cached to improve performance|
|**Layered System**|Client doesn’t need to know if it’s communicating with the actual server or a proxy|

---

## 🚦 HTTP Methods in REST

|Method|Purpose|Example|
|---|---|---|
|`GET`|Read data|`GET /users` (get all users)|
|`POST`|Create new data|`POST /users` (add a new user)|
|`PUT`|Update/Replace|`PUT /users/1` (replace user with ID 1)|
|`PATCH`|Update/Modify|`PATCH /users/1` (modify user with ID 1)|
|`DELETE`|Delete data|`DELETE /users/1` (remove user with ID 1)|

---

## 🧱 Example: REST API for Users

### Base URL

```
https://api.example.com/users
```

### Endpoints

```http
GET    /users        → Get all users
GET    /users/5      → Get user with ID 5
POST   /users        → Create a new user
PUT    /users/5      → Replace user with ID 5
PATCH  /users/5      → Partially update user with ID 5
DELETE /users/5      → Delete user with ID 5
```

---

## 📬 Example with Axios

```js
// Get all users
axios.get("https://api.example.com/users")
  .then(res => console.log(res.data));

// Create a user
axios.post("https://api.example.com/users", {
  name: "Alice",
  email: "alice@example.com"
});
```

---

## 📦 REST vs Other APIs

|Type|Features|
|---|---|
|**REST**|Simple, widely used, stateless|
|**GraphQL**|More control, client defines data shape|
|**SOAP**|Older, more complex, used in enterprise settings|

---

## 🏁 REST API Status Codes

|Code|Meaning|
|---|---|
|`200 OK`|Request succeeded|
|`201 Created`|Resource created|
|`400 Bad Request`|Invalid input|
|`401 Unauthorized`|Not authenticated|
|`403 Forbidden`|Authenticated but not allowed|
|`404 Not Found`|Resource doesn’t exist|
|`500 Internal Server Error`|Something went wrong on server|

---

### 🏷️ Tags

#api #rest #http #webdev #backend #axios #json #crud

---

Let me know if you want a diagram of the REST architecture or a mini-project that consumes a REST API!