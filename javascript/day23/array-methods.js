let numbers = [1,2,3,4,5];

// map

let doubled = numbers.map((value)=>{

    return value * 2;

});

console.log(doubled);

// filter

let even = numbers.filter((value)=>{

    return value % 2 === 0;

});

console.log(even);

// reduce

let total = numbers.reduce((acc,current)=>{

    return acc + current;

},0);

console.log(total);

// forEach

numbers.forEach((value)=>{

    console.log(value);

});