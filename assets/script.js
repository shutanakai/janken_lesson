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

  const handButtons = [rockButton, scissorsButton, paperButton];
  const handParams = ["rock", "scissors", "paper"];
  for(let i = 0; i < handButtons.length; i++) {

    // グー、チョキ、パーそれぞれのボタン
    const button = handButtons[i];
    button.addEventListener("click", () => {
      const yourHand = handParams[i];

      // 0~2のランダムな数字の取得
      // CPUの手をランダムに決める
      const randomIndex = Math.floor(Math.random() * 3);
      const cpuHand = handParams[randomIndex];

      result(yourHand, cpuHand);
    });
  }

});
