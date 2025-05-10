

### 🧠 Summary

A **file path** tells the browser where to find a file (like an HTML page, image, or stylesheet).  
You use file paths to **link pages, images, and resources** together in a multi-page website.

---

### 🔍 Two Main Types of File Paths

#### 1. **Relative File Paths**

- Point to files **relative to the current file’s location**.
    
- Commonly used in websites to link local files.
    

|Example|Meaning|
|---|---|
|`index.html`|A file in the same folder|
|`./about.html`|`.` means "current folder"|
|`../index.html`|`..` means "go up one folder level"|
|`images/logo.png`|Inside the `images/` folder in current directory|
|`../assets/pic.jpg`|Go up one folder, then into `assets/`|

🗂️ **Example folder structure:**

```
project/
├── index.html
├── about.html
├── images/
│   └── cat.jpg
```

✅ Correct usage:

```html
<img src="images/cat.jpg" alt="A cat">
<a href="about.html">About Page</a>
```

---

#### 2. **Absolute File Paths**

- Start from the **root of the website** or use a full URL.
    
- More common for external links or production paths.
    

|Example|Description|
|---|---|
|`/images/logo.png`|Root-relative path (starts from root folder)|
|`https://example.com/about.html`|Full URL to a page on the internet|

```html
<a href="https://developer.mozilla.org">Visit MDN</a>
```

---

### 🧭 Quick Tips

- Always use **relative paths** for files in your own project.
    
- Use `/` to separate folders and filenames (`folder/file.html`).
    
- Use **`..` to go up** one level in the folder structure.
    
- Keep folder structures organized: e.g., `/images`, `/pages`, `/css`.
      
-  Use ./ to find folder-files in the same folders, ../ to go up 
     

---

### 🔐 Avoid Common Mistakes

🚫 Incorrect:

```html
<img src="cat.jpg"> <!-- File is actually in /images -->
```

✅ Correct:

```html
<img src="images/cat.jpg" alt="Cat">
```

---

### 🏷️ Tags

#html #paths #filestructure #multipage #beginner

---
