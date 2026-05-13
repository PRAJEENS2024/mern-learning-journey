# Day 05 - CSS Basics

---

# 1. CSS

## Definition

CSS stands for Cascading Style Sheets.

It is used to style HTML webpages.

CSS controls:
- Colors
- Fonts
- Spacing
- Layout
- Alignment
- Animations

HTML creates structure.  
CSS improves appearance.

---

# 2. Types of CSS

---

## a. Inline CSS

CSS written directly inside HTML tag.

### Example

```html
<h1 style="color:red;">Hello</h1>
```

### Advantages
- Quick styling

### Disadvantages
- Hard to maintain

---

## b. Internal CSS

CSS written inside `<style>` tag in HTML file.

### Example

```html
<style>
h1{
    color:blue;
}
</style>
```

### Advantages
- Better than inline CSS

### Disadvantages
- Works only for single page

---

## c. External CSS

CSS written in separate `.css` file.

### Example

```html
<link rel="stylesheet" href="style.css">
```

### Advantages
- Reusable
- Easy maintenance
- Professional method

---

# 3. CSS Selectors

## Definition

Selectors are used to target HTML elements for styling.

---

# Types of Selectors

---

## a. Element Selector

Targets HTML tags.

### Example

```css
h1{
    color:red;
}
```

---

## b. Class Selector

Targets elements using class name.

Uses `.` symbol.

### Example

```css
.title{
    color:blue;
}
```

---

## c. ID Selector

Targets element using unique id.

Uses `#` symbol.

### Example

```css
#main{
    background-color:yellow;
}
```

---

## d. Universal Selector

Targets all elements.

Uses `*`

### Example

```css
*{
    margin:0;
}
```

---

# 4. CSS Block

## Definition

CSS block contains:
- Selector
- Property
- Value

### Syntax

```css
selector{
    property:value;
}
```

### Example

```css
h1{
    color:red;
    font-size:30px;
}
```

---

# 5. Semantic Tags

Semantic tags clearly define webpage structure.

---

# Common Semantic Tags

| Tag | Purpose |
|-----|-----|
| `<header>` | Top section |
| `<nav>` | Navigation links |
| `<section>` | Content section |
| `<article>` | Independent content |
| `<div>` | Generic container |
| `<footer>` | Bottom section |

---

# 6. Font Family

## Definition

Font family changes text style.

---

# Types of Fonts

---

## a. Default Fonts

Fonts already available in system/browser.

### Examples

- Arial
- Times New Roman
- Verdana

### Example

```css
body{
    font-family:Arial;
}
```

---

## b. Imported Fonts

Custom fonts imported from local files or CDN.

---

# Local Font

Stored inside project folder.

### Example

```css
@font-face{
    font-family:myFont;
    src:url(fonts/myfont.ttf);
}
```

---

# CDN Font

Loaded from internet.

Example:
Google Fonts

### Example

```html
<link 
href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" 
rel="stylesheet"
>
```

---

# 7. Working of Local and CDN Resources

---

## Local Resource

File stored inside project folder.

### Example
- Local image
- Local font
- Local CSS

### Advantages
- Works offline
- Faster in local system

---

## CDN Resource

File loaded from external server.

### Advantages
- Faster global delivery
- Easy to use
- Saves local storage

### Disadvantages
- Requires internet

---

# 8. Common CSS Properties

---

## a. font-size

Changes text size.

### Example

```css
font-size:20px;
```

---

## b. font-weight

Controls text thickness.

### Values
- normal
- bold

### Example

```css
font-weight:bold;
```

---

## c. font-style

Changes text style.

### Values
- normal
- italic

### Example

```css
font-style:italic;
```

---

## d. text-align

Aligns text.

### Values
- left
- center
- right

### Example

```css
text-align:center;
```

---

## e. text-transform

Changes letter format.

### Values
- uppercase
- lowercase
- capitalize

### Example

```css
text-transform:uppercase;
```

---

## f. color

Changes text color.

### Example

```css
color:red;
```

---

## g. background-color

Changes background color.

### Example

```css
background-color:yellow;
```

---

## h. margin

Creates outer spacing.

### Example

```css
margin:20px;
```

---

## i. padding

Creates inner spacing.

### Example

```css
padding:20px;
```

---

# Important Points

- CSS styles webpages.
- External CSS is most commonly used.
- Selectors target HTML elements.
- Semantic tags improve structure.
- Fonts can be default or imported.
- CDN resources load from internet servers.