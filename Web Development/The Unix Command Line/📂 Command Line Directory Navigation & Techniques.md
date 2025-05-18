
---

### 🧭 Navigating the File System

The command line lets you move through your system’s **file tree** using simple commands.

---

### 📌 Key Navigation Commands

|Command|Description|
|---|---|
|`pwd`|**Print Working Directory** — shows your current location|
|`ls`|**List** files and directories in current folder|
|`cd folderName`|**Change Directory** to specified folder|
|`cd ..`|Go **up one level**|
|`cd /`|Go to **root directory**|
|`cd ~`|Go to **home directory**|
|`cd -`|Switch to **previous directory**|

---

### 📁 Example

```bash
pwd
# /home/user/projects

cd ..
# now in /home/user

cd Documents/notes
# navigates into a nested folder
```

---

### 📄 Listing Files

```bash
ls            # basic list
ls -l         # long list with details
ls -a         # includes hidden files
ls -lah       # all + human-readable sizes
```

---

### 📂 Creating and Managing Files/Folders

|Command|Description|
|---|---|
|`mkdir folderName`|Create new folder|
|`touch file.txt`|Create empty file|
|`rm file.txt`|Delete file|
|`rm -r folder`|Delete folder recursively|
|`cp file1.txt file2.txt`|Copy file|
|`mv old.txt new.txt`|Rename or move file/folder|

---

### 🧠 Pro Tips

- Use **Tab** to auto-complete folder/file names.
    
- Use `clear` to clean the terminal screen.
    
- Combine commands using `&&`:
    
    ```bash
    cd myfolder && ls
    ```
    

---

### 🧰 Useful Flags & Shortcuts

|Symbol|Purpose|
|---|---|
|`.`|Current directory|
|`..`|Parent directory|
|`~`|Home directory|
|`/`|Root directory|
|`-`|Last visited directory|

---

### 🏷️ Tags

#unix #cli #commandline #navigation #bash #linux #developer-tools #filesystem

---

Ready to go deeper into **file permissions**, **chaining commands**, or **CLI search tools (like `grep` or `find`)**? Let me know!