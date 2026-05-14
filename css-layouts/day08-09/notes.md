# Day 08 & 09 - CSS Layouts and Flexbox

---

# 1. Layouts in CSS

## Definition

Layouts define how webpage elements are arranged.

Modern CSS layouts:
- Flexbox
- Grid

---

# 2. Flexbox

## Definition

Flexbox is a one-dimensional layout system.

Used for:
- Alignment
- Spacing
- Positioning
- Responsive layouts

---

# Enable Flexbox

```css
display:flex;
```

---

# Tailwind Equivalent

```html
flex
```

---

# 3. Flex Direction

Controls direction of items.

---

# a. Row

Items arranged horizontally.

### CSS

```css
flex-direction:row;
```

### Tailwind

```html
flex-row
```

---

# b. Column

Items arranged vertically.

### CSS

```css
flex-direction:column;
```

### Tailwind

```html
flex-col
```

---

# 4. Main Axis and Cross Axis

Flexbox works using two axes.

---

# Main Axis

Direction in which items move.

Depends on `flex-direction`.

---

# Cross Axis

Perpendicular direction to main axis.

---

# Example

## If Direction = Row

```txt
Main Axis  → Horizontal
Cross Axis → Vertical
```

---

## If Direction = Column

```txt
Main Axis  → Vertical
Cross Axis → Horizontal
```

---

# 5. Justify Content

Controls movement along main axis.

---

# Common Values

| Value | Purpose |
|-----|-----|
| flex-start | Start |
| center | Center |
| flex-end | End |
| space-between | Equal space between |
| space-around | Space around items |
| space-evenly | Equal spacing everywhere |

---

# Example

```css
justify-content:center;
```

### Tailwind

```html
justify-center
```

---

# 6. Align Items

Controls movement along cross axis.

---

# Example

```css
align-items:center;
```

### Tailwind

```html
items-center
```

---

# 7. Why Flexbox is Divided into 9 Blocks

Flexbox alignment combines:
- 3 horizontal positions
- 3 vertical positions

This creates:
```txt
3 × 3 = 9 positions
```

---

# Example Positions

```txt
Top Left
Top Center
Top Right

Center Left
Center
Center Right

Bottom Left
Bottom Center
Bottom Right
```

---

# 8. Moving Objects Using Justify and Items

---

# Direction = Row

## Main Axis → Horizontal

Use:
```css
justify-content
```

to move left/right.

Use:
```css
align-items
```

to move up/down.

---

# Example

```css
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
```

Object moves to center.

---

# Direction = Column

## Main Axis → Vertical

Use:
```css
justify-content
```

to move up/down.

Use:
```css
align-items
```

to move left/right.

---

# Example

```css
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
```

---

# 9. Grid Layout

## Definition

Grid is a two-dimensional layout system.

Used for:
- Rows
- Columns
- Complex layouts

---

# Enable Grid

```css
display:grid;
```

---

# Tailwind Equivalent

```html
grid
```

---

# Example

```css
grid-template-columns:1fr 1fr;
```

---

# Tailwind

```html
grid-cols-2
```

---

# 10. Media Queries

## Definition

Media queries make webpages responsive.

Responsive means:
- Adapts to different screen sizes.

---

# Example

```css
@media(max-width:768px){
    body{
        background:red;
    }
}
```

---

# Tailwind Responsive Prefixes

| Prefix | Screen |
|-----|-----|
| sm | Small |
| md | Medium |
| lg | Large |
| xl | Extra Large |

---

# Example

```html
text-sm md:text-xl lg:text-3xl
```

---

# Important Points

- Flexbox is one-dimensional.
- Grid is two-dimensional.
- Justify works on main axis.
- Items works on cross axis.
- Media queries improve responsiveness.
- Tailwind provides utility classes for layouts.