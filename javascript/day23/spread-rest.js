// Spread Operator

let arr1 = [1,2,3];

let arr2 = [...arr1];

console.log(arr2);

// Array Concatenation

let merged = [...arr1,...arr2];

console.log(merged);

// Rest Operator

function display(...numbers){

    console.log(numbers);

}

display(10,20,30,40);