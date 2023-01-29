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

  const result = (you, cpu) => {
    cardTitle.innerHTML = "ぽんっ！";
    if (you === cpu) {
      cardResult.innerHTML = "あいこ！";
    } else if (
      (you === "rock" && cpu === "scissors") ||
      (you === "scissors" && cpu === "paper") ||
      (you === "paper" && cpu === "rock")
    ) {
      cardResult.innerHTML = "あなたのかち！";
    } else {
      cardResult.innerHTML = "あなたのまけ...";
    }
  }

  const handButtons = [rockButton, scissorsButton, paperButton];
  const handParams = ["rock", "scissors", "paper"];

  for(let i = 0; i < handButtons.length; i++) {
    const button = handButtons[i];
    button.addEventListener("click", () => {
      const yourHand = handParams[i];

      // 0~2のランダムな数字の取得
      const randomIndex = Math.floor(Math.random() * 3);
      // CPUの手をランダムに決める
      const cpuHand = handParams[randomIndex];

      displayYourHand(yourHand);
      displayCpuHand(cpuHand);
      result(yourHand, cpuHand);
    });
  }
});
