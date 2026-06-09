# Day 01 - Introduction to React

---

# 1. What is React?

## Definition

React is a JavaScript Library used for building User Interfaces (UI).

Developed by:
```txt
Meta (Facebook)
```

React helps developers create:
- Dynamic websites
- Single Page Applications (SPA)
- Reusable UI Components

---

# Why is React Called a Library?

React focuses mainly on:

```txt
User Interface (UI)
```

It does not provide:
- Routing
- State management
- Backend functionality

These can be added separately.

Therefore React is called:

```txt
JavaScript Library
```

---

# 2. Why React?

Before React:

JavaScript directly manipulated DOM.

Example:

```js
document.getElementById("title").textContent = "Hello";
```

Problems:

- Slow DOM updates
- Complex code
- Difficult maintenance
- Poor scalability

---

# React Solution

React uses:

```txt
Virtual DOM
```

instead of updating real DOM frequently.

Benefits:

- Faster rendering
- Better performance
- Cleaner code
- Reusable components

---

# Real World Examples

- Instagram
- Facebook
- Netflix
- Airbnb

---

# 3. Library vs Framework

## Library

A library provides specific functionality.

Developer controls the flow.

---

# Examples

- React
- Lodash
- Axios

---

# Framework

A framework provides complete project structure.

Framework controls the flow.

---

# Examples

- Angular
- Django
- Spring Boot
- Laravel

---

# Difference

| Library | Framework |
|----------|-----------|
| Specific functionality | Complete structure |
| Developer controls flow | Framework controls flow |
| Flexible | Opinionated |
| Example: React | Example: Angular |

---

# 4. DOM Tree

Browser converts HTML into:

```txt
DOM Tree
```

Example:

```txt
Document
    ↓
   HTML
   ↓
HEAD   BODY
        ↓
      h1
      p
    button
```

React works with:

```txt
Virtual DOM
```

instead of directly manipulating DOM.

---

# 5. Events in React

## Definition

Events are actions performed by user.

Examples:

- Click
- Input
- Submit
- Hover
- Change

---

# Common Events

| Event | Purpose |
|--------|---------|
| onClick | Button click |
| onChange | Input change |
| onSubmit | Form submit |
| onMouseOver | Hover |
| onKeyDown | Key press |

---

# Example

```jsx
<button onClick={handleClick}>
    Click Me
</button>
```

---

# 6. Methods in React

Methods are functions used to perform tasks.

Example:

```jsx
function handleClick(){

    console.log("Button Clicked");

}
```

---

# React Event Handling

```jsx
function App(){

    function showMessage(){

        alert("Hello React");

    }

    return (

        <button onClick={showMessage}>
            Click
        </button>

    );

}
```

---

# Difference from JavaScript

JavaScript:

```html
<button onclick="showMessage()">
```

React:

```jsx
<button onClick={showMessage}>
```

Notice:

```txt
onclick  → JavaScript

onClick  → React
```

---

# 7. Why React is Popular?

- Reusable Components
- Virtual DOM
- Fast Rendering
- Huge Community
- Easy Learning Curve
- Industry Standard

---

# Important React Terms

| Term | Meaning |
|--------|---------|
| Component | Reusable UI block |
| JSX | HTML inside JavaScript |
| Virtual DOM | React's copy of DOM |
| Event | User action |
| State | Dynamic data |
| Props | Data passed between components |

---

# Important Points

- React is a JavaScript Library.
- React uses Virtual DOM.
- React improves UI performance.
- Events handle user actions.
- Components are reusable.
- React is one of the most demanded frontend technologies.