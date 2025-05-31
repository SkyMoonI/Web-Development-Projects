
---

## 🧠 What Is Salting?

**Salting** is the process of adding a **random string** (called a **salt**) to a password **before hashing** it. This dramatically increases password security by making each password hash **unique**, even if two users have the **same password**.

> ✅ Salting protects against:
> 
> - Rainbow table attacks
>     
> - Precomputed hash database attacks
>     
> - Users having same password hashes
>     

---

## 🔐 Why Not Just Hash?

Without salting:

```plaintext
"password123" → abcdef123456
"password123" → abcdef123456 (same hash every time!)
```

With salting:

```plaintext
"password123" + salt1 → d3f45s6...
"password123" + salt2 → a1b2c3d...
```

🔒 Even if two users have the **same password**, their **hashes will be different** because of the unique salt.

---

## 🛠️ How Salting Works (with `bcrypt`)

`bcrypt` is a **library** that automatically salts and hashes passwords.

### ✅ Step-by-Step

```bash
npm install bcrypt
```

### 🔁 Hashing with Salt

```js
const bcrypt = require("bcrypt");
const saltRounds = 10; // The cost factor (more rounds = more secure but slower)

const plainPassword = "mySecretPassword";

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log("Salted & Hashed Password:", hash);
  // Store this hash in the database
});
```

- `bcrypt.hash()`:
    
    - Automatically **generates a salt**
        
    - Combines it with the password
        
    - Hashes the result
        

---

## 🔍 Verifying a Password

When a user logs in, compare the password they enter with the stored hash:

```js
bcrypt.compare("mySecretPassword", storedHash, (err, result) => {
  if (result) {
    console.log("Password is correct");
  } else {
    console.log("Invalid password");
  }
});
```

`bcrypt.compare()` internally:

- Retrieves the salt from the stored hash
    
- Hashes the input password with that salt
    
- Compares both hashes
    

---

## 🧠 Recap

|Concept|Purpose|
|---|---|
|Salt|Random string added to password|
|Hash|One-way encrypted output|
|`bcrypt.hash()`|Automatically adds salt|
|`bcrypt.compare()`|Verifies password against hash|

---

## 🏷️ Tags

#security #bcrypt #hashing #salting #authentication #passwords #nodejs #backend

---

Ready to move on to **registering users**, **login sessions**, or **token-based auth (JWT)**?