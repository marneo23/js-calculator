let firstBlock = "";
let secondBlock;
let numericOperator;
let result;

let buttons = document.querySelectorAll(".numberButton");
let display = document.getElementById("displayText");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    firstBlock += event.target.value;
    display.innerText = firstBlock;
  });
});
