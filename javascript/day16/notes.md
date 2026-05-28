# Day 16 - JavaScript Basics

---

# 1. Static Website

## Definition

Static websites contain fixed content.

Content remains same for every user.

---

# Technologies Used

- HTML
- CSS

---

# Advantages

- Faster
- Simple
- Easy hosting

---

# Disadvantages

- No dynamic updates
- No user interaction

---

# Examples

- Portfolio websites
- Documentation pages

---

# 2. Dynamic Website

## Definition

Dynamic websites change content based on:
- User input
- Database
- API response

---

# Technologies Used

- JavaScript
- React
- Node.js
- Database

---

# Advantages

- Interactive
- Real-time updates
- Personalized content

---

# Examples

- Instagram
- YouTube
- Amazon

---

# 3. What is JavaScript?

## Definition

JavaScript is a programming language used to create dynamic and interactive webpages.

Known as:
```txt
Language of the Web
```

---

# Why JavaScript?

JavaScript is used for:
- Button actions
- Form validation
- Animations
- Dynamic content
- API handling
- Full stack development

---

# 4. Ways of Running JavaScript

---

# a. Online Compiler

Runs code in browser online.

Examples:
- CodePen
- JSFiddle
- Replit

---

# b. IDE

IDE stands for:
```txt
Integrated Development Environment
```

Examples:
- VS Code
- WebStorm

---

# c. Browser Engine

JavaScript runs inside browser engine.

Examples:
- Chrome → V8 Engine
- Firefox → SpiderMonkey

---

# 5. Node.js

## Definition

Node.js is a JavaScript runtime environment.

Allows JavaScript to run outside browser.

---

# Importance of Node.js

Without Node.js:
- JavaScript runs only inside browser.

With Node.js:
- JavaScript runs in system terminal.
- Backend development becomes possible.

---

# Example

```bash
node file.js
```

---

# 6. Properties of JavaScript

---

# a. Interpreted Language

JavaScript is mainly interpreted.

Browser executes code line by line.

---

# b. Single Threaded Language

JavaScript executes one task at a time.

Uses:
```txt
Single Call Stack
```

---

# Advantages of JavaScript

- Easy to learn
- Runs in browser
- Huge community
- Full stack support
- Fast development

---

# Disadvantages

- Single thread limitations
- Browser compatibility issues
- Security limitations

---

# 7. Variables

## Definition

Variables store data values.

---

# Syntax

```js
let name = "Prajeen";
```

---

# Variable Keywords

---

# a. var

Old variable keyword.

### Properties
- Function scoped
- Can redeclare
- Can reassign

---

# b. let

Modern variable keyword.

### Properties
- Block scoped
- Cannot redeclare
- Can reassign

---

# c. const

Constant variable.

### Properties
- Block scoped
- Cannot redeclare
- Cannot reassign

---

# Example

```js
const pi = 3.14;
```

---

# 8. JavaScript Keywords

## Definition

Reserved words with special meaning.

---

# Common Keywords

| Keyword | Purpose |
|-----|-----|
| let | Declare variable |
| const | Constant variable |
| if | Conditional check |
| else | Alternate condition |
| for | Loop |
| function | Function creation |
| return | Return value |

---

# 9. Comments

Comments improve code readability.

---

# Single Line Comment

```js
// This is comment
```

---

# Multi Line Comment

```js
/*
Multi line
comment
*/
```

---

# 10. JavaScript Data Types

---

# Primitive Data Types

Stores single value.

---

# Types

| Type | Example |
|-----|-----|
| String | "Hello" |
| Number | 10 |
| Boolean | true |
| Undefined | undefined |
| Null | null |
| BigInt | 123n |
| Symbol | Symbol() |

---

# Non Primitive Data Types

Stores collection of values.

---

# Types

| Type |
|-----|
| Object |
| Array |
| Function |

---

# typeof Operator

Used to check datatype.

---

# Example

```js
typeof "Hello"
```

Output:
```txt
string
```

---

# Important JavaScript Behavior

```js
typeof null
```

Output:
```txt
object
```

This is a historical JavaScript bug.

---

# 11. JavaScript Operators

---

# Arithmetic Operators

| Operator | Purpose |
|-----|-----|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |

---

# Comparison Operators

| Operator | Purpose |
|-----|-----|
| == | Equal |
| === | Strict equal |
| != | Not equal |
| > | Greater than |

---

# Logical Operators

| Operator | Purpose |
|-----|-----|
| && | AND |
| \|\| | OR |
| ! | NOT |

---

# 12. Functions

## Definition

Functions are reusable blocks of code.

---

# a. Declarative Function

```js
function greet(){
    console.log("Hello");
}
```

---

# b. Parameter Function

```js
function add(a,b){
    return a+b;
}
```

---

# c. Arrow Function

```js
const greet = () => {
    console.log("Hello");
}
```

---

# Parameter vs Argument

| Parameter | Argument |
|-----|-----|
| Variable in function | Actual value passed |

---

# Example

```js
function add(a,b){
}
```

`a` and `b` are parameters.

```js
add(10,20);
```

`10` and `20` are arguments.

---

# 13. Conditional Statements

Used for decision making.

---

# if Statement

```js
if(age > 18){
    console.log("Adult");
}
```

---

# if else Statement

```js
if(age > 18){
    console.log("Adult");
}else{
    console.log("Minor");
}
```

---

# else if Statement

```js
if(mark > 90){
}
else if(mark > 70){
}
else{
}
```

---

# switch Statement

```js
switch(day){
    case 1:
        console.log("Monday");
        break;
}
```

---

# 14. Loops

Used to repeat code.

---

# a. for Loop

```js
for(let i=0;i<5;i++){
    console.log(i);
}
```

---

# b. while Loop

```js
while(i < 5){
    i++;
}
```

---

# c. do while Loop

```js
do{
    i++;
}while(i < 5);
```

---

# d. for of Loop

Used for arrays.

```js
for(let value of array){
}
```

---

# e. for in Loop

Used for objects.

```js
for(let key in object){
}
```

---

# Important Points

- JavaScript creates dynamic webpages.
- Node.js runs JavaScript outside browser.
- `let` and `const` are preferred over `var`.
- Functions improve code reusability.
- Loops repeat execution.
- Conditional statements control flow.