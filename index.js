let firstBlock = "";
let secondBlock = "";
let numericOperator = "";
let result;

let buttons = document.querySelectorAll(".numberButton");
let display = document.getElementById("displayText");
let buttonOperators = document.querySelectorAll(".operator");
let numberButtonEqual = document.getElementById("numberButtonEqual");

const operationHandler = (event) => {
  numericOperator = event.target.value;
  display.innerText = "";
};

const buttonsHandler = (event) => {
  if (numericOperator === "") {
    firstBlock += event.target.value;
    display.innerText = firstBlock;
  } else {
    secondBlock += event.target.value;
    display.innerText = secondBlock;
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

buttons.forEach((button) => {
  button.addEventListener("click", buttonsHandler);
});

buttonOperators.forEach((operator) => {
  operator.addEventListener("click", operationHandler);
});

numberButtonEqual.addEventListener("click", buttonEqualHandler);

/*
separar a los operators de los numeros con una clase, para que cuando los tocamos
se borre lo que esta en el displayText y a la vez el operador 
se guarde como string en una variable (les puse values de string como "x", "/", etc)
una opcion seria que segun esa variable 
hacer un if else que realice el calculo que corresponda
*/
/*
buscar la manera de que numericOperator almacene solo el ULTIMO valor ingresado
y reemplace el que tiene en el momento, para mantenerse siempre con 1 digito
(porque si no, se permite poner muchos operadores numericos y queda como '4x4xx//+4-4')

- podria hacer una funcion que agarre el n de caracteres y lo pase a una variable
luego agarre el caracter que esta al final (con charAt, supongo) y lo devuelva a una
string que va a ser la que finalmente muestre el display


let numericOperatorLength = numericOperator.length;
numericOperator.addEventListener();
console.log(numericOperatorLength);

/*buscar la manera de que el display deje de reflejar a firstBlock luego de tocar un operador,
y que refleje a secondBlock. posterior a eso, que refleje solo el resultado. */
