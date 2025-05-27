
---

## 🧠 Why Relationships Matter

In **relational databases**, tables are connected through **relationships**.

- Instead of duplicating data, we **link** it using **keys**.
    
- This keeps the database **normalized**, organized, and efficient.
    

---

## 🔑 Primary Key vs Foreign Key

|Type|Description|
|---|---|
|**Primary Key**|Unique identifier for a row in its own table|
|**Foreign Key**|A field in one table that refers to a **Primary Key in another table**|

---

### 📦 Example

**Users Table**

|id (PK)|name|
|---|---|
|1|Alice|
|2|Bob|

**Orders Table**

|id (PK)|user_id (FK)|item|
|---|---|---|
|1|1|Laptop|
|2|2|Phone|
|3|1|Mouse|

Here, `user_id` in the **Orders** table is a **foreign key** linking to `id` in **Users**.

---

## 🧱 Creating a Foreign Key

```sql
CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  item TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

✅ This sets up a proper **relational link** between `orders` and `users`.

---

## 🤝 INNER JOIN – Combining Data

Use `INNER JOIN` to **combine rows** from two or more tables **where there's a match** between related columns.

---

### 🔧 Syntax

```sql
SELECT users.name, orders.item
FROM users
INNER JOIN orders
ON users.id = orders.user_id;
```

### 📦 Result

|name|item|
|---|---|
|Alice|Laptop|
|Bob|Phone|
|Alice|Mouse|

✅ Joins the tables based on matching `id` from `users` with `user_id` from `orders`.

---

## 💡 Tip

- `INNER JOIN` only returns rows where **matches exist in both tables**.
    
- Use `LEFT JOIN` or `RIGHT JOIN` to include unmatched rows.
    

---

## 🏷️ Tags

#sql #database #foreignkey #primarykey #join #innerjoin #relationships #backend

---

Let me know when you're ready for more advanced joins like `LEFT JOIN`, `RIGHT JOIN`, or `MANY-TO-MANY` relationships!