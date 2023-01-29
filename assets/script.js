window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const yourHandText = document.querySelector(".cardBox__hand--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cpuHandText = document.querySelector(".cardBox__hand--cpu");
  const cardTitle = document.querySelector(".card__title");
  const cardResult = document.querySelector(".card__result");
  const rockButton = document.querySelector(".navigation__button--rock");
  const scissorsButton = document.querySelector(".navigation__button--scissors");
  const paperButton = document.querySelector(".navigation__button--paper");

  const displayYourHand = (param, text) => {
    yourHandImage.src = `./assets/images/${param}.png`;
    yourHandText.innerHTML = text;
  };

  const displayCpuHand = (param, text) => {
    cpuHandImage.src = `./assets/images/${param}.png`;
    cpuHandText.innerHTML = text;
  };

  const result = () => {
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  }

  // グーを押した時
  rockButton.addEventListener("click", () => {

    // あなたの出した手
    displayYourHand("rock", "グー");

    // CPUの出した手
    displayCpuHand("scissors", "チョキ");

    // じゃんけん後のカードの結果反映
    result();
  });

  // チョキを押した時
  scissorsButton.addEventListener("click", () => {
    displayYourHand("scissors", "チョキ");
    displayCpuHand("paper", "パー");
    result();
  });

  // パーを押した時
  paperButton.addEventListener("click", () => {
    displayYourHand("paper", "パー");
    displayCpuHand("rock", "グー");
    result();
  });

});
