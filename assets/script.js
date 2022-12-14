window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const yourHandText = document.querySelector(".cardBox__hand--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cpuHandText = document.querySelector(".cardBox__hand--cpu");
  const cardTitle = document.querySelector(".card__title");
  const cardResult = document.querySelector(".card__result");
  const navigationHandList = document.querySelector(".navigation__list--hands");
  const navigationRestartList = document.querySelector(".navigation__list--restart");
  const rockButton = document.querySelector(".navigation__button--rock");
  const scissorsButton = document.querySelector(".navigation__button--scissors");
  const paperButton = document.querySelector(".navigation__button--paper");
  const restartButton = document.querySelector(".navigation__button--restart");

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
  };

  const displayReset = () => {
    yourHandImage.src = `./assets/images/thinking.png`;
    yourHandText.innerHTML = "かんがえちゅう...";
    cpuHandImage.src = `./assets/images/thinking.png`;
    cpuHandText.innerHTML = "かんがえちゅう...";
  };

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

  // もう一度ボタンを最初は非表示にする
  navigationRestartList.style.display = "none";

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
      result();
      navigationHandHide();
    });
  }

  restartButton.addEventListener("click", () => {

    // 出した手のところを考え中に戻す
    displayReset();

    // カードの表示のリセット
    cardReset();

    // ボタンの表示切り替え
    navigationRestartHide();

  });
});
