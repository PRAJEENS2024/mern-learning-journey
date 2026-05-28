# Deployment Commands

---

# GitHub Push

```bash
git add .
git commit -m "Added project"
git push
```

---

# Firebase Deployment

## Install Firebase CLI

```bash
npm install -g firebase-tools
```

---

## Login Firebase

```bash
firebase login
```

---

## Initialize Firebase

```bash
firebase init
```

Select:
```txt
Hosting
```

---

## Deploy Project

```bash
firebase deploy
```

---

# GitHub Pages Deployment

## Steps

1. Push repository to GitHub
2. Open repository settings
3. Open Pages section
4. Select branch
5. Save settings
6. Get live URL