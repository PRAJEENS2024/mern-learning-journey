# Day 03 - Vite, JSX and Components

---

# 1. How to Configure Vite

## What is Vite?

Vite is a modern build tool used to create React applications.

Benefits:

- Faster startup
- Faster builds
- Hot Module Reloading (HMR)
- Better developer experience

---

# Step 1 - Create Vite Project

```bash
npm create vite@latest
```

---

# Step 2 - Install Packages

```bash
npm install
```

or

```bash
npm i
```

---

# Step 3 - Start Development Server

```bash
npm run dev
```

Output:

```txt
http://localhost:5173
```

---

# 2. React.createElement()

Before JSX:

```js
const paragraphElement =
React.createElement(
    "p",
    null,
    "Hello World"
);
```

---

# Flow

```txt
React.createElement()
        ↓
JavaScript Object
        ↓
HTML
```

---

# Problem

Writing large UIs using:

```js
React.createElement()
```

becomes difficult.

---

# 3. JSX

## Full Form

```txt
JavaScript XML
```

---

# Definition

JSX allows writing HTML inside JavaScript.

---

# Example

```jsx
const headingElement =

<h1>Heading Tag</h1>;
```

---

# Example

```jsx
const buttonElement =

<button>
    Click Now
</button>;
```

---

# JSX Conversion

React internally converts:

```jsx
<h1>Hello</h1>
```

into:

```js
React.createElement(
    "h1",
    {},
    "Hello"
);
```

using:

```txt
Babel
```

---

# Flow

```txt
JSX
 ↓
Babel
 ↓
React.createElement()
 ↓
JavaScript Object
 ↓
HTML
```

---

# Why JSX?

- Easier to read
- Easier to write
- Cleaner code
- Better developer experience

---

# 4. Components

## Definition

A Component is a reusable JavaScript function that returns JSX.

---

# Why Components?

Instead of writing:

- Header
- Footer
- Navbar

again and again,

we create reusable components.

---

# Example

```jsx
const Header = () => {

    return <p>Hello World</p>;

}
```

---

# Types of Components

---

# a. Functional Component

Created using function.

```jsx
function Header(){

}
```

or

```jsx
const Header = () => {

}
```

---

# b. Class Component

Created using JavaScript class.

```jsx
class Header extends React.Component{

}
```

Note:

Modern React mostly uses:

```txt
Functional Components
```

---

# 5. Rendering Functional Components

---

# Method 1

```jsx
Header()
```

Not preferred.

---

# Method 2

```jsx
<Header />
```

Preferred.

---

# Method 3

```jsx
<Header></Header>
```

Also valid.

---

# Example

```jsx
root.render(
    <Header />
);
```

---

# 6. Golden Rules of Functional Components

---

# Rule 1

Component name should start with:

```txt
Capital Letter
```

Correct:

```jsx
Header
```

Wrong:

```jsx
header
```

---

# Rule 2

Component should return JSX.

Example:

```jsx
const Header = () => {

    return <h1>Hello</h1>;

}
```

---

# Rule 3

Component can return only one root element.

Correct:

```jsx
return (

<div>

</div>

)
```

---

# Using React Fragment

```jsx
return (

<>

</>

)
```

---

# Why Fragment?

Avoid unnecessary div elements.

---

# Example

```jsx
return (

<>

<h1>Hello</h1>

<p>React</p>

</>

)
```

---

# 7. React Design Pattern

## Component Composition

Definition:

```txt
Calling one component inside another component
```

is called:

```txt
Component Composition
```

---

# Example

```jsx
const Header = () => {

    return <h1>Header</h1>;

}

const App = () => {

    return (

        <div>

            <Header />

        </div>

    );

}
```

---

# Real World Example

Swiggy Layout

```txt
App
 │
 ├── Header
 │
 ├── Body
 │
 └── Footer
```

Every section becomes an individual component.

---

# Important Points

- Vite is used to create React projects.
- JSX allows writing HTML inside JavaScript.
- Babel converts JSX into React.createElement().
- Components are reusable functions.
- Component names should start with capital letters.
- Functional components are preferred over class components.
- Component composition is heavily used in React applications.