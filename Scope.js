// Variables defined inside a function are only available inside that function (function Scope). They're not available outside of the function.

//Tip. We need to try to use the Function Scope always we have the option it instead the Function general.

// function General
let lastname = "Moran";

// function Scope
function sayHello(age) {
  let name = "Oscar";
  return `Hello my name is ${name} and my lastname is ${lastname}! and my age is ${age}`;
}

console.log(sayHello(32));
