let btnRoll = document.querySelector("button");
let rollDice = document.querySelector(".dice");
let rollNumber = document.querySelector(".dice1");

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  rollDice.src = `assets/dice-${dice}.png`;
  rollNumber.textContent = dice;
});
