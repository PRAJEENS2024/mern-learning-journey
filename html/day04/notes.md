# Day 04 - HTML Forms, SEO and Git Config

---

# 1. Git Config Username and Email

Git uses username and email to identify commits.

These details appear in GitHub commit history.

---

## Set Username

```bash
git config --global user.name "Your Name"
```

---

## Set Email

```bash
git config --global user.email "yourmail@example.com"
```

---

## Check Configuration

```bash
git config --list
```

---

# 2. Website Deployment

## Definition

Deployment means making a website available on the internet.

After deployment:
- Anyone can access the website using a URL.

---

# Common Deployment Platforms

- GitHub Pages
- Netlify
- Vercel

---

# Basic Deployment Process

1. Create project
2. Push project to GitHub
3. Connect deployment platform
4. Deploy project
5. Get live URL

---

# 3. HTML Forms

## Definition

Forms are used to collect user input.

Examples:
- Login page
- Registration form
- Feedback form

---

# Main Form Tags

| Tag | Purpose |
|-----|-----|
| `<form>` | Creates form |
| `<input>` | Input field |
| `<label>` | Label for input |
| `<textarea>` | Multi-line text |
| `<button>` | Button |
| `<select>` | Dropdown list |

---

# Common Input Types

| Type | Purpose |
|-----|-----|
| text | Text input |
| email | Email input |
| password | Password input |
| number | Numeric input |
| radio | Single selection |
| checkbox | Multiple selection |

---

# 4. Browser vs Search Engine

| Browser | Search Engine |
|-----|-----|
| Software application | Web service |
| Used to access websites | Used to search websites |
| Example: Chrome | Example: Google |
| Displays webpages | Finds webpages |

---

# Browser Examples

- Google Chrome
- Firefox
- Edge
- Safari

---

# Search Engine Examples

- Google
- Bing
- Yahoo

---

# 5. SEO

## Definition

SEO stands for Search Engine Optimization.

It is the process of improving website visibility in search engines.

Goal:
- Increase website traffic
- Improve ranking in search results

---

# Types of SEO

---

## a. Paid SEO

Website owner pays search engine for advertisements.

Example:
- Google Ads

### Advantages
- Faster visibility

### Disadvantages
- Requires money

---

## b. Organic SEO

Website ranks naturally without payment.

Based on:
- Content quality
- Keywords
- Website structure
- Performance

---

# 6. Working of Organic SEO

Search engines use bots called crawlers.

---

# Steps

## Step 1 - Crawling

Search engine bots scan webpages.

---

## Step 2 - Indexing

Pages are stored in search engine database.

---

## Step 3 - Ranking

Search engine ranks pages based on:
- Content quality
- Keywords
- Backlinks
- User experience
- Page speed

---

# Good Organic SEO Practices

- Use proper headings
- Add meaningful content
- Use semantic tags
- Optimize images
- Improve page speed

---

# 7. Meta Tag

## Definition

Meta tags provide webpage information to browser and search engines.

Written inside `<head>` tag.

---

# Common Meta Tags

## Charset

```html
<meta charset="UTF-8">
```

Defines character encoding.

---

## Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Makes webpage responsive.

---

## Description

```html
<meta name="description" content="HTML learning page">
```

Provides webpage description for search engines.

---

# 8. Favicon

## Definition

Favicon is the small icon shown in browser tab.

---

# Example

```html
<link rel="icon" href="favicon.ico">
```

---

# 9. Semantic Tags

## Definition

Semantic tags clearly describe the meaning of content.

They improve:
- SEO
- Readability
- Accessibility

---

# Common Semantic Tags

| Tag | Purpose |
|-----|-----|
| `<header>` | Top section |
| `<nav>` | Navigation links |
| `<main>` | Main content |
| `<section>` | Section of content |
| `<article>` | Independent article |
| `<footer>` | Bottom section |

---

# Advantages of Semantic Tags

- Better SEO
- Better code readability
- Easier maintenance
- Improved accessibility

---

# Important Points

- Git config identifies commits.
- Forms collect user input.
- Browsers display websites.
- Search engines search websites.
- SEO improves website visibility.
- Semantic tags improve webpage structure.