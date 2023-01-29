window.addEventListener("load", () => {

  // あなたの手の画像
  const yourHandImage = document.querySelector(".cardBox__img--you");

  // あなたの手のテキスト
  const yourHandText = document.querySelector(".cardBox__hand--you");

  // CPUの手の画像
  const cpuHandImage = document.querySelector(".cardBox__img--cpu");

  // CPUの手のテキスト
  const cpuHandText = document.querySelector(".cardBox__hand--cpu");

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
    yourHandText.innerHTML = "グー";

    // CPUの出した手
    cpuHandImage.src = "./assets/images/scissors.png";
    cpuHandText.innerHTML = "チョキ";

    // じゃんけん後のカードの結果反映
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  });

  // チョキを押した時
  scissorsButton.addEventListener("click", () => {
    yourHandImage.src = "./assets/images/scissors.png";
    yourHandText.innerHTML = "チョキ";
    cpuHandImage.src = "./assets/images/paper.png";
    cpuHandText.innerHTML = "パー";
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  });

  // パーを押した時
  paperButton.addEventListener("click", () => {
    yourHandImage.src = "./assets/images/paper.png";
    yourHandText.innerHTML = "パー";
    cpuHandImage.src = "./assets/images/rock.png";
    cpuHandText.innerHTML = "グー";
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
  });

});
