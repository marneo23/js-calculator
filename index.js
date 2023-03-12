let firstBlock = "";
let secondBlock = "";
let numericOperator = "";
let result;
let clear;

let buttons = document.querySelectorAll(".button");
let display = document.getElementById("displayText");
let buttonOperators = document.querySelectorAll(".operator");
let numberButtonEqual = document.getElementById("numberButtonEqual");
let buttonClear = document.getElementById("clearButton");

const operationHandler = (event) => {
  numericOperator = event.target.value; //numericOperator va a recibir el valor del boton que se clickee
  display.innerText = numericOperator; //display va a mostrar el valor de numericOperator
};

const buttonsHandler = (event) => {
  if ((display.innerText = result)) {
    firstBlock = result;
    secondBlock = "";
    numericOperator = "";
    result = null;
  } else {
    if (numericOperator === "") {
      firstBlock += event.target.value;
      display.innerText = firstBlock; //si el numericOperator esta vacio, pasamos al display la primer tanda de numeros
    } else {
      secondBlock += event.target.value;
      display.innerText = secondBlock; //si el numericOperator ya tiene numeros, le pasamos la segunda tanda.
    }
  }
};

const buttonEqualHandler = (event) => {
  const firstBlocktoNumber = parseInt(firstBlock);
  const secondBlocktoNumber = parseInt(secondBlock);

  switch (numericOperator) {
    case "+":
      result = firstBlocktoNumber + secondBlocktoNumber;
      display.innerText = result.toString();
      break;
    case "-":
      result = firstBlocktoNumber - secondBlocktoNumber;
      display.innerText = result.toString();
      break;
    case "/":
      result = firstBlocktoNumber / secondBlocktoNumber;
      display.innerText = result.toString();
      break;
    case "x":
      result = firstBlocktoNumber * secondBlocktoNumber;
      display.innerText = result.toString();
      break;
    default:
      console.log("actionDefault");
  }
};

buttonClear.onclick = buttonClearHandler = (event) => {
  if (display.innerText == "") {
    display.innerText = "Clear";
  } else {
    firstBlock = "";
    secondBlock = "";
    numericOperator = "";
    result = "";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", buttonsHandler);
});

buttonOperators.forEach((operator) => {
  operator.addEventListener("click", operationHandler);
});

numberButtonEqual.addEventListener("click", buttonEqualHandler);

//to do: cuando seguimos agregando operaciones tras un resultado, se bugea. hacer que se realicen las operaciones sobre el resultado en pantalla. Una idea puede ser asignar el resultado a "firstBlock"
