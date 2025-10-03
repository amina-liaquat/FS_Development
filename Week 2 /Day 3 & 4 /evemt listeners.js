let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Button was clicked!");
});

let input = document.getElementById("input");
input.addEventListener("input", (e) => {
    console.log("You typed:", e.target.value);
});
