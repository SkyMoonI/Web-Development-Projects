
---

## ❓ What is `DELETE`?

The `DELETE` command in SQL is used to **remove rows** from a table based on a condition.

> ⚠️ Be careful! This operation **permanently removes data**.

---

## 🔧 Syntax

```sql
DELETE FROM table_name
WHERE condition;
```

> Always include a `WHERE` clause to avoid deleting **all records**.

---

## 📦 Example: Delete a User

```sql
DELETE FROM users
WHERE id = 3;
```

✅ This deletes the row where the `id` is `3`.

---

## 💣 Dangerous Use – Without WHERE

```sql
DELETE FROM users;
```

🚨 **WARNING**: Deletes **all records** in the `users` table!

---

## 🔍 Safe Practice – Test with SELECT First

```sql
SELECT * FROM users
WHERE last_login < '2022-01-01';
```

👀 Check the results first…

Then:

```sql
DELETE FROM users
WHERE last_login < '2022-01-01';
```

🧼 Deletes inactive users safely.

---

## 🏷️ Tags

#sql #database #delete #data #backend #webdev #crud

---

Let me know if you want to go over `ORDER BY`, `LIMIT`, `JOINs`, or start diving into NoSQL next!