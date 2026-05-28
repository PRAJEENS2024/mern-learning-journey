# Day 17 - Arrays and Objects in JavaScript

---

# 1. Loose Equality

## Operator

```js
==
```

Checks only values.

Datatype conversion happens automatically.

---

# Example

```js
5 == "5"
```

Output:
```txt
true
```

Because:
- string converts into number.

---

# 2. Strict Equality

## Operator

```js
===
```

Checks:
- value
- datatype

No datatype conversion happens.

---

# Example

```js
5 === "5"
```

Output:
```txt
false
```

Because:
- number ≠ string

---

# Difference Between Loose and Strict Equality

| Loose Equality | Strict Equality |
|-----|-----|
| `==` | `===` |
| Checks value only | Checks value and datatype |
| Type conversion happens | No type conversion |

---

# 3. Arrays in JavaScript

## Definition

Array stores multiple values inside single variable.

---

# Syntax

```js
let fruits = ["Apple","Mango","Orange"];
```

---

# Properties of Arrays

---

# Access Single Element

Uses index.

Index starts from:
```txt
0
```

---

# Example

```js
let fruits = ["Apple","Mango","Orange"];

console.log(fruits[1]);
```

Output:
```txt
Mango
```

---

# Access Whole Array

```js
console.log(fruits);
```

---

# Find Array Length

```js
console.log(fruits.length);
```

---

# 4. How JavaScript Arrays Differ from Other Languages

---

# JavaScript Arrays are Dynamic

Can store:
- different datatypes
- variable size

---

# Example

```js
let data = [10,"Hello",true];
```

---

# In Other Languages

Languages like:
- C
- Java

usually require:
- same datatype
- fixed size

---

# 5. Adding Data in Arrays

---

# a. push()

Adds element at end.

---

# Example

```js
let fruits = ["Apple","Mango"];

fruits.push("Orange");
```

Output:
```txt
["Apple","Mango","Orange"]
```

---

# b. unshift()

Adds element at beginning.

---

# Example

```js
fruits.unshift("Banana");
```

---

# c. Using Index

```js
fruits[3] = "Grapes";
```

---

# 6. Modifying Array Elements

---

# Example

```js
fruits[1] = "Pineapple";
```

---

# 7. Removing Array Elements

---

# a. pop()

Removes last element.

---

# Example

```js
fruits.pop();
```

---

# b. shift()

Removes first element.

---

# Example

```js
fruits.shift();
```

---

# 8. Objects in JavaScript

## Definition

Objects store data using:
```txt
key : value
```

pairs.

---

# Syntax

```js
let student = {

    name:"Prajeen",

    age:19,

    department:"ECE"

}
```

---

# 9. Accessing Object Properties

---

# a. Dot Notation

```js
console.log(student.name);
```

---

# b. Bracket Notation

```js
console.log(student["age"]);
```

---

# Difference

| Dot Notation | Bracket Notation |
|-----|-----|
| Easier syntax | Dynamic access possible |
| Uses dot | Uses square brackets |

---

# 10. Adding Properties in Object

---

# Example

```js
student.college = "Sri Eshwar";
```

---

# 11. Modifying Properties

---

# Example

```js
student.age = 20;
```

---

# 12. Removing Properties

Uses:
```js
delete
```

---

# Example

```js
delete student.department;
```

---

# 13. Arrow Functions in Callback

## Definition

Callback function:
- function passed as argument to another function.

Arrow functions are commonly used as callbacks.

---

# Example

```js
let numbers = [1,2,3];

numbers.forEach((value) => {

    console.log(value);

});
```

---

# Explanation

| Part | Purpose |
|-----|-----|
| forEach | Loop through array |
| value | Current element |
| arrow function | Callback function |

---

# Why Arrow Functions are Used in Callback

- Short syntax
- Cleaner code
- Easy readability

---

# Important Points

- `===` is preferred over `==`.
- Arrays store multiple values.
- JavaScript arrays are dynamic.
- Objects use key-value pairs.
- Dot and bracket notation access properties.
- Arrow functions simplify callbacks.