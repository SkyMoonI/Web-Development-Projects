
---

## ✏️ UPDATE — Modify Data in a Table

Use the `UPDATE` statement to **change existing data** in a table.

### 🧱 Syntax:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### ✅ Example:

Change a user’s username:

```sql
UPDATE users
SET username = 'new_name'
WHERE id = 1;
```

🔒 **Always use `WHERE`** — without it, **all rows** will be updated!

---

## ❌ DELETE — Remove Data from a Table

Use the `DELETE` statement to **remove specific rows** from a table.

### 🧱 Syntax:

```sql
DELETE FROM table_name
WHERE condition;
```

### ✅ Example:

Delete a specific user:

```sql
DELETE FROM users
WHERE id = 3;
```

❗ Missing `WHERE` deletes **all records** in the table.

---

## 💥 DROP — Delete the Entire Table (Schema and Data)

Use `DROP TABLE` to permanently **remove the table and all its data**.

### 🧱 Syntax:

```sql
DROP TABLE table_name;
```

### ✅ Example:

```sql
DROP TABLE users;
```

This **removes the table completely** — can’t be undone!

---

## 🧹 TRUNCATE — Delete All Data, Keep Table Structure

Use `TRUNCATE` to **quickly delete all rows** in a table but keep the schema intact.

### 🧱 Syntax:

```sql
TRUNCATE TABLE table_name;
```

### ✅ Example:

```sql
TRUNCATE TABLE users;
```

- ⚡ Much **faster** than `DELETE FROM table_name;`
    
- Cannot be rolled back in some SQL engines!
    

---

## 🧠 Summary

|Command|Purpose|Reversible|
|---|---|---|
|`UPDATE`|Modify specific row(s)|✅ Yes (with backup)|
|`DELETE`|Remove specific row(s)|✅ Yes (with backup)|
|`DROP`|Remove entire table (structure & data)|❌ No|
|`TRUNCATE`|Clear all data, keep structure|⚠️ Sometimes|

---

## 🛡️ Pro Tips

- Use `SELECT` with `WHERE` first to verify what rows you're affecting before running `UPDATE` or `DELETE`.
    
- Always back up critical data before running destructive operations.
    
- Consider wrapping in transactions (`BEGIN; ... COMMIT;`) for safety.
    

---

## 🏷️ Tags

#sql #update #delete #drop #truncate #postgres #backend #databasemanagement

---

Let me know if you want this as a **cheat sheet** or integrated into your vault with examples from your full-stack project!