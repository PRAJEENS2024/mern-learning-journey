# Day 10 - Grid Layout and Lucide Icons

---

# 1. CSS Grid

## Definition

Grid is a two-dimensional layout system.

Used for:
- Rows
- Columns
- Complex webpage layouts

Unlike Flexbox:
- Flexbox handles one direction.
- Grid handles both rows and columns.

---

# Enable Grid

## CSS

```css
display:grid;
```

---

## Tailwind

```html
grid
```

---

# 2. Container

## Definition

A container provides fixed width and center alignment.

Used to:
- Control content width
- Improve responsive design
- Prevent content from touching screen edges

---

# Tailwind Container

```html
container
```

---

# Example

```html
<div class="container mx-auto">
</div>
```

---

# Explanation

| Class | Purpose |
|-----|-----|
| container | Responsive width |
| mx-auto | Horizontal center |

---

# 3. Safe Container

## Definition

Safe container adds spacing inside container.

Usually created using:
- padding
- margin
- max-width

---

# Example

```html
<div class="container mx-auto px-5">
</div>
```

---

# 4. Grid Columns in Tailwind

Tailwind divides layout into 12 columns.

---

# Why 12 Columns?

12 is highly flexible because:
- divisible by 2
- divisible by 3
- divisible by 4
- divisible by 6

This allows easier responsive layouts.

---

# Grid Column Syntax

```html
grid-cols-12
```

Creates:
```txt
12 equal columns
```

---

# Example

```html
<div class="grid grid-cols-12 gap-5">

    <div class="col-span-6">
        Left
    </div>

    <div class="col-span-6">
        Right
    </div>

</div>
```

---

# Explanation

| Class | Purpose |
|-----|-----|
| grid | Enable grid |
| grid-cols-12 | Create 12 columns |
| col-span-6 | Take 6 columns |
| gap-5 | Space between items |

---

# 5. Responsive Device Sizes

Tailwind uses responsive breakpoints.

---

# Breakpoints

| Prefix | Minimum Width | Device |
|-----|-----|-----|
| sm | 640px | Mobile Large |
| md | 768px | Tablet |
| lg | 1024px | Laptop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Large Desktop |

---

# Example

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
</div>
```

---

# Meaning

| Screen | Columns |
|-----|-----|
| Mobile | 1 |
| Tablet | 2 |
| Laptop/Desktop | 4 |

---

# 6. Using Grid in Projects

Grid is mainly used for:
- Cards
- Dashboards
- Product sections
- Gallery layouts

---

# Example

```html
<div class="grid grid-cols-12 gap-5">

    <div class="col-span-12 md:col-span-6 lg:col-span-4">
        Card
    </div>

</div>
```

---

# Responsive Behavior

| Screen | Width Taken |
|-----|-----|
| Mobile | Full width |
| Tablet | Half width |
| Laptop | One-third width |

---

# 7. Lucide Icons

## Definition

Lucide is an open-source icon library.

Used in:
- React projects
- HTML projects
- Tailwind projects

Provides:
- Modern icons
- Lightweight design
- Customizable SVG icons

---

# Using Lucide Icons in HTML

---

# Step 1

Add CDN script.

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

---

# Step 2

Add icon element.

```html
<i data-lucide="menu"></i>
```

---

# Step 3

Initialize icons.

```html
<script>
    lucide.createIcons();
</script>
```

---

# Example Icons

| Icon Name |
|-----|
| menu |
| home |
| user |
| search |
| settings |
| heart |

---

# Example

```html
<i data-lucide="heart"></i>
```

---

# Styling Icons

```html
<i 
data-lucide="home" 
class="text-blue-500 w-10 h-10"
>
</i>
```

---

# Important Points

- Grid is two-dimensional.
- Tailwind grid uses 12-column system.
- Responsive breakpoints improve layouts.
- Container centers webpage content.
- Lucide provides SVG icons.
- `col-span` controls grid width.