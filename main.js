const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let disNum1 = "";
let disNum2 = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    disNum2 += e.target.innerText;
    display2El.innerText = disNum2;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!disNum2) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (disNum1 && disNum2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(disNum2);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});
function clearVar(name = "") {
  disNum1 += disNum2 + " " + name + " ";
  display1El.innerText = disNum1;
  display2El.innerText = "";
  disNum2 = "";
  tempResultEl.innerText = result;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(disNum2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(disNum2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(disNum2);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(disNum2);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(disNum2);
  }
}

equalEl.addEventListener("click", () => {
  if (!disNum2 || !disNum2) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  disNum2 = result;
  disNum1 = "";
});

clearAllEl.addEventListener("click", () => {
  disNum1 = "";
  disNum2 = "";
  display1El.innerText = "";
  display2El.innerText = "";
  result = "";
  tempResultEl.innerText = "";
});

clearLastEl.addEventListener("click", () => {
  display2El.innerText = "";
  disNum2 = "";
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);

  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("x");

  } else if (e.key == "Enter" || e.key === "=") {
    clickEqual();
  }

});
function clickButtonEl(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}
function clickOperation(key) {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
function clickEqual() {
  equalEl.click();
}
