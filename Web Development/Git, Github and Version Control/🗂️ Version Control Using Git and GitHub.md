
---

### 🧠 What Is Version Control?

Version control is a system that tracks **changes to your code over time**, allowing you to:

- Revert to earlier versions
    
- Work collaboratively without overwriting each other's work
    
- Understand the history of a project
    

Git is a **distributed version control system**; GitHub is a **remote hosting service** for Git repositories.

---

## 🧰 Git Basics in the Command Line

### 📦 Initializing a Repository

```bash
git init
```

Initializes a new Git repository in your project folder.

---

### 📝 Tracking Changes

```bash
git add filename
git add .          # Adds all files
git commit -m "Your message"
```

- `git add`: Stages changes
    
- `git commit`: Saves the snapshot with a message
    

---

### 🔍 Viewing Status and History

```bash
git status         # See current changes
git log            # View commit history
```

---

### 🔄 Updating Code

```bash
git diff           # View unstaged changes
git diff --staged  # View staged changes
```

---

## 🧭 Branching

```bash
git branch feature-x       # Create new branch
git checkout feature-x     # Switch to branch
git merge feature-x        # Merge changes
```

- Great for adding features or testing without affecting the main code.
    

---

## 🌍 GitHub and Remote Repositories

### 🔑 Setup

1. Create a repo on [GitHub](https://github.com/)
    
2. Copy the remote URL
    

```bash
git remote add origin https://github.com/user/repo.git
```

---

### ⬆️ Pushing Changes

```bash
git push -u origin main
```

Pushes your local commits to GitHub. The `-u` sets the upstream branch.

---

### ⬇️ Cloning a Repo

```bash
git clone https://github.com/user/repo.git
```

Creates a copy of the remote repository on your machine.

---

### 🔄 Pulling Changes

```bash
git pull origin main
```

Fetches and merges changes from GitHub into your local repo.

---

## 🛠️ Common Workflow

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <URL>
git push -u origin main
```

---

### 🔒 Authentication

Use **SSH keys** or **GitHub CLI** for secure access and fewer password prompts.

---

### ✅ Summary of Key Commands

|Task|Command|
|---|---|
|Initialize Git|`git init`|
|Check status|`git status`|
|Stage files|`git add .`|
|Commit changes|`git commit -m "msg"`|
|View history|`git log`|
|Add remote|`git remote add origin <url>`|
|Push to GitHub|`git push -u origin main`|
|Pull from GitHub|`git pull origin main`|
|Clone repo|`git clone <url>`|

---

### 🏷️ Tags

#git #github #versioncontrol #commandline #vcs #collaboration #terminal #workflow

---

Let me know when you move on to **Markdown**, **pull requests**, or more advanced Git workflows!