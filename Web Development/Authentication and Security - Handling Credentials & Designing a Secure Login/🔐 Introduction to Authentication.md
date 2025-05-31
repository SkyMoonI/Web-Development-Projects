
---

## 🧠 What is Authentication?

**Authentication** is the process of **verifying a user’s identity**. It ensures that users are who they claim to be before granting access to secure parts of an application.

💬 Think of it as the **“login process”** that asks:

> _Who are you, and how can you prove it?_

---

## 🆔 Common Methods of Authentication

|Method|Description|
|---|---|
|**Username & Password**|Most common method, credentials stored in a database (hashed & salted).|
|**Token-Based**|Server issues tokens (e.g., JWT) to verify identity on each request.|
|**OAuth**|Delegated login using third-party services (Google, GitHub, etc.).|
|**Biometric**|Fingerprints, facial recognition (mostly for mobile/web apps).|
|**Two-Factor (2FA)**|Adds a second verification step (email, SMS, app-based codes).|

---

## 🧩 Authentication vs. Authorization

|Term|What it does|Example|
|---|---|---|
|**Authentication**|Confirms **who** the user is|Logging in with email & password|
|**Authorization**|Determines **what** they can access|Checking if user is an admin|

---

## 🔐 Secure Practices for Authentication

✅ Always:

- **Hash passwords** before storing (e.g., bcrypt)
    
- Use **HTTPS** to protect data in transit
    
- Add **rate limiting** to prevent brute-force attacks
    
- Implement **secure session or token handling**
    
- Store secrets (e.g., keys) in **environment variables**
    

---

## 🛡️ Why Is It Important?

- Prevents unauthorized access to user accounts & sensitive data
    
- Protects your app from common threats (e.g., credential stuffing, account takeover)
    
- Forms the **foundation for secure authorization and role-based access**
    

---

## 🏷️ Tags

#authentication #security #login #credentials #websecurity #fullstack #backend

---

Let me know when you’re ready to move on to **handling passwords securely** or **designing login forms and logic**!