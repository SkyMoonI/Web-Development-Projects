
### 🧠 Summary

CSS provides various **font-related properties** to style text. These include changing the **font family, size, weight, style**, and more.

---

### 🧾 Common Font Properties

#### 1️⃣ `font-family`

Specifies the **font type** used for text.

```css
p {
  font-family: Arial, sans-serif;
}
```

- Always list **fallback fonts** (e.g., `sans-serif`, `serif`, `monospace`)
    
- Font names with spaces must be in **quotes**:
    
    ```css
    font-family: "Open Sans", sans-serif;
    ```
    

---

#### 2️⃣ `font-size`

Controls the **size** of the text.

```css
p {
  font-size: 16px;
}
```

📏 Units:

- `px`: Pixels (fixed size)
    
- `em`, `rem`: Relative to parent or root font-size
    
- `%`: Relative percentage
    

---

#### 3️⃣ `font-weight`

Sets the **thickness (boldness)** of text.

```css
p {
  font-weight: bold;
}
```

Or numeric values:

```css
font-weight: 100; /* thin */
font-weight: 400; /* normal */
font-weight: 700; /* bold */
```

---

#### 4️⃣ `font-style`

Used to make text **italic** or **oblique**.

```css
p {
  font-style: italic;
}
```

Options: `normal`, `italic`, `oblique`

---

#### 5️⃣ `font-variant`

Controls small caps.

```css
p {
  font-variant: small-caps;
}
```

---

#### 6️⃣ `line-height`

Controls the **vertical space** between lines of text.

```css
p {
  line-height: 1.5;
}
```

Common values: number (`1.5`), length (`20px`), or percentage (`150%`)


---

### ✨ Shorthand: `font` Property

```css
p {
  font: italic small-caps bold 16px/1.5 "Roboto", sans-serif;
}
```

🧩 Format:

```css
font: [style] [variant] [weight] [size]/[line-height] [family];
```

---

### 🧠 Tip: Web Safe Fonts

Some commonly available fonts:

- Arial
    
- Helvetica
    
- Times New Roman
    
- Georgia
    
- Courier New
    
- Verdana
    

---

### 📦 Google Fonts (optional for later)

You can import custom fonts using Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

Then use it in CSS:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

---

### 🏷️ Tags

#css #fonts #text #typography #beginner

---

## ✨ CSS Text Properties – Aligning and Formatting Text

### 🧠 Summary

CSS offers several properties to **control the layout, spacing, and transformation** of text. These properties help you fine-tune **readability and design**.

---

### 🧾 Common Text Properties

#### 1️⃣ `text-align`

Controls **horizontal alignment** of text within its container.

```css
p {
  text-align: center;
}
```

Options:

- `left` (default)
    
- `right`
    
- `center`
    
- `justify` (aligns both edges)
    

---

#### 2️⃣ `text-transform`

Changes the **capitalization** of text.

```css
p {
  text-transform: uppercase;
}
```

Options:

- `none` (default)
    
- `capitalize` (first letter of each word)
    
- `uppercase`
    
- `lowercase`
    

---

#### 3️⃣ `letter-spacing`

Adjusts the **space between letters**.

```css
p {
  letter-spacing: 2px;
}
```

Useful for stylized headings or logo text.

---

#### 4️⃣ `word-spacing`

Controls the **space between words**.

```css
p {
  word-spacing: 1em;
}
```

---

#### 5️⃣ `line-height`

(Already covered under font properties, but worth repeating)

Controls the **vertical space** between lines of text.

```css
p {
  line-height: 1.6;
}
```

---

#### 6️⃣ `text-decoration`

Adds **lines** to the text.

```css
a {
  text-decoration: none;
}
```

Options:

- `none`
    
- `underline`
    
- `overline`
    
- `line-through`
    

---

#### 7️⃣ `text-indent`

Adds indentation to the **first line** of text.

```css
p {
  text-indent: 2em;
}
```

---

### 🔍 Additional Useful Properties

|Property|What It Does|
|---|---|
|`white-space`|Controls text wrapping|
|`direction`|Sets text direction (LTR/RTL)|
|`overflow-wrap`|Breaks long words into next line|

---

### 🧠 Tips

- Use `text-align: justify;` for magazine-style paragraph alignment.
    
- Avoid too much `letter-spacing` or `word-spacing` for body text.
    
- Remove `text-decoration` on links only if you're replacing it with another visual cue.
    

---

### 🏷️ Tags

#css #text #typography #alignment #spacing #beginner

---
