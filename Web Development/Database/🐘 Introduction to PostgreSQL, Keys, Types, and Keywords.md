
---

## 🧠 What is PostgreSQL?

**PostgreSQL (Postgres)** is a powerful, open-source **object-relational database system**.

✅ Known for:

- Strong **data integrity**
    
- Full SQL support + **advanced features**
    
- Supports **JSON**, **custom types**, **extensions**, and **concurrency**
    

---

## 🗝️ Primary and Foreign Keys in Postgres

### 🔑 Primary Key

A **unique identifier** for each row in a table.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT
);
```

- `SERIAL` auto-generates an incrementing integer.
    
- `PRIMARY KEY` ensures uniqueness.
    

### 🔗 Foreign Key

Used to link records between tables.

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product TEXT
);
```

- `REFERENCES users(id)` links to `users.id`
    
- Ensures **relational integrity**
    

---

## 📦 Common Postgres Data Types

|Type|Description|
|---|---|
|`SERIAL`|Auto-incrementing integer (often used for PKs)|
|`INTEGER`|Whole numbers|
|`TEXT`|Variable-length string|
|`VARCHAR(n)`|String with max length `n`|
|`BOOLEAN`|`TRUE`, `FALSE`|
|`DATE`|Stores a calendar date|
|`TIMESTAMP`|Stores date and time|
|`JSON`|Stores JSON data|

---

## 🔤 Postgres SQL Keywords

|Keyword|Purpose|
|---|---|
|`CREATE TABLE`|Defines a new table|
|`PRIMARY KEY`|Declares a primary key|
|`FOREIGN KEY`|Declares a foreign key|
|`REFERENCES`|Establishes relationship|
|`SERIAL`|Auto-increment integer|
|`NOT NULL`|Disallows null values|
|`DEFAULT`|Sets a default value|
|`INSERT INTO`|Adds data to a table|
|`SELECT`|Reads data from tables|
|`UPDATE`|Changes existing data|
|`DELETE`|Removes data from tables|

---

## 🧪 Example Table

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- `DEFAULT` makes Postgres auto-fill values.
    
- `NOT NULL` ensures required fields.
    

---

## 🏷️ Tags

#postgres #sql #database #keys #primarykey #foreignkey #datatypes #keywords #backend

---

Let me know when you're ready to explore Postgres CLI commands, psql, or advanced features like constraints or indexing!