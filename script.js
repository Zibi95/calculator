"use strict";
const operationEl = document.querySelector(".operation");
const buttons = document.querySelectorAll(".buttons");
const click = (e) => {
  e.target.classList.toggle("btn-click");
  setTimeout(() => {
    e.target.classList.toggle("btn-click");
  }, 100);
};
buttons.forEach((el) =>
  el.addEventListener("click", function (e) {
    if (e.target.classList.contains("buttons")) return;
    click(e);
    if (e.target.innerText === "CE") {
      clearScreen();
      return;
    }
    if (e.target.innerText === "=") {
      operate(operationEl.innerText);
      return;
    }
    screenDisplay(e.target.innerText);
  })
);

function screenDisplay(content) {
  if (operationEl.innerText === "0") operationEl.innerText = "";
  operationEl.innerText += content;
}

function clearScreen() {
  operationEl.innerText = "0";
  operationEl.previousSibling.innerText = "";
}

function operate(operation) {
  let oper = operation;
  if (oper.includes("x")) oper = oper.replaceAll("x", "*");
  if (oper.includes("%")) oper = oper.replaceAll("%", "*(1/100)");
  operationEl.innerText = "";
  try {
    if (operationEl.previousSibling.innerText) {
      operationEl.previousSibling.innerText = `ans = ${eval(
        operationEl.previousSibling.innerText.replace("ans = ", "") + oper
      )}`;
      return;
    }
    operationEl.previousSibling.innerText = `ans = ${eval(oper)}`;
  } catch (error) {
    operationEl.previousSibling.innerText = "ERROR";
  }
}
