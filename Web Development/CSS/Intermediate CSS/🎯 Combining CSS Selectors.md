
**How to target specific elements with precision**

### 🧠 Summary

You can combine selectors in CSS to apply styles more precisely—like targeting only elements inside other elements, elements with multiple classes, or even siblings.

---

### 🔹 1️⃣ Descendant Selector ( – Space)

Targets elements **inside** another element (any level deep).

```css
div p {
  color: blue;
}
```

✅ Selects all `<p>` elements **inside** any `<div>`.

---

### 🔸 2️⃣ Child Selector (`>`)

Targets elements that are **direct children** (1 level deep).

```css
ul > li {
  font-weight: bold;
}
```

✅ Selects only `<li>` elements **directly inside** a `<ul>`.

---

### 🔹 3️⃣ Adjacent Sibling Selector (`+`)

Targets an element **immediately after** another.

```css
h1 + p {
  color: red;
}
```

✅ Styles a `<p>` that comes **right after** an `<h1>`.

---

### 🔸 4️⃣ General Sibling Selector (`~`)

Targets **all siblings** that come after a specified element.

```css
h1 ~ p {
  color: green;
}
```

✅ Styles **all `<p>` elements** after an `<h1>`, not just the first.

---

### 🔹 5️⃣ Grouping Selectors (`,`)

Apply the **same style to multiple selectors**.

```css
h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

✅ All headings will use the same font.

---

### 🔸 6️⃣ Combining Classes and IDs

```css
#menu .item {
  padding: 10px;
}
```

✅ Targets elements with class `item` **inside** an element with `id="menu"`.

---

### 🔹 7️⃣ Multiple Classes on One Element

You can target elements that have **multiple specific classes**.

```css
.button.primary {
  background-color: blue;
}
```

✅ Targets elements with **both** `button` and `primary` classes.

---

### 📎 Pro Tip: Chain Selectors for Precision

```css
div.article p.note span {
  color: purple;
}
```

✅ Styles `<span>` tags **inside** a `<p class="note">` inside a `<div class="article">`.

---

### 🏷️ Tags

#css #selectors #combinators #descendant #child #sibling #intermediate 

---
