window.addEventListener("load", () => {

  const yourHandImage = document.querySelector(".cardBox__img--you");
  const yourHandText = document.querySelector(".cardBox__hand--you");
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");
  const cpuHandText = document.querySelector(".cardBox__hand--cpu");
  const cardTitle = document.querySelector(".card__title");
  const cardResult = document.querySelector(".card__result");
  const navigationHandList = document.querySelector(".navigation__list--hands");
  const navigationRestartList = document.querySelector(".navigation__list--restart");

  const displayYourHand = (param, text) => {
    yourHandImage.src = `./assets/images/${param}.png`;
    yourHandText.innerHTML = text;
  };

  const displayCpuHand = (param, text) => {
    cpuHandImage.src = `./assets/images/${param}.png`;
    cpuHandText.innerHTML = text;
  };

  const displayReset = () => {
    yourHandImage.src = "./assets/images/thinking.png";
    yourHandText.innerHTML = "かんがえちゅう...";
    cpuHandImage.src = "./assets/images/thinking.png";
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

  // グーを押した時
  document.querySelector(".navigation__button--rock").addEventListener("click", () => {

    // あなたの出した手
    displayYourHand("rock", "グー");

    // CPUの出した手
    displayCpuHand("scissors", "チョキ");

    // じゃんけん後のカードの結果反映
    result();

    // ボタンの表示切り替え
    navigationHandHide();
  });

  // チョキを押した時
  document.querySelector(".navigation__button--scissors").addEventListener("click", () => {
    displayYourHand("scissors", "チョキ");
    displayCpuHand("paper", "パー");
    result();
    navigationHandHide();
  });

  // パーを押した時
  document.querySelector(".navigation__button--paper").addEventListener("click", () => {
    displayYourHand("paper", "パー");
    displayCpuHand("rock", "グー");
    result();
    navigationHandHide();
  });

  document.querySelector(".navigation__button--restart").addEventListener("click", () => {

    // 出した手のところを考え中に戻す
    displayReset();

    // カードの表示のリセット
    cardReset();

    // ボタンの表示切り替え
    navigationRestartHide();

  });
});
