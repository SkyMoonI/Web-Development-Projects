
---

### 🧠 What Is Node.js?

**Node.js** is a **JavaScript runtime** built on **Chrome’s V8 engine** that allows you to run JavaScript code **outside the browser** — like on servers.

✅ It makes JavaScript a **full-stack language**, enabling developers to build both frontend **and backend** using JS.

---

### 🔍 Why Use Node.js?

- 🏎️ **Fast & Non-blocking** – Uses **event-driven, non-blocking I/O** (asynchronous)
    
- 🧩 **Modular** – Rich **npm ecosystem** for reusable packages
    
- 🌍 **Cross-platform** – Works on Mac, Windows, Linux
    
- 💬 **Single Language** – Use JavaScript across entire stack
    
- 🌐 **Great for APIs** – REST APIs, real-time apps, chat servers
    

---

### 🛠️ How Node.js Works

Node.js uses a **single-threaded event loop** to handle **multiple clients concurrently**. It’s highly efficient for **I/O-heavy** applications like web servers.

```plaintext
Request → Event Loop → Callback Function → Response
```

---

### 📦 Installing Node.js & npm

Install from [https://nodejs.org](https://nodejs.org/)

- `node -v` → check version
    
- `npm -v` → Node Package Manager version
    

---

### 🔧 Using Node.js

You can run any `.js` file with Node:

```bash
node app.js
```

Example:

```javascript
// app.js
console.log("Hello from Node.js!");
```

Run it:

```bash
node app.js
```

---

### 📁 Built-in Modules

Node has many built-in modules (no install needed):

|Module|Purpose|
|---|---|
|`fs`|File system operations|
|`http`|Create web servers|
|`path`|Handle file paths|
|`os`|Info about the OS|
|`events`|Event handling|
|`crypto`|Encryption tools|

---

### 🖥️ Creating a Simple Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from the backend server!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Run it:

```bash
node server.js
```

Visit [http://localhost:3000](http://localhost:3000/)

---

### 📦 Installing Packages with npm

```bash
npm init -y            # Create package.json
npm install chalk      # Install a package
```

Use it:

```javascript
const chalk = require("chalk");
console.log(chalk.green("Success!"));
```

---

### 📁 Node.js Project Structure

```
/my-app
  ├── app.js
  ├── package.json
  └── node_modules/
```

---

### 🧪 Common Use Cases

- Building **REST APIs**
    
- Handling **file uploads**
    
- Serving **static files**
    
- Creating **real-time apps** (e.g. with Socket.IO)
    
- CLI tools, automation scripts
    

---

### 🏷️ Tags

#nodejs #javascript #backend #server #npm #modules #api #eventloop #http #runtime #tools

---

Let me know when you move on to **npm, packages, or Express.js**, and I’ll prepare those notes next!