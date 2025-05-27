
---

## 🧠 What Are SQL Commands?

SQL (Structured Query Language) lets you **interact with relational databases**. Two of the most foundational commands are:

- `CREATE TABLE`: Defines the structure of a new table.
    
- `INSERT INTO`: Adds new records (rows) to that table.
    

---

## 🏗️ CREATE TABLE

Use this command to define a **new table** and its **columns** (with their data types).

### 🔧 Syntax

```sql
CREATE TABLE table_name (
  column1 datatype constraints,
  column2 datatype constraints,
  ...
);
```

### 📦 Example

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  age INTEGER
);
```

### 🔍 Breakdown

|Column|Type|Description|
|---|---|---|
|`id`|INTEGER|Unique ID for each user (auto-generated)|
|`name`|TEXT|User’s name, required (`NOT NULL`)|
|`email`|TEXT|Must be unique and not empty|
|`age`|INTEGER|Optional age of the user|

---

## 📝 INSERT INTO

Adds a **new row** of data to the table.

### 🔧 Syntax

```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

### 📦 Example

```sql
INSERT INTO users (name, email, age)
VALUES ('Alice', 'alice@email.com', 25);
```

You can insert **multiple rows** at once:

```sql
INSERT INTO users (name, email, age)
VALUES 
  ('Bob', 'bob@email.com', 30),
  ('Charlie', 'charlie@email.com', 28);
```

---

## 🚨 Notes & Tips

- Always match the **number of columns** with the **number of values**.
    
- `PRIMARY KEY` can be auto-incremented to avoid manual IDs.
    
- `NOT NULL` prevents insertion of empty fields.
    
- `UNIQUE` ensures no duplicates (e.g., for emails).
    

---

## 🏷️ Tags

#sql #database #createtable #insert #mysql #postgresql #sqlite #backend #webdev

---

Let me know when you want to move to **reading data with `SELECT`** or updating/deleting rows.