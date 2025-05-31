
---

## 🧠 What Is User Registration?

User **registration** is the process of **creating an account** by collecting the user's **email, password**, and possibly other details. This data is securely stored in a database and used later for authentication (login).

---

## 🧾 Typical Registration Flow

1. **User fills out a registration form** (email + password).
    
2. **Server receives data** via a POST request.
    
3. **Password is hashed** using a library (e.g., `bcrypt`).
    
4. **User info is saved** in the database.
    
5. **Response** is sent back (e.g., "Account created").
    

---

## 🔐 Password Security with `bcrypt`

Never store passwords in plain text. Instead:

```js
const bcrypt = require("bcrypt");
const saltRounds = 10;

bcrypt.hash(userPassword, saltRounds, function(err, hash) {
  // Save email and hash to DB
});
```

- `saltRounds`: Determines hashing complexity
    
- `hash`: Encrypted password stored in the DB
    

---

## 📬 Example Express Route for Registration

```js
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to DB (pseudo code)
    await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hashedPassword]);

    res.send("User registered successfully.");
  } catch (err) {
    res.status(500).send("Error registering user.");
  }
});
```

---

## 📁 What to Store in the Database

|Field|Notes|
|---|---|
|`email`|Should be unique (use constraint)|
|`password`|Always **hashed** with bcrypt|
|`id`|Unique identifier (e.g., UUID)|
|`created_at`|Optional timestamp|

---

## ⚠️ Best Practices

✅ Validate email format  
✅ Check password strength  
✅ Use HTTPS  
✅ Handle errors and edge cases  
✅ Prevent duplicate email registration  
✅ Sanitize and escape user inputs (to prevent SQL injection or XSS)

---

## 🏷️ Tags

#authentication #register #bcrypt #security #userauth #express #nodejs #backend

---

Let me know when you’re ready to move to **logging in users with sessions or tokens**!