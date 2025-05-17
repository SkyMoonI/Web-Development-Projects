
---

### 🎯 Adding Event Listeners with jQuery

jQuery makes it super easy to add interactivity using `.on()` or shortcut methods like `.click()`, `.keypress()`, etc.

#### 🖱️ `.click()` – Mouse click event

```js
$("button").click(function () {
  $("h1").css("color", "purple");
});
```

#### ⌨️ `.keypress()` – Keyboard input

```js
$(document).keypress(function (event) {
  $("h1").text(event.key);
});
```

#### 🌐 `.on(event, handler)` – General method

```js
$("h1").on("mouseover", function () {
  $(this).css("color", "orange");
});
```

✅ Use `.on()` for any type of event, including custom ones.

---

### ➕➖ Adding and Removing Elements with jQuery

You can easily modify the DOM by adding or removing elements.

#### 🧱 Add Elements:

- `.before()` – Insert **before** selected element
    
- `.after()` – Insert **after** selected element
    
- `.prepend()` – Insert **inside**, **before first child**
    
- `.append()` – Insert **inside**, **after last child**
    

```js
$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Start</button>");
$("h1").append("<button>End</button>");
```

#### 🧹 Remove Elements:

```js
$("button").remove();  // Removes all button elements
```

✅ Use `.remove()` to clean the DOM dynamically.

---

### 🎬 Website Animations with jQuery

jQuery provides simple animation methods to create smooth effects.

#### 🔽 `.hide()` / `.show()` / `.toggle()`

```js
$("h1").hide();      // Hides the element
$("h1").show();      // Shows the element
$("h1").toggle();    // Toggles visibility
```

#### 📏 `.fadeIn()` / `.fadeOut()` / `.fadeToggle()`

```js
$("h1").fadeOut();
$("h1").fadeIn();
$("h1").fadeToggle();
```

#### 🎚️ `.slideUp()` / `.slideDown()` / `.slideToggle()`

```js
$("h1").slideUp();
$("h1").slideDown();
$("h1").slideToggle();
```

#### 🛠️ `.animate()` – Custom animations

```js
$("h1").animate({ opacity: 0.5 });
```

✅ Combine animations with **event listeners** for interactive effects!

---

### 🧠 Summary

|Feature|jQuery Method|
|---|---|
|Event listeners|`.click()`, `.keypress()`, `.on()`|
|Add elements|`.before()`, `.append()`|
|Remove elements|`.remove()`|
|Visibility animation|`.hide()`, `.show()`, `.toggle()`|
|Fade / Slide|`.fadeIn()`, `.slideUp()`|
|Custom animation|`.animate()`|

---

### 🏷️ Tags

#jquery #events #dom #animation #interactivity #frontend #webdev

---

Let me know when you're ready to move on to **Bootstrap or React**, or want to explore **AJAX with jQuery**.