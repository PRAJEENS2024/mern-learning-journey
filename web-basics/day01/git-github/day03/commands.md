# Basic Git Commands

---

# Initialize Git Repository

```bash
git init
```

Creates a new Git repository.

---

# Check Repository Status

```bash
git status
```

Shows:
- Modified files
- Staged files
- Untracked files

---

# Add Files to Staging Area

## Add Single File

```bash
git add file_name
```

## Add All Files

```bash
git add .
```

---

# Commit Changes

```bash
git commit -m "commit message"
```

Saves project changes permanently.

---

# Connect GitHub Repository

```bash
git remote add origin repository_link
```

---

# Push Code to GitHub

```bash
git push -u origin main
```

Uploads project to GitHub.

---

# Pull Latest Changes

```bash
git pull
```

Downloads latest repository updates.

---

# Clone Repository

```bash
git clone repository_link
```

Copies repository from GitHub to local system.

---

# View Commit History

```bash
git log
```

Shows commit history.

---

# Create New Branch

```bash
git branch branch_name
```

---

# Switch Branch

```bash
git checkout branch_name
```

---

# Create and Switch Branch

```bash
git checkout -b branch_name
```

---

# Important Notes

- Always check `git status`.
- Write meaningful commit messages.
- Commit regularly.
- Push changes after commit.