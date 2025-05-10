
### 🧠 Summary

**CSS selectors** are patterns used to **target specific HTML elements** so you can apply styles to them.  
They’re the first part of a CSS rule and determine **what gets styled**.

---

### 🧬 Basic Syntax of a CSS Rule

```css
selector {
  property: value;
}
```

🔹 Example:

```css
p {
  color: red;
}
```

This selects all `<p>` elements and makes their text red.

---

### 🧾 Common Types of Selectors

#### 1️⃣ **Type Selector**

Targets all elements of a specific type (tag name).

```css
h1 {
  font-size: 30px;
}
```

#### 2️⃣ **Class Selector**

Targets elements with a specific class.

```html
<p class="highlight">This is important</p>
```

```css
.highlight {
  background-color: yellow;
}
```

➡ Use `.` before class name.

#### 3️⃣ **ID Selector**

Targets an element with a specific ID (should be unique).

```html
<p id="main-paragraph">Main text</p>
```

```css
#main-paragraph {
  font-weight: bold;
}
```

➡ Use `#` before ID name.

#### 4️⃣ **Universal Selector**

Applies to _all_ elements.

```css
* {
  margin: 0;
  padding: 0;
}
```

#### 5️⃣ **Group Selector**

Applies the same style to multiple selectors.

```css
h1, h2, p {
  font-family: Arial;
}
```

#### 6️⃣ **Descendant Selector**

Targets elements _inside_ another element.

```css
div p {
  color: gray;
}
```

➡ Selects all `<p>` elements _inside_ a `<div>`

#### 7 **Attribute Selector**

Targets elements based on their attributes and values.

```css
li[values="4"]{
  color: gray;
}
```

➡ Selects all `<p>` elements _inside_ a `<div>`
---

### 🧠 Specificity Rule

When multiple selectors apply, **CSS chooses the most specific one**:

|Selector Type|Specificity|
|---|---|
|Inline style|Highest|
|ID (`#id`)|High|
|Class (`.class`), Attribute, Pseudo-class|Medium|
|Element (`div`, `p`)|Low|
|Universal (`*`)|Lowest|

---

### 🏷️ Tags

#css #selectors #targeting #beginner

---
