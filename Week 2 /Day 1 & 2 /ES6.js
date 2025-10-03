// Spread & Rest
let nums = [1, 2, 3];
let moreNums = [...nums, 4, 5];
console.log(moreNums);

function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4));

// Destructuring
let [first, second] = fruits;
let {name: studentName, age: studentAge} = student;
console.log(first, second, studentName, studentAge);
