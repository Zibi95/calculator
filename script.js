"use strict";
const operation = document.querySelector(".operation");
const buttons = document.querySelectorAll(".buttons");

buttons.forEach((el) =>
  el.addEventListener("click", function (e) {
    if (e.target.innerText === "CE") {
      clear();
      return;
    } else if (e.target.innerText === "=") {
      operate(operation.innerText);
      return;
    }
    screenUpload(e.target.innerText);
  })
);

function screenUpload(content) {
  operation.innerText += content;
}

function clear() {
  operation.innerText = "";
  operation.previousSibling.innerText = "";
}
