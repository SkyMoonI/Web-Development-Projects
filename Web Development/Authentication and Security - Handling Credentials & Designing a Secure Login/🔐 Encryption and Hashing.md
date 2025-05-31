
---

## 🧠 What Are Encryption and Hashing?

Both **encryption** and **hashing** transform data into another form — but they serve **very different purposes** in **security and authentication**.

---

## 🔐 **Encryption**

> **Purpose**: Protect **confidentiality** of data during storage or transmission.

- **Two-way** process: Data can be **encrypted** and **decrypted**.
    
- Requires a **key** (or pair of keys in asymmetric encryption).
    
- Common in **secure communications** (e.g., HTTPS, JWT tokens, emails).
    

### ✉️ Example

```plaintext
Original:  Hello
Encrypted: Ksj82!skx%
Decrypted: Hello
```

### 🔑 Types of Encryption

|Type|Description|
|---|---|
|**Symmetric**|Same key used to encrypt and decrypt|
|**Asymmetric**|Uses a **public/private key pair**|

---

## 🧂 **Hashing**

> **Purpose**: Verify **integrity** or **identity** (like passwords).

- **One-way**: Cannot reverse a hash back to original data.
    
- Output is **fixed-length**, even if input size varies.
    
- Same input → always same output.
    
- Used in **password storage**, **file integrity**, etc.
    

### Example (using SHA-256)

```plaintext
Input:  password123
Hash:   ef92b778ba... (fixed-length output)
```

---

## 🔒 Hashing with Salt

> **Salting** adds a random string to the input **before hashing** to increase security.

```js
const bcrypt = require("bcrypt");
const saltRounds = 10;
bcrypt.hash("mypassword", saltRounds, (err, hash) => {
  // Store hash in DB
});
```

✅ Prevents attackers from using precomputed tables (rainbow tables).  
✅ Makes identical passwords generate **different hashes**.

---

## ⚖️ Comparison Table

|Feature|Encryption|Hashing|
|---|---|---|
|Direction|Two-way (reversible)|One-way (irreversible)|
|Use Case|Secure transmission|Password storage, checksums|
|Can Decrypt?|Yes|No|
|Output|Variable|Fixed-length|
|Key Required|Yes|No (but salt is used)|

---

## ✅ When to Use What?

- Use **encryption** when data needs to be **read again** (e.g., messages, tokens).
    
- Use **hashing** when data **doesn't need to be reversed**, only **verified** (e.g., passwords).
    

---

## 🏷️ Tags

#security #hashing #encryption #bcrypt #passwords #authentication #backend

---

Let me know when you’re ready to move to **user login**, **sessions**, or **token-based authentication**!