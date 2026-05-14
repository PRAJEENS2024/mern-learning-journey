# Day 06 - CSS Colors, Background and Box Model

---

# 1. Span Tag

## Definition

`<span>` is an inline HTML element used to style small portions of text.

It does not start in a new line.

Used mainly with CSS.

---

# Example

```html
<p>
    Welcome to 
    <span class="highlight">MERN Stack</span>
</p>
```

---

# Difference Between `div` and `span`

| div | span |
|-----|-----|
| Block element | Inline element |
| Starts new line | Does not start new line |
| Used for large sections | Used for small text portions |

---

# 2. Text Decoration

## Definition

Used to add or remove decoration from text.

---

# Common Values

| Value | Purpose |
|-----|-----|
| underline | Underline text |
| overline | Line above text |
| line-through | Strike line |
| none | Removes decoration |

---

# Example

```css
a{
    text-decoration:none;
}
```

---

# 3. CSS Colors

CSS supports different color formats.

---

# a. Color Name

Uses predefined color names.

### Example

```css
color:red;
background-color:blue;
```

---

# b. RGB Color

RGB stands for:
- Red
- Green
- Blue

Value range:
0 to 255

### Example

```css
color:rgb(255,0,0);
```

Red color:
- Red = 255
- Green = 0
- Blue = 0

---

# c. Hexadecimal Color

Starts with `#`

Contains:
- Numbers
- Letters

### Example

```css
color:#ff0000;
```

Represents red color.

---

# d. HSL Color

HSL stands for:
- Hue
- Saturation
- Lightness

### Example

```css
color:hsl(0,100%,50%);
```

---

# 4. Background Properties

Background properties style webpage backgrounds.

---

# Importance of Height

Background properties become visible properly only when element has height or content.

Without height:
- Background image may not appear clearly.
- Background color area becomes small.

---

# a. background-color

Changes background color.

### Example

```css
background-color:yellow;
```

---

# b. background-image

Adds image as background.

### Example

```css
background-image:url("image.jpg");
```

---

# c. background-size

Controls image size.

### Common Values
- cover
- contain

### Example

```css
background-size:cover;
```

---

# d. Aspect Ratio

Aspect ratio defines:
- Width to height relationship

Example:
```txt
16:9
```

Maintaining aspect ratio prevents image distortion.

---

# e. background-repeat

Controls image repetition.

### Values
- repeat
- no-repeat
- repeat-x
- repeat-y

### Example

```css
background-repeat:no-repeat;
```

---

# f. Opacity

Controls transparency level.

Value range:
- 0 to 1

### Example

```css
opacity:0.5;
```

### Meaning
- 0 = fully transparent
- 1 = fully visible

---

# 5. CSS Box Model

## Definition

Every HTML element is treated as a rectangular box.

Box model controls:
- Spacing
- Borders
- Layout

---

# Layers of Box Model

```txt
Margin
   ↓
Border
   ↓
Padding
   ↓
Content
```

---

# a. Content

Actual text or element content.

---

# b. Padding

Space between content and border.

### Example

```css
padding:20px;
```

---

# Individual Padding Properties

```css
padding-top:10px;
padding-right:20px;
padding-bottom:10px;
padding-left:20px;
```

---

# c. Border

Boundary around element.

### Example

```css
border:2px solid black;
```

---

# Border Radius

Used to create rounded corners.

### Example

```css
border-radius:10px;
```

---

# d. Margin

Outer spacing outside border.

### Example

```css
margin:20px;
```

---

# Individual Margin Properties

```css
margin-top:20px;
margin-right:10px;
margin-bottom:20px;
margin-left:10px;
```

---

# Important Points

- `span` is an inline element.
- CSS supports multiple color formats.
- Background properties improve webpage appearance.
- Height is important for visible backgrounds.
- Opacity controls transparency.
- Box model controls spacing and layout.