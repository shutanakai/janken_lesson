window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const yourHandText = document.querySelector(".cardBox__hand--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cpuHandText = document.querySelector(".cardBox__hand--cpu");
  const cardTitle = document.querySelector(".card__title");
  const cardResult = document.querySelector(".card__result");
  const navigationHandList = document.querySelector(".navigation__list--hands");
  const navigationRestartList = document.querySelector(".navigation__list--restart");
  const handButtons = navigationHandList.querySelectorAll(".navigation__button");

  const displayYourHand = (param, text) => {
    yourHandImage.src = `./assets/images/${param}.png`;
    yourHandText.innerHTML = text;
  };

  const displayCpuHand = (param, text) => {
    cpuHandImage.src = `./assets/images/${param}.png`;
    cpuHandText.innerHTML = text;
  };

  const displayReset = () => {
    yourHandImage.src = `./assets/images/thinking.png`;
    yourHandText.innerHTML = "かんがえちゅう...";
    cpuHandImage.src = `./assets/images/thinking.png`;
    cpuHandText.innerHTML = "かんがえちゅう...";
  };

  const result = () => {
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
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

  const handParams = ["rock", "scissors", "paper"];
  const handTextList = ["グー", "チョキ", "パー"];
  for(let i = 0; i < handButtons.length; i++) {
    const button = handButtons[i];
    button.addEventListener("click", () => {
      const yourHand = handParams[i];
      const yourText = handTextList[i];

      // 0~2のランダムな数字の取得
      // CPUの手をランダムに決める
      const randomIndex = Math.floor(Math.random() * 3);
      const cpuHand = handParams[randomIndex];
      const cpuText = handTextList[randomIndex];

      displayYourHand(yourHand, yourText);
      displayCpuHand(cpuHand, cpuText);
      result();
      navigationHandHide();
    });
  }

  document.querySelector(".navigation__button--restart").addEventListener("click", () => {

    // 出した手のところを考え中に戻す
    displayReset();

    // カードの表示のリセット
    cardReset();

    // ボタンの表示切り替え
    navigationRestartHide();

  });
});
