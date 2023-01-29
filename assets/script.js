window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cardTitle = document.querySelector(".card__title");
  const cardResult = document.querySelector(".card__result");
  const rockButton = document.querySelector(".navigation__button--rock");
  const scissorsButton = document.querySelector(".navigation__button--scissors");
  const paperButton = document.querySelector(".navigation__button--paper");

  const result = (you, cpu) => {
    yourHandImage.src = `./assets/images/${you}.png`;
    cpuHandImage.src = `./assets/images/${cpu}.png`;

    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  }

  // グーを押した時
  rockButton.addEventListener("click", () => {

    // じゃんけん後のカードの結果反映
    result("rock", "scissors");
  });

  // チョキを押した時
  scissorsButton.addEventListener("click", () => {
    result("scissors", "paper");
  });

  // パーを押した時
  paperButton.addEventListener("click", () => {
    result("paper", "rock");
  });

});
