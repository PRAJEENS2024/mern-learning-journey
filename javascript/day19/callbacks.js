// Callback Function Example

function greet(name, callback){

    console.log("Hello " + name);

    callback();

}

function completed(){

    console.log("Callback Executed");

}

greet("Prajeen", completed);