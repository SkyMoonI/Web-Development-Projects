
---

This note explains the **core layout system** of Bootstrap: the **12-column responsive grid**, powered by **Flexbox** and built for **mobile-first design**.

---

### 🧠 What Is the Bootstrap Grid?

Bootstrap uses a **flexible 12-column grid system** to build responsive layouts. It helps you align content in rows and columns that **adapt to screen size**.

✅ Think of it like LEGO blocks:  
Each row is made of 12 “slots”, and you decide how many each column takes.

---

### 🧱 Structure

```html
<div class="container">
  <div class="row">
    <div class="col">1 of 2</div>
    <div class="col">2 of 2</div>
  </div>
</div>
```

- `.container` or `.container-fluid` → Wraps all content
    
- `.row` → Groups columns horizontally
    
- `.col`, `.col-6`, etc. → Defines column width (out of 12)
    

---

### 🧩 Column Widths

#### ✅ Auto Columns

```html
<div class="col">Auto Width</div>
```

Divides space **equally** between columns.

#### 🔢 Fixed Columns

```html
<div class="col-4">Takes 4/12</div>
<div class="col-8">Takes 8/12</div>
```

Use values from `1` to `12`.

---

### 📱 Responsive Columns

Bootstrap lets you define column widths **per breakpoint**:

```html
<div class="col-sm-6 col-md-4 col-lg-3">Responsive column</div>
```

|Class|Min Width|Device Type|
|---|---|---|
|`col-`|<576px|Extra small phones|
|`col-sm-`|≥576px|Small devices|
|`col-md-`|≥768px|Medium devices|
|`col-lg-`|≥992px|Large devices|
|`col-xl-`|≥1200px|Extra large|
|`col-xxl-`|≥1400px|Extra extra large|

---

### 🔁 Wrapping Rows

If the sum of column widths in a `.row` > 12, the extra columns **wrap to the next line**.

```html
<div class="col-8">Big</div>
<div class="col-6">Too much → wraps</div>
```

---

### 🎯 Alignment & Spacing

#### Horizontal Alignment

```html
<div class="row justify-content-center">
  <div class="col-6">Centered column</div>
</div>
```

|Class|Description|
|---|---|
|`justify-content-start`|Align left (default)|
|`justify-content-center`|Center horizontally|
|`justify-content-end`|Align right|

#### Vertical Alignment

```html
<div class="row align-items-center">
  <div class="col">Center vertically</div>
</div>
```

|Class|Description|
|---|---|
|`align-items-start`|Top align|
|`align-items-center`|Vertical center|
|`align-items-end`|Bottom align|

---

### 📦 Example: 3 Columns

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">1/3</div>
    <div class="col-md-4">1/3</div>
    <div class="col-md-4">1/3</div>
  </div>
</div>
```

✅ Each takes 4 out of 12 columns → Total = 12

---

### 🧼 Gutter & Gap Control

Use Bootstrap’s **spacing utilities** or `.g-*` classes to control spacing between columns.

```html
<div class="row g-3"> <!-- adds gutter between cols -->
```

Or use margin utilities:

```html
<div class="col mt-3 mb-2">With vertical spacing</div>
```

---

### 📝 Summary

- Grid = Rows + Columns inside a container
    
- Columns divide space using 12-part system
    
- Use `col-*` to define size per screen breakpoint
    
- Layout is powered by **Flexbox**
    
- Gutter spacing via `g-*` or margin/padding utilities
    

---

### 🏷️ Tags

#css #bootstrap #layout #grid #responsive #12column #flexbox #bootstrap-grid

---

