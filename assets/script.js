window.addEventListener("load", () => {

  // あなたの手の画像
  const yourHandImage = document.querySelector(".cardBox__img--you");

  // CPUの手の画像
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");

  // カードのタイトル
  const cardTitle = document.querySelector(".card__title");

  // カードの結果
  const cardResult = document.querySelector(".card__result");

  // じゃんけんボタン
  const rockButton = document.querySelector(".navigation__button--rock");
  const scissorsButton = document.querySelector(".navigation__button--scissors");
  const paperButton = document.querySelector(".navigation__button--paper");

  // グーを押した時
  rockButton.addEventListener("click", () => {

    // あなたの出した手
    yourHandImage.src = "./assets/images/rock.png";

    // CPUの出した手
    cpuHandImage.src = "./assets/images/scissors.png";

    // じゃんけん後のカードの結果反映
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  });

  // チョキを押した時
  scissorsButton.addEventListener("click", () => {
    yourHandImage.src = "./assets/images/scissors.png";
    cpuHandImage.src = "./assets/images/paper.png";
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  });

  // パーを押した時
  paperButton.addEventListener("click", () => {
    yourHandImage.src = "./assets/images/paper.png";
    cpuHandImage.src = "./assets/images/rock.png";
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  });

});
