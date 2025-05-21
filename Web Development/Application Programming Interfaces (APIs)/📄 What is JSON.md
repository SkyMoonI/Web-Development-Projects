
---

## 🧠 Definition

**JSON** (JavaScript Object Notation) is a **lightweight data format** used for **storing and exchanging data** between a server and a client.

It is easy for **humans to read and write**, and easy for **machines to parse and generate**.

---

## 🧰 Why Use JSON?

- Standard format for **API responses**
    
- Works well with **JavaScript** and most other languages
    
- Commonly used in **web applications**, **config files**, and **data storage**
    

---

## 🔤 JSON Syntax Basics

JSON is structured as **key–value pairs**, similar to JavaScript objects.

### ✅ Valid JSON Example:

```json
{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "skills": ["HTML", "CSS", "JavaScript"],
  "address": {
    "city": "London",
    "zip": "12345"
  }
}
```

---

## 📏 JSON Rules

|Rule|Example|
|---|---|
|Data is in **name/value pairs**|`"name": "Alice"`|
|Data is separated by **commas**|`"age": 25, "city": "Paris"`|
|Curly braces `{}` hold **objects**|`{ "key": "value" }`|
|Square brackets `[]` hold **arrays**|`[ "one", "two" ]`|
|Keys must be **strings (in double quotes)**|`"key": "value"`|

---

## ⚙️ JSON vs JavaScript Object

|Feature|JSON|JavaScript Object|
|---|---|---|
|Quotes on keys|Required|Optional|
|Trailing commas|Not allowed|Allowed|
|Data types|Limited (no functions, no `undefined`)|Flexible|

---

## 🔄 Converting Between JSON and JS

### JavaScript → JSON

```js
const obj = { name: "Alice" };
const json = JSON.stringify(obj);
```

### JSON → JavaScript

```js
const json = '{"name":"Alice"}';
const obj = JSON.parse(json);
```

---

## 🧪 When You’ll Use JSON

- Receiving data from an **API**
    
- Sending data to a **backend server**
    
- Reading/writing **configuration files**
    

---

### 🏷️ Tags

#json #api #webdev #javascript #dataformat #backend #frontend

---

Let me know when you're ready to move on to **consuming JSON APIs in JavaScript with `fetch()`**, or need examples of parsing JSON from real API calls!