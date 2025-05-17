
---

### 🔍 Selecting Elements with jQuery

Use CSS-style selectors inside the `$()` function to target HTML elements.

```js
$("h1");          // Selects all <h1> elements
$(".btn");        // Selects all elements with class 'btn'
$("#title");      // Selects the element with id 'title'
```

✅ You can also combine selectors:

```js
$("h1, p, .box");  // Select multiple types
```

---

### 🎨 Manipulating Styles with jQuery

#### 📌 `.css("property", "value")`

```js
$("h1").css("color", "blue");
```

#### 📌 Multiple styles with chaining:

```js
$("h1").css("font-size", "3rem").css("color", "red");
```

> ✅ jQuery does **not recommend** using `.css()` for big style changes. Use classes instead for maintainability.

#### 📌 Add/Remove/Toggle CSS Classes

```js
$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").toggleClass("big-title");
```

---

### 📝 Manipulating Text with jQuery

#### 📌 `.text()`

Changes the **text content** of elements.

```js
$("h1").text("Hello, jQuery!");
```

#### 📌 `.html()`

Inserts **HTML code**.

```js
$("h1").html("<em>Hello</em> jQuery!");
```

✅ `.html()` allows for **formatting**, but be cautious with **user input** to avoid XSS vulnerabilities.

---

### 🧬 Manipulating Attributes with jQuery

#### 📌 `.attr("attribute")` – Get or set attributes

```js
$("img").attr("src");                         // Get
$("img").attr("src", "new-image.jpg");        // Set
```

#### 📌 Change `href` of links:

```js
$("a").attr("href", "https://google.com");
```

#### 📌 Use `.attr()` to dynamically update:

```js
$("input").attr("placeholder", "Enter email");
```

---

### 🧠 Summary

|Feature|Method|
|---|---|
|Select elements|`$()`|
|Change styles|`.css()`, `.addClass()`|
|Change text|`.text()`, `.html()`|
|Change attributes|`.attr()`|

---

### 🏷️ Tags

#jquery #dom #selectors #style #text #attributes #frontend #webdev

---

Next up: Want to explore **event handling**, **animations**, or **DOM tree traversal** in jQuery?