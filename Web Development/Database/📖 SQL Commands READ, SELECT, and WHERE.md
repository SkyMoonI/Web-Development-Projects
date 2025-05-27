
---

## 🧠 What Are These?

These commands are used to **read and filter data** from SQL databases:

- `SELECT` → Fetches data from tables.
    
- `WHERE` → Filters records based on conditions.
    

---

## 🔍 SELECT – Reading Data

### 🔧 Syntax

```sql
SELECT column1, column2 FROM table_name;
```

### 📦 Example

```sql
SELECT name, email FROM users;
```

✅ This returns the `name` and `email` of all users in the `users` table.

### 🌐 Select All Columns

```sql
SELECT * FROM users;
```

This retrieves **all columns** from the `users` table.

---

## 🎯 WHERE – Filtering Data

### 🔧 Syntax

```sql
SELECT column1 FROM table_name
WHERE condition;
```

### 📦 Example

```sql
SELECT name FROM users
WHERE age > 25;
```

This fetches users whose age is **greater than 25**.

---

## 🔣 Common WHERE Operators

|Operator|Description|Example|
|---|---|---|
|`=`|Equal to|`age = 30`|
|`!=`|Not equal to|`name != 'Alice'`|
|`>`|Greater than|`age > 25`|
|`<`|Less than|`age < 18`|
|`>=`|Greater than or equal|`age >= 21`|
|`<=`|Less than or equal|`age <= 65`|
|`AND`|Combine conditions|`age > 18 AND age < 30`|
|`OR`|Either condition true|`name = 'Bob' OR age = 25`|
|`LIKE`|Pattern match|`name LIKE 'A%'`|
|`IN`|Match multiple values|`age IN (25, 30, 35)`|

---

## 🧪 Examples with WHERE

### Filter by Exact Match

```sql
SELECT * FROM users
WHERE email = 'alice@email.com';
```

### Filter by Partial Match

```sql
SELECT * FROM users
WHERE name LIKE 'A%';
```

Returns all users whose names **start with "A"**.

---

## 🏷️ Tags

#sql #database #select #read #where #querying #backend #webdev

---

Let me know when you're ready to explore `UPDATE`, `DELETE`, or advanced filtering with `ORDER BY` and `LIMIT`.