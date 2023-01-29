window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const yourHandText = document.querySelector(".cardBox__hand--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cpuHandText = document.querySelector(".cardBox__hand--cpu");
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

  const calcHandText = (param) => {
    if (param === "rock") {
      return "グー";
    } else if (param === "scissors") {
      return "チョキ";
    } else {
      return "パー";
    }
  }

  const displayYourHand = (param) => {
    yourHandImage.src = `./assets/images/${param}.png`;
    yourHandText.innerHTML = calcHandText(param);
  };

  const displayCpuHand = (param) => {
    cpuHandImage.src = `./assets/images/${param}.png`;
    cpuHandText.innerHTML = calcHandText(param);
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
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = calcResult(you, cpu);
  }

  const play = (yourHand, cpuHand) => {
    displayYourHand(yourHand);
    displayCpuHand(cpuHand);
    result(yourHand, cpuHand);
  }

  // 画像のプリロード
  preloadImg();

  for(let i = 0; i < handButtons.length; i++) {
    const button = handButtons[i];
    button.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * 3);
      const yourHand = handParams[i];
      const cpuHand = handParams[randomIndex];
      play(yourHand, cpuHand);
    });
  }
});
