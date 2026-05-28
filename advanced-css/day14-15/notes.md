# Day 14 & 15 - Advanced CSS and Tailwind

---

# 1. Translate Property in Tailwind

## Definition

Translate moves elements from original position.

Used for:
- Hover effects
- Animations
- UI interactions

---

# Example

```html
<div class="translate-x-5">
</div>
```

Moves element horizontally.

---

# Tailwind Translate Classes

| Class | Purpose |
|-----|-----|
| translate-x | Horizontal movement |
| translate-y | Vertical movement |
| -translate-x | Negative horizontal |
| -translate-y | Negative vertical |

---

# Hover Translate Example

```html
<div class="hover:-translate-y-3 duration-300">
</div>
```

Meaning:
- On hover → move upward
- `duration-300` → smooth transition

---

# 2. Group Hover

## Definition

`group` allows child elements to respond when parent is hovered.

---

# Example

```html
<div class="group">

    <h1 class="group-hover:text-red-500">
        Hello
    </h1>

</div>
```

---

# Working

When parent is hovered:
- child styles change.

---

# 3. Hidden Property

## Definition

Used to hide elements.

---

# Example

```html
<div class="hidden">
</div>
```

---

# Responsive Hidden Example

```html
<div class="hidden md:block">
</div>
```

Meaning:
- Mobile → hidden
- Tablet/Desktop → visible

---

# 4. Position Property

Controls element positioning.

---

# a. Relative

Element moves relative to original position.

### Tailwind

```html
relative
```

---

# b. Absolute

Moves relative to nearest positioned parent.

### Tailwind

```html
absolute
```

---

# c. Fixed

Fixed relative to viewport.

Remains visible while scrolling.

### Tailwind

```html
fixed
```

---

# d. Sticky

Acts like relative initially,
then sticks while scrolling.

### Tailwind

```html
sticky
```

---

# Position Example

```html
<div class="relative">

    <div class="absolute top-0 right-0">
    </div>

</div>
```

---

# 5. Flex Wrap

## Definition

Allows flex items to move into next line.

---

# Tailwind

```html
flex-wrap
```

---

# Example

```html
<div class="flex flex-wrap gap-5">
</div>
```

---

# 6. Flex No Wrap

Prevents items from moving into next line.

---

# Tailwind

```html
flex-nowrap
```

---

# Example

```html
<div class="flex flex-nowrap">
</div>
```

---

# 7. Textarea in Forms

## Definition

Used for multi-line user input.

---

# Example

```html
<textarea rows="5" cols="30">
</textarea>
```

---

# Common Properties

| Property | Purpose |
|-----|-----|
| rows | Height |
| cols | Width |
| placeholder | Hint text |

---

# 8. Media Queries

## Definition

Media queries create responsive design.

---

# Max Width

Applies styles below certain width.

### Example

```css
@media(max-width:768px){
}
```

---

# Min Width

Applies styles above certain width.

### Example

```css
@media(min-width:768px){
}
```

---

# Tailwind Mobile First

Tailwind uses:
```txt
min-width approach
```

---

# Example

```html
text-sm md:text-xl
```

Meaning:
- Mobile → small text
- Tablet and above → large text

---

# 9. Box Sizing

Controls width and height calculation.

---

# a. Content Box

Default behavior.

Width excludes:
- padding
- border

---

# b. Border Box

Width includes:
- content
- padding
- border

---

# Example

```css
box-sizing:border-box;
```

---

# Tailwind

```html
box-border
```

---

# Why Border Box is Preferred

- Easier layouts
- Predictable sizing
- Better responsive behavior

---

# 10. Box Shadow

Adds shadow around elements.

---

# Tailwind Examples

```html
shadow
shadow-lg
shadow-xl
```

---

# Example

```html
<div class="shadow-lg">
</div>
```

---

# 11. Cursor Property

Changes mouse cursor style.

---

# Tailwind Examples

| Class | Purpose |
|-----|-----|
| cursor-pointer | Hand cursor |
| cursor-not-allowed | Disabled cursor |
| cursor-wait | Loading cursor |

---

# Example

```html
<button class="cursor-pointer">
</button>
```

---

# 12. Overflow Property

Controls extra content behavior.

---

# Hidden Overflow

```html
overflow-hidden
```

Cuts extra content.

---

# Auto Overflow

```html
overflow-auto
```

Adds scrollbar when needed.

---

# Example

```html
<div class="overflow-auto h-40">
</div>
```

---

# 13. Animations Using Animista

## Definition

Animista is an animation generator website.

Used to create:
- CSS animations
- Hover effects
- Entrance effects

---

# Website

:contentReference[oaicite:0]{index=0}

---

# How to Use

## Step 1

Open Animista website.

---

## Step 2

Select animation.

---

## Step 3

Customize duration and direction.

---

## Step 4

Copy generated CSS.

---

## Step 5

Paste into project CSS file.

---

# Example Animation

```css
.slide-in{
    animation:slide-in 1s ease;
}
```

---

# Important Points

- Translate creates movement.
- Group hover affects child elements.
- Hidden controls visibility.
- Position properties control placement.
- Flex wrap improves responsiveness.
- Border box is commonly preferred.
- Overflow manages extra content.
- Animista helps generate CSS animations.