# Day 20 - Asynchronous JavaScript and Promises

---

# 1. Synchronous Operations

## Definition

Synchronous code executes:
```txt
one line at a time
```

Next line waits until previous line finishes.

---

# Example

```js
console.log("One");

console.log("Two");

console.log("Three");
```

Output:
```txt
One
Two
Three
```

---

# Properties

- Sequential execution
- Blocking behavior
- Simpler flow

---

# Problem in Synchronous Operations

If one task takes long time:
- entire program waits.

Example:
- API calls
- database operations
- timers

---

# 2. Asynchronous Operations

## Definition

Asynchronous code allows tasks to run:
```txt
without blocking other code
```

---

# Example

```js
setTimeout(() => {

    console.log("Delayed");

},2000);

console.log("Immediate");
```

Output:
```txt
Immediate
Delayed
```

---

# Why Asynchronous Operations are Used

Used for:
- API requests
- Database operations
- Timers
- File handling
- Real-time applications

---

# Important JavaScript Concept

JavaScript is:
```txt
single threaded
```

but asynchronous behavior is possible using:
- Web APIs
- Event Loop
- Callback Queue

---

# 3. Fetch Method

## Definition

`fetch()` is used to make API requests.

Returns:
```txt
Promise
```

---

# Syntax

```js
fetch("api-url")
```

---

# Example

```js
fetch("https://jsonplaceholder.typicode.com/users")
```

---

# Why fetch() is Important

Used for:
- backend communication
- getting data from server
- sending data to server

---

# 4. Promises

## Definition

Promise represents:
```txt
future completion or failure of asynchronous operation
```

---

# Promise States

| State | Meaning |
|-----|-----|
| Pending | Waiting |
| Fulfilled | Success |
| Rejected | Failed |

---

# Promise Flow

---

# Case 1

```txt
Pending → Fulfilled
```

Operation completed successfully.

---

# Case 2

```txt
Pending → Rejected
```

Operation failed.

---

# Example Promise

```js
let promise = new Promise((resolve,reject) => {

    let success = true;

    if(success){

        resolve("Success");

    }else{

        reject("Failed");

    }

});
```

---

# 5. Handling Promises - Old Method

Uses:
- then()
- catch()

---

# then()

Handles success.

---

# catch()

Handles error.

---

# Example

```js
fetch("https://jsonplaceholder.typicode.com/users")

.then((response) => {

    return response.json();

})

.then((data) => {

    console.log(data);

})

.catch((error) => {

    console.log(error);

});
```

---

# Problems in Old Method

- Nested chaining
- Less readable
- Harder debugging

---

# 6. Handling Promises - New Method

Uses:
- async
- await

---

# async

Makes function asynchronous.

---

# await

Waits for promise completion.

---

# Example

```js
async function getData(){

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await response.json();

    console.log(data);

}
```

---

# Advantages of async/await

- Cleaner syntax
- Better readability
- Easier debugging
- Looks like synchronous code

---

# 7. Error Handling using try catch

## Definition

Used to handle errors safely.

---

# Example

```js
async function getData(){

    try{

        let response = await fetch("wrong-url");

        let data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}
```

---

# Why try catch is Used in async/await

Because:
- `await` pauses execution
- errors behave like synchronous errors

So:
```txt
try catch works naturally
```

---

# Why try catch is Rarely Used in then/catch Method

Because old promise method already has:
```js
.catch()
```

which handles promise rejection.

---

# Difference Between Old and New Promise Handling

| Old Method | New Method |
|-----|-----|
| then/catch | async/await |
| Chain based | Cleaner syntax |
| Harder readability | Easier readability |
| More nesting | Less nesting |

---

# 8. Real World Usage

Asynchronous programming is heavily used in:
- React
- Node.js
- MongoDB
- APIs
- Authentication systems

---

# Important Points

- Synchronous code blocks execution.
- Asynchronous code prevents blocking.
- fetch() returns promises.
- Promises have 3 states.
- async/await is preferred in modern JavaScript.
- try catch handles async errors.