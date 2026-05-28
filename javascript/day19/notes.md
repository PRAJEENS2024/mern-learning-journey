# Day 19 - Navbar and JavaScript Schedulers

---

# 1. Navbar

## Definition

Navbar is a navigation section used to move between webpages.

Usually contains:
- Logo
- Navigation links
- Buttons
- Icons

---

# Types of Navbar Layout

---

# a. 2 Grid Navbar

Divides navbar into:
- Logo section
- Navigation section

---

# Example

```html
grid grid-cols-2
```

---

# Structure

```txt
| Logo | Navigation |
```

---

# b. 3 Grid Navbar

Divides navbar into:
- Left section
- Center section
- Right section

---

# Example

```html
grid grid-cols-3
```

---

# Structure

```txt
| Logo | Links | Buttons |
```

---

# 2. block and hidden in Tailwind

---

# block

Makes element visible as block element.

---

# Example

```html
block
```

Equivalent CSS:

```css
display:block;
```

---

# hidden

Hides element.

---

# Example

```html
hidden
```

Equivalent CSS:

```css
display:none;
```

---

# Responsive Example

```html
hidden md:block
```

Meaning:
- Mobile → hidden
- Tablet/Desktop → visible

---

# 3. classList

## Definition

`classList` is used to manipulate CSS classes dynamically.

---

# Methods

| Method | Purpose |
|-----|-----|
| add() | Add class |
| remove() | Remove class |
| toggle() | Add/remove automatically |

---

# add()

```js
element.classList.add("hidden");
```

---

# remove()

```js
element.classList.remove("hidden");
```

---

# toggle()

```js
element.classList.toggle("hidden");
```

If class exists:
- remove it

If class does not exist:
- add it

---

# Why classList is Important

Used for:
- Dark mode
- Sidebar toggle
- Navbar menu
- Dynamic styling
- Animations

---

# 4. Callback Function

## Definition

A callback function is:
```txt
A function passed as argument to another function.
```

---

# Example

```js
setTimeout(() => {

    console.log("Hello");

},2000);
```

Arrow function here acts as callback.

---

# Properties of Callback Functions

- Executed later
- Passed as argument
- Supports asynchronous programming
- Improves code reusability

---

# Common Usage

- Event listeners
- Timers
- Array methods
- API handling

---

# 5. Schedulers

## Definition

Schedulers execute code after certain time interval.

---

# Types of Schedulers

| Scheduler | Purpose |
|-----|-----|
| setTimeout | Runs once |
| setInterval | Runs repeatedly |

---

# 6. setTimeout()

Runs code once after delay.

---

# Syntax

```js
setTimeout(function, time);
```

---

# Example

```js
setTimeout(() => {

    console.log("Hello");

},3000);
```

Runs after:
```txt
3 seconds
```

---

# 7. clearTimeout()

Stops scheduled timeout before execution.

---

# Example

```js
let timer = setTimeout(() => {

    console.log("Hello");

},3000);

clearTimeout(timer);
```

---

# 8. setInterval()

Runs repeatedly after fixed interval.

---

# Example

```js
setInterval(() => {

    console.log("Running");

},1000);
```

Runs every:
```txt
1 second
```

---

# 9. clearInterval()

Stops interval execution.

---

# Example

```js
let interval = setInterval(() => {

    console.log("Running");

},1000);

clearInterval(interval);
```

---

# 10. Responsive Navbar Project Concepts

Your navbar project uses many important concepts.

---

# Concepts Used

| Concept | Usage |
|-----|-----|
| Grid Layout | Navbar structure |
| Responsive Design | Mobile/Desktop layout |
| hidden/block | Show/hide navbar |
| Event Listener | Menu interaction |
| classList | Dynamic class manipulation |
| Callback Functions | Click handling |
| Tailwind Utilities | Responsive styling |

---

# Important Observation in Your Project

This line:

```js
menu_open.addEventListener("click", () => {
});
```

contains:
- event listener
- callback function
- arrow function

all together.

---

# Responsive Navbar Logic

---

# Mobile View

Initially:
- menu icon visible
- navbar hidden

---

# On Click

JavaScript:
- hides menu icon
- shows cross icon
- displays navigation menu

---

# This Line is Important

```js
nav_list.classList.remove("hidden");
nav_list.classList.add("block");
```

Meaning:
- remove hidden state
- make navbar visible

---

# Better Modern Approach

Instead of:
```js
add()
remove()
```

sometimes:
```js
toggle()
```

can simplify code.

Example:

```js
nav_list.classList.toggle("hidden");
```

---

# Important Points

- Navbar improves webpage navigation.
- `hidden` removes element visibility.
- `block` displays element.
- `classList` dynamically changes classes.
- Callback functions execute later.
- `setTimeout` runs once.
- `setInterval` runs repeatedly.