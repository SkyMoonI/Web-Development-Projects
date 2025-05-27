
---

## 🔄 UPDATE – Modifying Existing Data

The `UPDATE` command lets you **modify existing records** in a table.

### 🔧 Syntax

```sql
UPDATE table_name
SET column_name = new_value
WHERE condition;
```

> ⚠️ Always use `WHERE` to avoid updating **all rows**.

---

### 📦 Example: Update a User's Email

```sql
UPDATE users
SET email = 'newemail@example.com'
WHERE id = 1;
```

✅ This changes the email for the user whose `id` is 1.

---

### 🛑 Without WHERE (Danger!)

```sql
UPDATE users
SET email = 'default@example.com';
```

🚨 **Warning:** This updates **every user’s email**.

---

## ➕ ALTER TABLE – Adding a New Column

You can **extend a table’s schema** by adding a new column.

### 🔧 Syntax

```sql
ALTER TABLE table_name
ADD column_name data_type;
```

---

### 📦 Example: Add a "birthday" Column

```sql
ALTER TABLE users
ADD birthday DATE;
```

✅ Now each user can have a birthday value stored.

---

### 📌 Notes

- You can use `ALTER TABLE` for:
    
    - Adding columns
        
    - Dropping columns
        
    - Changing data types
        

---

## 🏷️ Tags

#sql #database #update #alter #columns #data #backend #webdev

---

Let me know when you're ready to go over `DELETE`, `ORDER BY`, `LIMIT`, or more advanced joins!