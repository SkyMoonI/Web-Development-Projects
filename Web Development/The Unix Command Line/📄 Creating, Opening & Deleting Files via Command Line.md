
---

### 🛠️ Creating Files

There are several ways to create a file from the terminal:

#### ➕ `touch`

```bash
touch file.txt
```

- Creates an **empty file** named `file.txt`
    
- If the file exists, it **updates the timestamp**
    

---

#### ✏️ Using Redirect Operator `>`

```bash
> file.txt
```

- Also creates an empty file
    
- Overwrites if the file already exists
    

---

#### ⌨️ Using `echo`

```bash
echo "Hello World" > file.txt
```

- Creates a file with **initial content**
    
- Overwrites existing content
    

```bash
echo "Another Line" >> file.txt
```

- **Appends** to existing content
    

---

### 📂 Creating Multiple Files

```bash
touch file1.txt file2.txt file3.md
```

- Quickly creates multiple files in one command
    

---

### 📖 Opening Files

Command line doesn’t "open" files like double-clicking, but you can **view/edit** them with:

|Command|Purpose|
|---|---|
|`cat file.txt`|Displays contents of file|
|`nano file.txt`|Opens file in a simple CLI text editor|
|`less file.txt`|Opens file in paginated viewer|
|`code file.txt`|Opens file in VS Code (if installed)|

---

### ❌ Deleting Files

Use `rm` (remove):

```bash
rm file.txt
```

- Deletes a file permanently — **no trash bin!**
    

---

### ⚠️ Safe Deletion

```bash
rm -i file.txt
```

- Asks for confirmation before deleting
    

---

### 🗃️ Deleting Multiple Files

```bash
rm file1.txt file2.txt
```

```bash
rm *.log
```

- `*` wildcard deletes all `.log` files in the current directory
    

---

### 🧠 Tip: Be Careful!

- There’s **no undo** with `rm`
    
- Always double-check paths and filenames before hitting Enter
    

---

### 🏷️ Tags

#unix #commandline #cli #bash #files #filemanagement #developer-tools

---

Want to learn about **editing files**, **file permissions**, or **moving/copying files** next? Let me know!