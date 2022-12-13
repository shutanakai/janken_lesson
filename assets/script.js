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

  const displayYourHand = (image, text) => {
    yourHandImage.src = image;
    yourHandText.innerHTML = text;
  };

  const displayCpuHand = (image, text) => {
    cpuHandImage.src = image;
    cpuHandText.innerHTML = text;
  }

  const result = () => {
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたの勝ち！";
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

    navigationRestartHide();
  };

  // もう一度ボタンを最初は非表示にする
  navigationRestartList.style.display = "none";

  // グーを押した時
  document.querySelector(".navigation__button--rock").addEventListener("click", () => {

    // あなたの出した手
    displayYourHand("./assets/images/rock.png", "グー");

    // CPUの出した手
    displayCpuHand("./assets/images/scissors.png", "チョキ");

    // じゃんけん後のカードの結果反映
    result();

    // ボタンの表示切り替え
    navigationHandHide();
  });

  // チョキを押した時
  document.querySelector(".navigation__button--scissors").addEventListener("click", () => {
    displayYourHand("./assets/images/scissors.png", "チョキ");
    displayCpuHand("./assets/images/paper.png", "パー");
    result();
    navigationHandHide();
  });

  // パーを押した時
  document.querySelector(".navigation__button--paper").addEventListener("click", () => {
    displayYourHand("./assets/images/paper.png", "パー");
    displayCpuHand("./assets/images/rock.png", "グー");
    result();
    navigationHandHide();
  });

  document.querySelector(".navigation__button--restart").addEventListener("click", () => reset());
});
