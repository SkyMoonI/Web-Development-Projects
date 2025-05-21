
---

## 🧠 What is an API?

An **API** (Application Programming Interface) is a **set of rules** that allows **different software applications to communicate** with each other.

> Think of an API as a **waiter** in a restaurant:  
> You (the client) place an order (request), and the waiter (API) delivers it to the kitchen (server) and brings back your food (response).

---

## 📦 What Do APIs Do?

- Allow **data exchange** between systems
    
- Let developers **access external functionality** (like maps, payments, weather, etc.)
    
- Enable **frontend to communicate with backend**
    

---

## 🌐 Web APIs

Web APIs are APIs that are accessed over the **Internet** using **HTTP**.

Common examples:

- Weather APIs (e.g. OpenWeatherMap)
    
- Payment APIs (e.g. Stripe)
    
- Social Media APIs (e.g. Twitter, Instagram)
    
- ChatGPT API 😉
    

---

## 📮 How Do You Use an API?

You make an **HTTP request** to the API endpoint (URL), and receive a **response**, often in **JSON** format.

### Example (Weather API):

```
GET https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=London
```

Response:

```json
{
  "location": { "name": "London" },
  "current": { "temp_c": 15.0 }
}
```

---

## ✉️ Types of API Requests (HTTP Verbs)

|Method|Purpose|
|---|---|
|`GET`|Retrieve data|
|`POST`|Send new data|
|`PUT`|Update existing data|
|`DELETE`|Remove data|

---

## 🔐 API Keys & Authentication

Some APIs require **authentication** using an **API key** or other methods like OAuth. This keeps usage secure and controlled.

---

## 📘 Glossary

- **Endpoint**: A specific URL that represents a resource
    
- **Request**: What you send to the API
    
- **Response**: What the API sends back
    
- **JSON**: Common data format for APIs (like a lightweight database object)
    
- **API Key**: Unique token to authenticate usage
    

---

### 🏷️ Tags

#api #webdevelopment #backend #frontend #json #httprequests #apidesign #restapi

---

Let me know when you’re ready to move on to **RESTful APIs**, **consuming APIs in JavaScript**, or **fetch() and Axios**!