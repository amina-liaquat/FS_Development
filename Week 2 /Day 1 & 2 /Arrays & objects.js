// Array
let fruits = ["apple", "banana", "cherry"];
fruits.push("mango");
console.log(fruits);

// Array methods
fruits.forEach(fruit => console.log(fruit));
let upper = fruits.map(fruit => fruit.toUpperCase());
console.log(upper);

// Object
let student = {
    name: "Amina",
    age: 22,
    course: "CS"
};
console.log(student.name, student["course"]);
