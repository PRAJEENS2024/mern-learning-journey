# Day 23 - Modern JavaScript Features

---

# 1. Spread Operator (...)

## Definition

Spread operator expands elements from:
- Arrays
- Objects
- Strings

---

# Syntax

```js
...
```

---

# 2. Spread Operator with Arrays

## Copy Array

```js
let arr1 = [1,2,3];

let arr2 = [...arr1];
```

Output:

```js
[1,2,3]
```

---

# Why Copy is Needed

Without spread:

```js
let arr2 = arr1;
```

Both variables point to same array.

Changes affect both arrays.

---

# Concatenation of Arrays

```js
let arr1 = [1,2];

let arr2 = [3,4];

let result = [...arr1,...arr2];
```

Output:

```js
[1,2,3,4]
```

---

# 3. Spread Operator with Objects

## Copy Object

```js
let student = {

    name:"Prajeen",

    age:19

};

let copy = {...student};
```

---

# Concatenate Objects

```js
let obj1 = {

    name:"Prajeen"

};

let obj2 = {

    department:"ECE"

};

let result = {

    ...obj1,

    ...obj2

};
```

Output:

```js
{
    name:"Prajeen",
    department:"ECE"
}
```

---

# Limitation of Spread Operator

Spread performs:

```txt
Shallow Copy
```

Nested objects are not deeply copied.

---

# Example

```js
let obj = {

    details:{
        age:19
    }

};
```

Nested references remain shared.

---

# 4. Rest Operator (...)

## Definition

Rest operator collects multiple values into one array.

---

# Syntax

```js
...rest
```

---

# Example

```js
function add(...numbers){

    console.log(numbers);

}

add(1,2,3,4);
```

Output:

```js
[1,2,3,4]
```

---

# Properties

- Returns array
- Collects remaining elements
- Used in functions
- Used in destructuring

---

# Important Rule

Rest parameter must be last parameter.

Correct:

```js
function test(a,b,...rest){

}
```

Wrong:

```js
function test(...rest,a){

}
```

---

# Rest Parameter Example

```js
function total(...numbers){

    return numbers;

}
```

---

# Rest in Array Destructuring

```js
let arr = [1,2,3,4,5];

let [a,b,...remaining] = arr;
```

Output:

```js
a = 1
b = 2

remaining = [3,4,5]
```

---

# 5. String Methods

---

# length

Returns total characters.

```js
let name = "Prajeen";

console.log(name.length);
```

---

# trim()

Removes spaces from both ends.

```js
let text = " Hello ";

console.log(text.trim());
```

---

# trimStart()

Removes left spaces.

```js
text.trimStart();
```

---

# trimEnd()

Removes right spaces.

```js
text.trimEnd();
```

---

# toUpperCase()

Converts text into uppercase.

```js
text.toUpperCase();
```

---

# toLowerCase()

Converts text into lowercase.

```js
text.toLowerCase();
```

---

# split()

Splits string and returns array.

```js
let text = "HTML,CSS,JS";

text.split(",");
```

Output:

```js
["HTML","CSS","JS"]
```

---

# indexOf()

Returns first occurrence index.

```js
let text = "javascript";

text.indexOf("a");
```

---

# lastIndexOf()

Returns last occurrence index.

```js
text.lastIndexOf("a");
```

---

# replace()

Replaces text.

```js
text.replace("Java","MERN");
```

---

# concat()

Combines strings.

```js
let first = "Hello";

let second = "World";

first.concat(second);
```

---

# 6. Array Destructuring

## Definition

Extract values from array into variables.

---

# Example

```js
let fruits = [

    "Apple",

    "Mango",

    "Orange"

];

let [first,second,third] = fruits;
```

---

# Output

```js
first = Apple

second = Mango

third = Orange
```

---

# 7. Object Destructuring

## Definition

Extract object properties into variables.

---

# Example

```js
let student = {

    name:"Prajeen",

    age:19

};

let {name,age} = student;
```

---

# Output

```js
name = Prajeen

age = 19
```

---

# 8. Array Methods

These methods accept:

```txt
Callback Functions
```

---

# map()

Creates new array.

Returns:
```txt
Array
```

---

# Example

```js
let numbers = [1,2,3];

let result = numbers.map((value)=>{

    return value * 2;

});
```

Output:

```js
[2,4,6]
```

---

# filter()

Filters elements.

Returns:
```txt
Array
```

---

# Example

```js
let numbers = [1,2,3,4,5];

let even = numbers.filter((value)=>{

    return value % 2 === 0;

});
```

Output:

```js
[2,4]
```

---

# reduce()

Reduces array into single value.

---

# Example

```js
let numbers = [1,2,3,4];

let total = numbers.reduce((acc,current)=>{

    return acc + current;

},0);
```

Output:

```js
10
```

---

# Other Important Array Methods

---

# forEach()

Loops through array.

```js
numbers.forEach((value)=>{

    console.log(value);

});
```

---

# find()

Returns first matching element.

```js
numbers.find((value)=>{

    return value > 2;

});
```

---

# some()

Returns true if at least one element satisfies condition.

```js
numbers.some((value)=>{

    return value > 4;

});
```

---

# every()

Returns true if all elements satisfy condition.

```js
numbers.every((value)=>{

    return value > 0;

});
```

---

# Important Points

- Spread expands elements.
- Rest collects elements.
- Rest returns array.
- Destructuring extracts values.
- map(), filter() and reduce() are heavily used in React.
- Array methods usually accept callback functions.