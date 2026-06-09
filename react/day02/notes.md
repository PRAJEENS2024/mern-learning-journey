# Day 02 - React Installation Methods

---

# 1. How React Works

React provides:

- Methods
- Properties

Example Methods:

```js
React.createElement()

ReactDOM.createRoot()

root.render()
```

---

# Client Server Architecture

```txt
Client
   ↓ Request
Server
   ↓ Response
HTML + CSS + JS
```

Browser receives static files and renders the webpage.

---

# 2. Ways to Install React

There are four common ways.

---

# Method 1 - CDN Links

## Definition

React files are loaded directly from internet.

Example:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

---

# Advantages

- Quick setup
- No installation required
- Good for learning

---

# Disadvantages

- Requires internet
- Extra network requests
- Version changes may affect project
- Slower than local files

---

# React Files

```txt
react.development.js
```

Contains:

```txt
React Methods
```

Examples:

```js
React.createElement()
```

---

```txt
react-dom.development.js
```

Contains:

```txt
DOM Rendering Methods
```

Examples:

```js
createRoot()

render()
```

---

# Method 2 - Local Storage

## Definition

Download React files and store inside project.

Example:

```html
<script src="./react.development.js"></script>

<script src="./react-dom.development.js"></script>
```

---

# Advantages

- Faster loading
- No internet dependency
- Stable versions

---

# Better than CDN?

For production:

```txt
Yes
```

because files are available locally.

---

# Method 3 - Package Manager

## Definition

Install React using package managers.

---

# Popular Package Managers

```txt
npm
yarn
pnpm
```

---

# Initialize Project

```bash
npm init -y
```

Creates:

```txt
package.json
```

---

# package.json

Stores:

- Dependencies
- Scripts
- Project Information

---

# Install React

```bash
npm i react
```

or

```bash
npm i react@latest
```

---

# Install React DOM

```bash
npm i react-dom
```

---

# Generated Files

```txt
node_modules/
package-lock.json
package.json
```

---

# package-lock.json

Purpose:

```txt
Lock exact package versions
```

---

# GitHub Upload?

Upload:

```txt
package.json
package-lock.json
```

Do NOT upload:

```txt
node_modules
```

---

# Dependencies

Installed in production.

Example:

```json
"dependencies": {
  "react": "^19.1.0",
  "react-dom": "^19.1.0"
}
```

---

# Dev Dependencies

Installed only for development.

Example:

```json
"devDependencies": {
  "parcel": "^2.15.1"
}
```

---

# Install Dev Dependency

```bash
npm i -D parcel
```

---

# Dependency Symbols

---

# Caret (^)

Example:

```json
^19.1.0
```

Allows:

```txt
19.1.1
19.1.2
19.2.0
```

Not:

```txt
20.0.0
```

---

# Tilde (~)

Example:

```json
~19.1.0
```

Allows:

```txt
19.1.1
19.1.2
```

Not:

```txt
19.2.0
```

---

# npx Command

Used to execute packages.

Example:

```bash
npx parcel index.html
```

---

# Method 4 - Bundlers

## Definition

Bundlers optimize and compress code.

Example:

```txt
500 MB Code
     ↓
 Bundler
     ↓
50 MB Optimized Code
```

---

# Popular Bundlers

- Webpack
- Parcel
- Vite

---

# Why Bundlers are Used

- Minification
- Optimization
- Faster loading
- Module support

---

# Parcel Bundler Setup

---

# Step 1

Install Parcel

```bash
npm i -D parcel
```

---

# Step 2

Run Project

```bash
npx parcel index.html
```

Output:

```txt
http://localhost:1234
```

---

# Step 3

Build Project

```bash
npx parcel build index.html
```

Creates:

```txt
dist/
```

---

# Alternative Build Command

package.json

```json
"scripts": {
    "build":"parcel build index.html"
}
```

Run:

```bash
npm run build
```

---

# React Example using CDN

```js
const paraElement =
React.createElement(
    "p",
    null,
    "Hello React"
);

const root =
ReactDOM.createRoot(
document.getElementById("root")
);

root.render(paraElement);
```

---

# Important Points

- CDN is easiest for beginners.
- Local files remove network dependency.
- npm is the most common package manager.
- node_modules should not be pushed to GitHub.
- Parcel is a bundler.
- React projects today commonly use Vite.