
---

## 🧠 What Are SQL Relationships?

In relational databases, **relationships** define how data in **one table** relates to data in **another table**. This enables **data normalization** and avoids duplication.

There are **3 main types** of relationships:

---

## 1️⃣ One-to-One (1:1)

### ✅ Use Case:

Each record in **Table A** relates to **exactly one** record in **Table B**.

### 🧱 Example:

A `user` has one `profile`.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT
);

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(id),
  bio TEXT
);
```

- `UNIQUE` ensures only **one profile per user**.
    
- `user_id` is a **foreign key** in `profiles`.
    

```
users        profiles
-----        --------
id  ←─────── user_id
```

---

## 2️⃣ One-to-Many (1:N)

### ✅ Use Case:

One record in **Table A** relates to **multiple** records in **Table B**.

### 🧱 Example:

A `user` can write many `posts`.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title TEXT
);
```

- One `user` → many `posts`
    
- `user_id` in `posts` **references** `users(id)`
    

```
users        posts
-----        -----
id  ←─────── user_id
            title
```

---

## 3️⃣ Many-to-Many (M:N)

### ✅ Use Case:

Many records in **Table A** relate to many records in **Table B**.

### 🧱 Example:

A `student` can enroll in many `courses`, and each `course` can have many `students`.

👉 We use a **junction table** to model this.

```sql
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE enrollments (
  student_id INTEGER REFERENCES students(id),
  course_id INTEGER REFERENCES courses(id),
  PRIMARY KEY (student_id, course_id)
);
```

- `enrollments` table links `students` ↔ `courses`
    

```
students       enrollments       courses
--------       -----------       -------
id  ───────┐   student_id ──┐    id
name       └── course_id  ──┘──> name
```

---

## 🧠 Summary Table

|Relationship Type|Description|Common Use Case|
|---|---|---|
|One-to-One|1 record in A → 1 record in B|user ↔ profile|
|One-to-Many|1 record in A → many in B|user → posts|
|Many-to-Many|many in A ↔ many in B (via junction)|students ↔ courses|

---

## 🏷️ Tags

#sql #postgres #relationships #database #foreignkey #onetoone #onetomany #manytomany #normalization #backend

---

Let me know if you’d like a **cheat sheet** version or want to explore **cascading actions** (`ON DELETE CASCADE`, `ON UPDATE CASCADE`) or **indexing foreign keys**!