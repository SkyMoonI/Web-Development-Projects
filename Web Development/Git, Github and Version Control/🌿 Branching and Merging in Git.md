
---

## 🧠 What Is Branching?

**Branching** in Git allows you to diverge from the main line of development and work on features, experiments, or bug fixes **without affecting the main codebase**.

> Think of a branch as a **copy of your codebase** where you can make changes independently.

---

### 📌 Why Use Branches?

✅ Isolate development work  
✅ Prevent breaking the `main` branch  
✅ Collaborate with others without interference  
✅ Easier to manage features, fixes, and experiments

---

## 🌱 Creating and Using Branches

### 🔧 Create a Branch

```bash
git branch feature-xyz
```

This creates a new branch named `feature-xyz`.

---

### 🔀 Switch to a Branch

```bash
git checkout feature-xyz
```

OR (in newer versions of Git):

```bash
git switch feature-xyz
```

---

### 🆕 Create and Switch in One Step

```bash
git checkout -b feature-xyz
```

---

### 📂 See All Branches

```bash
git branch
```

---

## 🧬 Merging Branches

Once your work is done, **merge** the feature branch into `main`.

### 🔁 Step 1: Switch to Main

```bash
git checkout main
```

---

### 🔁 Step 2: Merge Feature Branch into Main

```bash
git merge feature-xyz
```

Git will try to **auto-merge** the changes.

---

### ⚔️ What If There's a Conflict?

If Git can't auto-merge, it will show **merge conflicts** in the file(s):

```plaintext
<<<<<<< HEAD
Your current code
=======
Code from feature branch
>>>>>>> feature-xyz
```

You’ll need to **manually edit the file** to resolve the conflict, then:

```bash
git add .
git commit
```

---

### 🧹 Optional: Delete the Branch

After merging:

```bash
git branch -d feature-xyz
```

---

## 🧭 Visual Flow

```bash
main
  ├───┐
      │ (create & switch)
    feature-xyz
      │ (develop)
      ▼
    commit
      │
      ▼
(merge into main)
```

---

## 🔁 Summary Commands

|Task|Command|
|---|---|
|Create branch|`git branch feature-name`|
|Switch branch|`git checkout feature-name` or `git switch feature-name`|
|Create & switch|`git checkout -b feature-name`|
|Merge branch|`git merge feature-name`|
|Delete branch|`git branch -d feature-name`|

---

### 🏷️ Tags

#git #branching #merging #featuredevelopment #versioncontrol #conflicts #workflow

---

Let me know when you're ready to move on to **Pull Requests** or more advanced workflows like **rebasing** or **stash**!