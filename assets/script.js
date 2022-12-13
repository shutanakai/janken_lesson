window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const yourHandText = document.querySelector(".cardBox__hand--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cpuHandText = document.querySelector(".cardBox__hand--cpu");
  const handImages = document.querySelectorAll(".cardBox__img");
  const handTexts = document.querySelectorAll(".cardBox__hand");
  const cardTitle = document.querySelector(".card__title");
  const cardResult = document.querySelector(".card__result");
  const navigationHandList = document.querySelector(".navigation__list--hands");
  const navigationRestartList = document.querySelector(".navigation__list--restart");
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
      return "あなたの勝ち！";
    } else {
      return "あなたの負け！";
    }
  }

  const result = (you, cpu) => {
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = calcResult(you, cpu);
  }

  const navigationHandHide = () => {
    navigationHandList.style.display = "none";
    navigationRestartList.style.display = "flex";
  };

  const navigationRestartHide = () => {
    navigationHandList.style.display = "flex";
    navigationRestartList.style.display = "none";
  }

  const cardReset = () => {
    cardTitle.innerHTML = "じゃんけん...";
    cardResult.innerHTML = "";
  }

  const reset = () => {
    // 出した手のところを考え中に戻す
    for(let i = 0; i < handImages.length; i++) {
      handImages[i].src = "./assets/images/thinking.png";
      handTexts[i].innerHTML = "考え中...";
    }

    // カードの表示のリセット
    cardReset();

    // ボタンの表示切り替え
    navigationRestartHide();
  };

  // 画像のプリロード
  preloadImg();

  // もう一度ボタンを最初は非表示にする
  navigationRestartList.style.display = "none";

  for(let i = 0; i < handButtons.length; i++) {
    const button = handButtons[i];
    button.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * 3);
      const yourHand = handParams[i];
      const cpuHand = handParams[randomIndex];
      displayYourHand(yourHand);
      displayCpuHand(cpuHand);
      result(yourHand, cpuHand);
      navigationHandHide();
    });
  }

  document.querySelector(".navigation__button--restart").addEventListener("click", () => reset());
});
