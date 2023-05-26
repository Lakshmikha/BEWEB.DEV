const principle = document.querySelector(".principle");
const tenure = document.querySelector(".tenure");
const interest = document.querySelector(".interest");
const btnEmi = document.querySelector(".btn");

btnEmi.addEventListener("click", function () {
  let p = Number(principle.value);
  let t = Number(tenure.value) * 12;
  let r = Number(interest.value) / 100 / 12;
  let emiCalc = p * r * ((1 + r) ** t / ((1 + r) ** t - 1));
  console.log(emiCalc);
  document.querySelector(".emicalc").textContent = Math.trunc(emiCalc);
});
