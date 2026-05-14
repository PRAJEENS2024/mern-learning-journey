# Day 07 - CSS Frameworks

---

# 1. CSS Framework

## Definition

A CSS framework is a collection of prewritten CSS code used to build webpages faster.

Frameworks provide:
- Ready-made classes
- Responsive design
- Faster styling
- Consistent UI

---

# Popular CSS Frameworks

- Bootstrap
- Tailwind CSS

---

# Why Frameworks are Used Over Normal CSS

Without frameworks:
- Developers write CSS from scratch.
- Development becomes slower.
- Repeated styling increases code size.

With frameworks:
- Faster development
- Reusable classes
- Responsive design support
- Cleaner workflow

---

# 2. Bootstrap

## Definition

Bootstrap is a component-based CSS framework.

Provides:
- Buttons
- Cards
- Navbar
- Grid system
- Forms

Bootstrap uses predefined components and styles.

---

# Advantages of Bootstrap

- Easy to learn
- Faster UI creation
- Mobile responsive
- Large community support

---

# Disadvantages of Bootstrap

- Similar looking websites
- Less customization flexibility
- Extra unused CSS

---

# 3. Tailwind CSS

## Definition

Tailwind CSS is a utility-first CSS framework.

Instead of ready-made components,
Tailwind provides utility classes.

Example:

```html
<p class="text-red-500 text-center text-2xl">
    Hello
</p>
```

---

# Advantages of Tailwind CSS

- Highly customizable
- Smaller final CSS
- Faster modern development
- Better design flexibility

---

# Why Tailwind is Preferred Over Bootstrap

| Tailwind CSS | Bootstrap |
|-----|-----|
| Utility-first | Component-based |
| Highly customizable | Limited customization |
| Modern workflow | Traditional workflow |
| Cleaner custom UI | Similar UI patterns |
| Better performance optimization | Larger CSS size |

---

# 4. Library vs Framework

| Library | Framework |
|-----|-----|
| Collection of reusable code | Complete structure for development |
| Developer controls flow | Framework controls flow |
| Flexible usage | Fixed architecture |

---

# 5. Bootstrap Using CDN

## CDN Definition

CDN stands for Content Delivery Network.

Files are loaded from internet server.

---

# Bootstrap CDN Example

```html
<link 
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
rel="stylesheet"
>
```

---

# Example

```html
<button class="btn btn-primary">
    Click Me
</button>
```

---

# 6. Tailwind CSS Using CDN

## Tailwind CDN Example

```html
<script src="https://cdn.tailwindcss.com"></script>
```

---

# Example

```html
<h1 class="text-4xl text-blue-500 font-bold">
    Tailwind CSS
</h1>
```

---

# 7. Tailwind Text Properties

---

# Text Color

```html
text-red-500
text-blue-500
```

---

# Text Alignment

```html
text-center
text-left
text-right
```

---

# Font Size

```html
text-sm
text-lg
text-xl
text-4xl
```

---

# Font Weight

```html
font-light
font-medium
font-bold
```

---

# Text Transform

```html
uppercase
lowercase
capitalize
```

---

# 8. Tailwind Background Properties

---

# Background Color

```html
bg-red-500
bg-blue-500
```

---

# Background Size

```html
bg-cover
bg-contain
```

---

# Background Position

```html
bg-center
bg-top
```

---

# 9. Tailwind Customization in Tailwind 4

Tailwind 4 allows easier customization using CSS variables and configuration.

Example:

```css
@theme{
    --color-primary:#2563eb;
}
```

Custom values can also be used directly.

Example:

```html
<div class="bg-[#ff0000]">
</div>
```

---

# 10. Predefined Responsive Breakpoints

Tailwind provides responsive breakpoints.

---

# Common Breakpoints

| Prefix | Screen Size |
|-----|-----|
| xs | Extra small |
| sm | Small |
| md | Medium |
| lg | Large |
| xl | Extra large |
| 2xl | Double extra large |

---

# Example

```html
<h1 class="text-sm md:text-xl lg:text-4xl">
    Responsive Text
</h1>
```

Meaning:
- Small screen → small text
- Medium screen → larger text
- Large screen → extra large text

---

# 11. External CSS vs Tailwind CSS

---

# External CSS

```css
.title{
    color:red;
    font-size:30px;
    text-align:center;
}
```

```html
<h1 class="title">
    Hello
</h1>
```

---

# Tailwind CSS

```html
<h1 class="text-red-500 text-3xl text-center">
    Hello
</h1>
```

---

# Common Property Comparison

| CSS | Tailwind |
|-----|-----|
| color:red | text-red-500 |
| background-color:blue | bg-blue-500 |
| text-align:center | text-center |
| font-weight:bold | font-bold |
| padding:20px | p-5 |
| margin-top:20px | mt-5 |

---

# 12. Important Things to Memorize in Tailwind

---

# Important Utility Classes

## Spacing
- p
- m
- pt
- mt

---

## Flexbox
- flex
- justify-center
- items-center

---

## Text
- text-center
- text-xl
- font-bold

---

## Background
- bg-red-500
- bg-cover

---

## Width and Height
- w-full
- h-screen

---

## Responsive Prefixes
- sm
- md
- lg
- xl

---

# Important Points

- Frameworks speed up development.
- Bootstrap uses components.
- Tailwind uses utility classes.
- CDN loads framework files from internet.
- Tailwind provides responsive design support.
- Tailwind customization is highly flexible.