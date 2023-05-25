let sum = 0;
let totalSum = document.querySelector(".sum");

document.querySelector(".btn").addEventListener("click", function () {
  let num1 = Number(document.querySelector(".inputfield1").value);
  let num2 = Number(document.querySelector(".inputfield2").value);
  sum = num1 + num2;
  totalSum.textContent = sum;
});
