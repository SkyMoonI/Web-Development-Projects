
---

## 🍴 What is Forking?

### 🧠 Concept

**Forking** is the process of **copying someone else's repository** from GitHub into **your own GitHub account**.

> This lets you make changes freely **without affecting the original project**.

---

### 🔧 Why Fork?

✅ Contribute to open source projects  
✅ Experiment with the project safely  
✅ Submit improvements or bug fixes  
✅ Maintain your own version of a project

---

### 🔨 How to Fork a Repository

1. Go to a GitHub repo.
    
2. Click the **"Fork"** button (top-right).
    
3. GitHub creates a copy under your username.
    

You now have full control over the forked repo.

---

## ⬇️ Clone Your Fork

After forking, clone it to your local machine:

```bash
git clone https://github.com/your-username/repo-name.git
```

---

## 🔃 Keep Fork Up to Date (Optional)

To sync your fork with the original repo:

```bash
git remote add upstream https://github.com/original-owner/repo-name.git
git fetch upstream
git merge upstream/main
```

---

## 📩 What is a Pull Request?

### 🧠 Concept

A **Pull Request (PR)** is how you ask the **original repository owner** to **pull your changes** into their project.

It’s GitHub’s way of contributing to others’ repositories.

---

### 🔧 Steps to Create a Pull Request

1. **Fork** the repo
    
2. **Clone** it locally
    
3. **Create a new branch** and make your changes
    
4. **Push** changes to your GitHub fork
    
5. Go to your fork on GitHub and click **“New Pull Request”**
    

---

### ✅ Best Practices for PRs

- Use **clear and descriptive branch names** (`fix-button-alignment`, `add-feature-x`)
    
- Write **good commit messages**
    
- Add a **description** explaining what the PR does and why
    
- Be open to **feedback and changes**
    

---

### 🧭 Visual Flow

```plaintext
[original repo] ---> [your fork] ---> [your local changes]
                                  ↑
                             Pull Request
                                  ↓
                         [contribution to original]
```

---

## 🔁 Summary

|Action|Description|
|---|---|
|Fork|Copy a repo to your GitHub account|
|Clone|Download fork to your local machine|
|Pull Request|Ask to merge your changes into the original repo|
|Upstream|Original repo used to sync your fork|

---

### 🏷️ Tags

#git #github #forking #pullrequest #opensource #collaboration #versioncontrol #workflow

---

Let me know when you're ready to dive into **Markdown**, **README.md writing**, or more GitHub best practices!