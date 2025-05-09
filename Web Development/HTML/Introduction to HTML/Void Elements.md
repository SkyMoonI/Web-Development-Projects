
### 🧠 Summary

**Void elements** are **self-closing HTML elements** that **don’t have closing tags** and **cannot contain any content or children**. They are also known as **empty elements**.

---

### 📘 Characteristics

- Do **not** have an end tag (`</tag>`).
    
- Often used for **structural or embedded content**, not textual blocks.
    
- Can include attributes, just like normal tags.
    
- In HTML5, they **should not be written with a trailing slash**, but it’s still accepted:
    
    ```html
    <br>    <!-- correct -->
    <br />  <!-- also valid in HTML5 -->
    ```
    

---

### 🔩 Common Void Elements

|Tag|Purpose|
|---|---|
|`<br>`|Line break|
|`<hr>`|Horizontal rule (thematic break)|
|`<img>`|Embeds an image|
|`<input>`|User input field|
|`<link>`|Links external resources (e.g., CSS)|
|`<meta>`|Metadata (e.g., charset, description)|
|`<area>`|Clickable area inside image map|
|`<base>`|Base URL for relative links|
|`<col>`|Column properties for `<colgroup>`|
|`<embed>`|Embeds external content (e.g., video)|
|`<source>`|Media source for `<audio>` or `<video>`|
|`<track>`|Subtitles and captions for media|
|`<wbr>`|Word break opportunity|

---

### 🚫 What You Can’t Do

```html
<br>This is invalid</br> <!-- ❌ Invalid -->
```

---

### ✅ Correct Usage Example

```html
<p>Line one.<br>Line two.</p>
<img src="image.jpg" alt="A picture">
```

---

### 🏷️ Tags

#html #void-element #empty #beginner

---

Would you like me to create a reusable Obsidian template for HTML elements like this?