# Day 13 - Header Section and Deployment

---

# 1. Header Section

## Definition

Header is the top section of webpage.

Usually contains:
- Logo
- Navigation
- Hero content
- Buttons
- Intro text

---

# Semantic Header Tag

```html
<header>
</header>
```

---

# Common Header Properties

| Property | Purpose |
|-----|-----|
| background-image | Hero background |
| h-screen | Full screen height |
| flex | Alignment |
| justify-center | Vertical alignment |
| items-center | Horizontal alignment |

---

# Example

```html
<header class="h-screen flex justify-center items-center">
</header>
```

---

# 2. Viewport

## Definition

Viewport means visible area of browser screen.

Depends on:
- Mobile
- Tablet
- Laptop
- Desktop

---

# Viewport Height

Represents visible screen height.

Unit:
```txt
vh
```

---

# Example

```css
height:100vh;
```

Meaning:
- Takes full screen height.

---

# Viewport Width

Represents visible screen width.

Unit:
```txt
vw
```

---

# Example

```css
width:100vw;
```

Meaning:
- Takes full screen width.

---

# 3. w-screen in Tailwind

## Definition

`w-screen` means:
```txt
width:100vw;
```

Takes full viewport width.

---

# Example

```html
<div class="w-screen">
</div>
```

---

# 4. h-screen in Tailwind

## Definition

`h-screen` means:
```txt
height:100vh;
```

Takes full viewport height.

---

# Example

```html
<div class="h-screen">
</div>
```

---

# Common Usage

```html
<div class="w-screen h-screen">
</div>
```

Used for:
- Hero sections
- Landing pages
- Fullscreen layouts

---

# 5. Firebase Deployment

## Definition

Firebase Hosting is a Google service used to deploy websites.

---

# Advantages

- Fast hosting
- Free tier available
- HTTPS support
- Easy deployment

---

# Firebase Deployment Steps

---

# Step 1 - Install Firebase CLI

```bash
npm install -g firebase-tools
```

---

# Step 2 - Login Firebase

```bash
firebase login
```

---

# Step 3 - Initialize Firebase

```bash
firebase init
```

Select:
- Hosting

---

# Step 4 - Build Project

For simple HTML projects:
- no build needed

For React/Vite:
```bash
npm run build
```

---

# Step 5 - Deploy

```bash
firebase deploy
```

---

# Output

Firebase provides:
```txt
Live project URL
```

---

# 6. GitHub Pages Deployment

## Definition

GitHub Pages hosts static websites directly from GitHub repository.

---

# Supported Projects

- HTML
- CSS
- JavaScript
- Static frontend projects

---

# GitHub Pages Deployment Steps

---

# Step 1

Push project to GitHub.

---

# Step 2

Open repository.

---

# Step 3

Go to:
```txt
Settings → Pages
```

---

# Step 4

Select:
```txt
Branch → main
```

---

# Step 5

Click:
```txt
Save
```

---

# Output

GitHub provides:
```txt
Live project URL
```

Example:

```txt
https://username.github.io/project-name
```

---

# Firebase vs GitHub Pages

| Firebase | GitHub Pages |
|-----|-----|
| Supports dynamic hosting | Mainly static hosting |
| Faster advanced deployment | Easier beginner deployment |
| Better scaling | Simpler setup |
| Google service | GitHub service |

---

# 7. Important Deployment Notes

---

# Before Deployment

Always check:
- Responsive design
- Broken links
- Missing images
- Console errors

---

# Best Practice

Deploy every completed project.

Why?
- Builds portfolio
- Helps revision
- Improves confidence
- Creates public work samples

---

# Important Points

- Header section is webpage introduction area.
- `w-screen` uses viewport width.
- `h-screen` uses viewport height.
- Firebase supports modern hosting.
- GitHub Pages is good for static projects.