Here’s a clear **Obsidian-style note** explaining how to create **flexible layouts** in Flexbox using `align`, `justify`, and `wrap`.

---

**Aligning, justifying, and wrapping items dynamically**

---

### 📌 What Makes Flexbox "Flexible"?

Flexbox layouts adapt to screen sizes and content by using three key properties:

1. `justify-content` → horizontal alignment on **main axis**
    
2. `align-items` → vertical alignment on **cross axis**
    
3. `flex-wrap` → allows items to wrap onto new lines
    

---

## 🔄 `justify-content`

**Aligns items along the main axis**

|Value|Effect|
|---|---|
|`flex-start`|Items align to the start of the container|
|`flex-end`|Items align to the end|
|`center`|Items center themselves|
|`space-between`|Even spacing between items|
|`space-around`|Equal space around items|
|`space-evenly`|Equal space between and around items|

```css
.container {
  justify-content: center;
}
```

---

## 🎯 `align-items`

**Aligns items along the cross axis**

|Value|Description|
|---|---|
|`stretch`|(default) items stretch to fill container|
|`flex-start`|items align to the start of cross axis|
|`flex-end`|items align to the end of cross axis|
|`center`|items centered vertically (in row layout)|
|`baseline`|aligns items by text baseline|

```css
.container {
  align-items: flex-start;
}
```

---

## 🔁 `flex-wrap`

**Allows flex items to wrap onto multiple lines**

|Value|Description|
|---|---|
|`nowrap`|(default) All items in one line|
|`wrap`|Items wrap to next line if needed|
|`wrap-reverse`|Items wrap in reverse order|

```css
.container {
  flex-wrap: wrap;
}
```

---

### 🧪 Example: Full Flexible Layout

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
```

---

### 🏷️ Tags

#css #flexbox #responsive #justify-content #align-items #flex-wrap

---

Would you like a small demo or visual representation of each property?