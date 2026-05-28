// setTimeout Example

let timer = setTimeout(() => {

    console.log("Executed After 3 Seconds");

},3000);

// clearTimeout Example

clearTimeout(timer);

// setInterval Example

let interval = setInterval(() => {

    console.log("Running Every 1 Second");

},1000);

// clearInterval Example

setTimeout(() => {

    clearInterval(interval);

    console.log("Interval Stopped");

},5000);