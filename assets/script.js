window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cardTitle = document.querySelector(".card__title");
  const cardResult = document.querySelector(".card__result");
  const navigationHandList = document.querySelector(".navigation__list--hands");
  const handButtons = navigationHandList.querySelectorAll(".navigation__button");

  const handParams = ["rock", "scissors", "paper"];

  const preloadImg = () => {
    const images = handParams.map((param) => `./assets/images/${param}.png`);
    images.forEach((imgSrc) => {
        const img = document.createElement('img');
        img.src = imgSrc;
    });
  }

  const calcResult = (you, cpu) => {
    if (you === cpu) {
      return "あいこ！";
    } else if (
      (you === "rock" && cpu === "scissors") ||
      (you === "scissors" && cpu === "paper") ||
      (you === "paper" && cpu === "rock")
    ) {
      return "あなたのかち！";
    } else {
      return "あなたのまけ...";
    }
  }

  const result = (you, cpu) => {
    yourHandImage.src = `./assets/images/${you}.png`;
    cpuHandImage.src = `./assets/images/${cpu}.png`;
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = calcResult(you, cpu);
  }

  // 画像のプリロード
  preloadImg();

  for(let i = 0; i < handButtons.length; i++) {
    const button = handButtons[i];
    button.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * 3);
      const yourHand = handParams[i];
      const cpuHand = handParams[randomIndex];
      result(yourHand, cpuHand);
    });
  }
});
