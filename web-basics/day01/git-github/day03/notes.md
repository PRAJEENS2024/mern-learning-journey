# Day 03 - Git and GitHub Basics

---

# 1. Git

## Definition

Git is a Distributed Version Control System (DVCS).

It helps developers:
- Track file changes
- Manage source code
- Collaborate with teams
- Restore previous versions of files

Git works locally on the system.

---

# 2. GitHub

## Definition

GitHub is a cloud-based platform used to store Git repositories online.

It allows developers to:
- Upload projects
- Share code
- Collaborate with others
- Maintain project history

GitHub uses Git internally.

---

# Difference Between Git and GitHub

| Git | GitHub |
|-----|-----|
| Version control tool | Online hosting platform |
| Works locally | Works on cloud |
| Tracks changes | Stores repositories online |
| Installed in system | Accessed through internet |

---

# 3. Version Control System (VCS)

## Definition

A Version Control System helps manage changes in files over time.

It stores:
- Previous versions
- Updates
- Modifications
- Collaboration history

---

# Types of Version Control Systems

---

## a. LVCS

Local Version Control System

Stores versions only in local computer.

### Advantages
- Simple
- Fast

### Disadvantages
- No collaboration
- Risk of data loss

---

## b. CVCS

Centralized Version Control System

Uses one central server.

Example:
- SVN

### Working
- All users connect to one central server.

### Advantages
- Easy collaboration

### Disadvantages
- If server fails, work may be lost.

---

## c. DVCS

Distributed Version Control System

Every developer has a complete copy of repository.

Example:
- Git

### Advantages
- Faster
- Offline work possible
- Better backup
- Safer than CVCS

---

# 4. How Git Works

Git mainly works in three stages.

---

## a. Working Directory

The place where project files are created and modified.

---

## b. Staging Area

Temporary area where selected changes are prepared before commit.

Command:
```bash
git add .
```

---

## c. Repository

Permanent storage area for project history.

Command:
```bash
git commit -m "message"
```

---

# Git Workflow

```txt
Working Directory
        ↓
   Staging Area
        ↓
    Repository
        ↓
      GitHub
```

---

# 5. Repository

## Definition

A repository is a project folder managed by Git.

It contains:
- Project files
- Commit history
- Git configuration

---

# 6. Commit

## Definition

A commit is a saved snapshot of project changes.

Each commit has:
- Unique ID
- Message
- Time history

Example:
```bash
git commit -m "Added HTML notes"
```

---

# 7. Branch

## Definition

A branch is a separate line of development.

Default branch:
```txt
main
```

Branches help developers work on features independently.

---

# Important Points

- Git tracks project changes.
- GitHub stores repositories online.
- DVCS is safer and more flexible.
- Commits save project history.
- Git workflow uses working directory, staging area, and repository.