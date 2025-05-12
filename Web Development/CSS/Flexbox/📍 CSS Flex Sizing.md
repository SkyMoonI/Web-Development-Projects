
Here’s a clear, structured Obsidian note explaining **how flex items grow and shrink** inside a flex container — one of the most powerful parts of CSS Flexbox.

---

### 🧠 What Is Flex Sizing?

Flex sizing allows flex items to **expand** or **contract** based on the available space in the container. It uses three properties:

- `flex-grow` — how much an item **grows** when there’s **extra space**
    
- `flex-shrink` — how much an item **shrinks** when there’s **not enough space**
    
- `flex-basis` — the item’s **initial size** before growing/shrinking
    

You can combine them using the shorthand `flex`.

---

### 🧰 The `flex` Shorthand

```css
.item {
  flex: 1 1 auto;
}
```

|Part|Purpose|
|---|---|
|`1`|`flex-grow` (can grow)|
|`1`|`flex-shrink` (can shrink)|
|`auto`|`flex-basis` (initial size)|

---

### 🌱 `flex-grow`

Controls how much a flex item **grows** relative to its siblings when there is **extra space**.

```css
.item {
  flex-grow: 2;
}
```

- Higher numbers = more growth
    
- `0` means **don’t grow at all**
    
- If one item has `2` and another has `1`, the first gets **twice as much** extra space
    

---

### 🧊 `flex-shrink`

Controls how much a flex item **shrinks** when space is **tight**.

```css
.item {
  flex-shrink: 1;
}
```

- Higher numbers = shrink **more**
    
- `0` means **don’t shrink at all**
    
- Used when you want some items to stay big while others shrink
    

---

### 📦 Example

```css
.container {
  display: flex;
}

.item1 {
  flex: 2 1 100px;
}

.item2 {
  flex: 1 1 100px;
}
```

- Both items start at 100px.
    
- If there’s extra space, `.item1` grows twice as much as `.item2`.
    
- If there’s not enough space, both can shrink equally.
    

---

### 📝 Flex Defaults

If you just write:

```css
.item {
  flex: 1;
}
```

It’s the same as:

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

Meaning:

- Grow and shrink as needed
    
- Start from **0 size**, then fill up available space
    

---

### 🧠 When to Use

- Use `flex-grow` to make items **expand** proportionally
    
- Use `flex-shrink` to let less important items **give up space**
    
- Use `flex: 1` to make elements share space **equally**
    

---

### 🏷️ Tags

#css #flexbox #layout #responsive #flex-grow #flex-shrink #flex

---
