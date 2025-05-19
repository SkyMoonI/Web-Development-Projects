
---

### 🧠 What Is npm?

**npm** stands for **Node Package Manager** — it’s the **default package manager for Node.js**.

✅ It allows you to:

- Install and manage **third-party packages**
    
- Share your own packages
    
- Track dependencies in `package.json`
    

---

### 📦 What Are External Modules?

External modules (also called **npm packages**) are **libraries made by other developers** that help you add functionality without writing everything from scratch.

Examples:

- `chalk` – Color terminal text
    
- `express` – Build web servers easily
    
- `lodash` – Utility functions
    
- `mongoose` – Work with MongoDB
    

---

### 🛠️ Installing npm Packages

First, create a Node project:

```bash
npm init -y    # Generates package.json
```

Then install a package:

```bash
npm install chalk
```

This will:

- Download the package into `node_modules/`
    
- Add it to `dependencies` in `package.json`
    

---

### 📁 Project Structure

```
/my-app
  ├── node_modules/
  ├── package.json
  ├── package-lock.json
  └── app.js
```

---

### ✅ How to Use Installed Packages

Example with **Chalk**:

```bash
npm install chalk
```

```js
// app.js
const chalk = require("chalk");

console.log(chalk.green("Success!"));
```

---

### 🧪 Installing Dev Dependencies

Use `--save-dev` for packages used only during development (e.g., `nodemon`, `eslint`):

```bash
npm install nodemon --save-dev
```

These won’t be installed in production.

---

### 📤 Uninstalling a Package

```bash
npm uninstall chalk
```

---

### 🧹 Common npm Commands

|Command|Purpose|
|---|---|
|`npm init -y`|Create `package.json` quickly|
|`npm install`|Install all dependencies listed in `package.json`|
|`npm install <pkg>`|Install a specific package|
|`npm uninstall <pkg>`|Remove a package|
|`npm outdated`|Check for outdated packages|
|`npm update`|Update installed packages|
|`npm run <script>`|Run a custom script from `package.json`|

---

### ⚠️ `.gitignore` tip

Always add `node_modules/` to your `.gitignore` so you don’t push huge folders to GitHub.

---

### 🏷️ Tags

#nodejs #npm #packages #modules #javascript #dependencies #backend #tools

---

Let me know when you're ready to move on to **Express.js** and building servers with it!