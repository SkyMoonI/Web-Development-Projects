
##  `<img>` - Image Element (Adding Images to Your Website)

### 🧠 Summary

The `<img>` element is used to **embed images** into your web page. It’s a **void element**, meaning it has **no closing tag** and requires attributes to function properly.

---

### 📘 Syntax

```html
<img src="image.jpg" alt="Description of image">
```

- **`src`**: Required – URL/path to the image file
    
- **`alt`**: Required – Text alternative for screen readers and loading failures
    
- Self-closing: `<img>` is a **void element** (no closing tag)
    

---

### 🛠️ Common Attributes

|Attribute|Description|
|---|---|
|`src`|The path or URL to the image (relative or absolute)|
|`alt`|Describes the image for accessibility and SEO|
|`width`|Specifies the width of the image (in px or %)|
|`height`|Specifies the height of the image|
|`title`|Shows a tooltip when hovered|
|`loading`|Lazy-loads the image for performance (`lazy`, `eager`)|

---

### 🧪 Examples

#### 🖼️ Basic Image

```html
<img src="cat.jpg" alt="A cute cat">
```

#### 🌍 External Image

```html
<img src="https://example.com/images/logo.png" alt="Company Logo">
```

#### 📏 Resized Image

```html
<img src="banner.jpg" alt="Website Banner" width="600">
```

#### 🐢 Lazy-Loaded Image

```html
<img src="slow-image.jpg" alt="Big image" loading="lazy">
```

---

### 🧱 Nesting & Usage

- **Cannot contain** any content (void element).
    
- Usually placed inside block-level elements like `<div>`, `<figure>`, or `<a>` (for clickable images).
    

```html
<a href="fullsize.jpg">
  <img src="thumb.jpg" alt="Thumbnail">
</a>
```

---

### 🎯 Best Practices

- ✅ Always use `alt` for accessibility and SEO.
    
- ✅ Optimize image size and format for performance.
    
- ✅ Use `loading="lazy"` to improve page speed for off-screen images.
    
- ✅ Use relative paths (`images/cat.jpg`) for local files when possible.
    

---

### 🗂️ Recommended Image Formats

|Format|Use Case|
|---|---|
|`.jpg`|Photos, realistic images|
|`.png`|Transparency or detailed icons|
|`.gif`|Simple animations|
|`.svg`|Scalable graphics and icons|
|`.webp`|Modern format, small file size|

---

### 🏷️ Tags

#html #image #img #attributes #intermediate

---

Would you like a separate note explaining how to organize an `/images` folder and reference images using **relative paths** in a project structure?