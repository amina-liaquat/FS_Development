// setTimeout
setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);

// Promises
let promise = new Promise((resolve, reject) => {
    let success = true;
    success ? resolve("Task completed!") : reject("Error occurred!");
});
promise.then(msg => console.log(msg)).catch(err => console.log(err));

// async/await
async function fetchData() {
    return "Data received!";
}
fetchData().then(console.log);
