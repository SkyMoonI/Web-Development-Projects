
---

### 🧠 What Are Native Node Modules?

**Native (or core) Node modules** are **built-in modules** that come bundled with Node.js.  
You **don’t need to install** them with `npm` — you can simply `require()` them in your code.

✅ These modules provide essential functionalities like:

- File system access
    
- HTTP server creation
    
- Working with paths, events, streams, encryption, etc.
    

---

### 🛠️ How to Use a Native Module

You import them using `require()` (no installation needed):

```js
const fs = require("fs"); // File system module
```

Then you can use its built-in methods:

```js
fs.writeFileSync("message.txt", "Hello from Node.js!");
```

---

### 🧰 Common Native Modules

|Module|Purpose|
|---|---|
|`fs`|File system operations (read/write files)|
|`http`|Build HTTP servers|
|`path`|Work with file and directory paths|
|`os`|Access operating system info|
|`url`|Parse and format URLs|
|`events`|Create and manage events|
|`crypto`|Perform cryptographic operations|
|`stream`|Handle streaming data|
|`util`|Utility functions for debugging and formatting|

---

### 📂 Example: Using `fs` Module

```js
const fs = require("fs");

// Create or overwrite a file
fs.writeFileSync("hello.txt", "Hello World");

// Read file content
const data = fs.readFileSync("hello.txt", "utf8");
console.log(data); // Output: Hello World
```

---

### 🌐 Example: Using `http` Module to Create a Server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server running with native http module");
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
```

---

### 📁 Example: Using `path` Module

```js
const path = require("path");

const filePath = path.join(__dirname, "folder", "file.txt");
console.log(filePath);
```

---

### 📡 Example: Using `os` Module

```js
const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU Count:", os.cpus().length);
```

---

### ⚠️ Notes

- These modules are **synchronous and asynchronous** — choose the right one depending on performance needs.
    
- Great for building foundational features before introducing external packages.
    

---

### 🏷️ Tags

#nodejs #backend #coremodules #fs #http #path #os #native #javascript

---

Let me know when you’re ready to dive into **npm packages** or **Express.js**, and I’ll prep your next notes!