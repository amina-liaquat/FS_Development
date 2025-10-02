  // Functions 

function greet() {
  console.log("Hello, world!");
}

// Call the function
greet();  // Output: Hello, world!


     // Functions types in JS 

   // Function Declaration

function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8

    // Function Expression

const multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 6)); // 24

  // Arrow Function

const subtract = (a, b) => a - b;

console.log(subtract(10, 4)); // 6

   // Anonymous Functions

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

   // Nested Functions

function outer() {
  function inner() {
    return "Hello from inner!";
  }
  return inner();
}

console.log(outer()); // Hello from inner!

   // Callback Functions

function processUserInput(callback) {
  let name = "Amina";
  callback(name);
}

processUserInput(function(name) {
  console.log("Hello " + name);
});


    


