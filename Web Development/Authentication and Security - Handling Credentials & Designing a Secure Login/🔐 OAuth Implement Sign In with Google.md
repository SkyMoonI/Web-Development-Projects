
---

## 🧠 What is OAuth?

**OAuth** (Open Authorization) is a secure way for users to **grant access** to their data (e.g. email, profile info) on one site without sharing passwords.

### ✅ Why Use It?

- Secure authentication without storing user passwords
    
- Easy sign-in experience (e.g. "Sign in with Google")
    
- Delegates identity to trusted third-party providers
    

---

## 🔧 Tools Required

- [Google Developer Console](https://console.developers.google.com/)
    
- [Passport.js](http://www.passportjs.org/) (authentication middleware for Node.js)
    
- `passport-google-oauth20` package
    

---

## ⚙️ Step-by-Step Implementation

### 1. 🧪 Set Up Google OAuth Credentials

1. Go to Google Developer Console
    
2. Create a new **OAuth 2.0 Client ID**
    
3. Set **Authorized Redirect URI**:
    
    ```
    http://localhost:3000/auth/google/callback
    ```
    
4. Copy your **Client ID** and **Client Secret**
    

---

### 2. 📦 Install Required Packages

```bash
npm install passport passport-google-oauth20 express-session
```

---

### 3. 🔐 Configure Environment Variables

In your `.env` file:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
SESSION_SECRET=someSecretValue
```

---

### 4. 🧠 Configure Passport Strategy

```js
// auth.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  // Find or create user in database
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
```

---

### 5. 🧱 Set Up Express Server with Sessions

```js
// server.js or app.js
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth'); // The file where strategy is configured

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
```

---

### 6. 🧭 Set Up Google Auth Routes

```js
// Redirect user to Google login
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google redirects back to this route
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);
```

---

### 7. 👮 Protect Private Routes

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

app.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.send(`Welcome ${req.user.displayName}`);
});
```

---

### 8. 🔚 Logging Out

```js
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});
```

---

## ✅ Example Flow

1. User clicks **Sign in with Google**
    
2. Redirected to Google for login
    
3. Google sends user info to your app
    
4. You authenticate the user using `passport-google-oauth20`
    
5. Store user info in session and redirect to protected page
    

---

## 🏷️ Tags

#oauth #authentication #google #passportjs #nodejs #express #security #session #env

---

Let me know if you want to expand this with MongoDB user storage or deploy it securely.