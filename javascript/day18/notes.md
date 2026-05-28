# Day 18 - DOM and Dynamic Websites

---

# 1. Datatype Conversion

## Definition

Datatype conversion means converting one datatype into another.

---

# String to Number

---

# Using Number()

```js
let value = "10";

console.log(Number(value));
```

---

# Using parseInt()

```js
parseInt("100");
```

Converts string into integer.

---

# Using parseFloat()

```js
parseFloat("10.5");
```

Converts string into decimal number.

---

# Number to String

---

# Using String()

```js
String(100);
```

---

# Using toString()

```js
let num = 10;

num.toString();
```

---

# Boolean Conversion

```js
Boolean(1);
```

Output:
```txt
true
```

---

# Important Conversion Notes

| Value | Boolean Output |
|-----|-----|
| 0 | false |
| "" | false |
| null | false |
| undefined | false |
| 1 | true |

---

# 2. DOM

## Full Form

```txt
Document Object Model
```

---

# Definition

DOM is a tree-like representation of HTML document.

JavaScript uses DOM to:
- Access elements
- Modify elements
- Create dynamic websites

---

# Important Concept

Before browser displays webpage:
```txt
HTML → DOM Tree
```

Browser converts HTML code into DOM structure.

---

# DOM Tree Structure

```txt
document
   ↓
 html
   ↓
 head
 body
```

Everything starts from:
```txt
document
```

called:
```txt
Root Object
```

---

# 3. DOM API

## Definition

DOM API is a collection of methods provided by browser to interact with webpage.

Used for:
- Selecting elements
- Changing content
- Changing styles
- Adding events

---

# Example

```js
document.getElementById("title");
```

---

# 4. Dynamic Website using DOM

By manipulating DOM:
- webpage content changes dynamically.

---

# Examples

- Counter apps
- Todo apps
- Form validation
- Dark mode
- Live search

---

# Example

```js
element.textContent = "Hello";
```

Changes webpage content dynamically.

---

# 5. Getter and Setter Methods

---

# Getter Methods

Used to get/read data from webpage.

---

# Examples

```js
document.getElementById()
document.querySelector()
```

---

# Setter Methods

Used to set/update webpage content.

---

# Examples

```js
element.textContent = "Hello";

element.style.color = "red";
```

---

# Common Getter and Setter Properties

| Property | Purpose |
|-----|-----|
| textContent | Text content |
| innerHTML | HTML content |
| value | Input value |
| style | CSS styling |

---

# Example

```js
let title = document.getElementById("heading");

title.textContent = "Welcome";
```

---

# 6. w-fit in Tailwind CSS

## Definition

`w-fit` means:
```txt
width:fit-content;
```

Element width adjusts according to content size.

---

# Example

```html
<div class="w-fit">
</div>
```

---

# Usage

Used for:
- Buttons
- Tags
- Badges
- Small containers

---

# Difference Between Width Classes

| Class | Meaning |
|-----|-----|
| w-full | Full width |
| w-screen | Full viewport width |
| w-fit | Width based on content |

---

# 7. Counter Project Concepts

Your counter project correctly uses several important DOM concepts.

---

# Concepts Used

| Concept | Usage |
|-----|-----|
| DOM Selection | getElementById |
| Event Listener | click events |
| Dynamic Content | textContent |
| Conditional Statements | color changing |
| Functions | updateColor |
| Class Manipulation | classList |
| Datatype Conversion | parseInt |

---

# Important Observation in Your Project

This line:

```js
parseInt(count.textContent)
```

is important because:
- `textContent` returns string
- arithmetic needs number

So conversion is necessary.

---

# classList Methods Used

| Method | Purpose |
|-----|-----|
| add() | Add class |
| remove() | Remove class |

---

# Event Listener Example

```js
button.addEventListener("click",()=>{
});
```

Meaning:
- execute function when button is clicked.

---

# Why This Project is Important

This is one of the first real:
```txt
interactive JavaScript projects
```

because:
- webpage changes dynamically
- user interaction exists
- DOM manipulation happens

This is the foundation for:
- React
- frontend frameworks
- dynamic UI development

---

# Important Points

- DOM connects JavaScript and HTML.
- Browser converts HTML into DOM tree.
- Getter methods read data.
- Setter methods update data.
- `w-fit` adjusts width according to content.
- DOM manipulation creates dynamic websites.