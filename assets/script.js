window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cardTitle = document.querySelector(".card__title");
  const cardResult = document.querySelector(".card__result");
  const rockButton = document.querySelector(".navigation__button--rock");
  const scissorsButton = document.querySelector(".navigation__button--scissors");
  const paperButton = document.querySelector(".navigation__button--paper");

  const displayYourHand = (param) => {
    yourHandImage.src = `./assets/images/${param}.png`;
  };

  const displayCpuHand = (param) => {
    cpuHandImage.src = `./assets/images/${param}.png`;
  };

  const result = () => {
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  }

  // グーを押した時
  rockButton.addEventListener("click", () => {

    // あなたの出した手
    displayYourHand("rock");

    // CPUの出した手
    displayCpuHand("scissors");

    // じゃんけん後のカードの結果反映
    result();
  });

  // チョキを押した時
  scissorsButton.addEventListener("click", () => {
    displayYourHand("scissors");
    displayCpuHand("paper");
    result();
  });

  // パーを押した時
  paperButton.addEventListener("click", () => {
    displayYourHand("paper");
    displayCpuHand("rock");
    result();
  });

});
