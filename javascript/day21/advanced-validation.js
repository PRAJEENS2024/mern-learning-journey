// Regex Validation Example

let email = "test@gmail.com";

let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(emailRegex.test(email)){

    console.log("Valid Email");

}else{

    console.log("Invalid Email");

}