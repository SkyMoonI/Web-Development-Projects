
---
### 🧠 What Are EJS Tags?

**EJS (Embedded JavaScript)** uses special **tag syntax** to embed JavaScript directly inside your HTML templates. These tags determine what gets rendered and how logic is handled inside the template.

---

### 🔤 EJS Tag Types

|Tag|Purpose|Description|
|---|---|---|
|`<%= %>`|Output Escaped|Prints the value and escapes HTML (safe for browser)|
|`<%- %>`|Output Unescaped|Prints raw HTML without escaping (⚠️ dangerous if not sanitized)|
|`<% %>`|Scriptlet|Runs JavaScript logic (loops, conditionals) without rendering output|
|`<%_ _%>`|Trim-mode Scriptlet|Same as `<% %>` but removes trailing line break|
|`<%# %>`|Comment|Adds a comment that won’t appear in the rendered HTML|
|`<%%` / `%%>`|Literal delimiters|Outputs raw `<%` or `%>` characters (used rarely)|

---

### 🧪 Examples

#### ✅ `<%= %>` — Escaped Output

```ejs
<h1>Hello, <%= user %></h1>
```

- Input: `"Alice <script>alert(1)</script>"`
    
- Output: `Hello, Alice &lt;script&gt;alert(1)&lt;/script&gt;`
    

---

#### ❗ `<%- %>` — Unescaped Output

```ejs
<%- htmlContent %>
```

- Input: `"<strong>Important</strong>"`
    
- Output: `<strong>Important</strong>` (renders actual HTML)
    

---

#### 🔁 `<% %>` — Logic Only

```ejs
<% if (isLoggedIn) { %>
  <p>Welcome back!</p>
<% } %>
```

- Nothing is rendered unless `isLoggedIn` is `true`.
    

---

#### 🔄 Loop Example

```ejs
<ul>
  <% items.forEach(item => { %>
    <li><%= item %></li>
  <% }); %>
</ul>
```

---

#### 💬 `<%# %>` — Comment

```ejs
<%# This is a server-side comment and won’t appear in HTML %>
```

---

### ✂️ Trim Whitespace

```ejs
<%_ let x = 5; _%>
```

Removes the newlines/whitespace around the tag. Useful for cleaner HTML output.

---

### 🏷️ Tags

#ejs #tags #templating #javascript #html #express #output #logic

---

Let me know when you're ready to move on to **EJS Partials** or **Routing with Parameters**!