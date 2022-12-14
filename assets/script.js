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

  // じゃんけんのボタンリスト
  const navigationHandList = document.querySelector(".navigation__list--hands");

  // もういちどボタンのリスト
  const navigationRestartList = document.querySelector(".navigation__list--restart");

  // じゃんけんボタン
  const rockButton = document.querySelector(".navigation__button--rock");
  const scissorsButton = document.querySelector(".navigation__button--scissors");
  const paperButton = document.querySelector(".navigation__button--paper");

  // もういちどボタン
  const restartButton = document.querySelector(".navigation__button--restart");

  // もう一度ボタンを最初は非表示にする
  navigationRestartList.style.display = "none";

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

    // ボタンの表示切り替え
    navigationHandList.style.display = "none";
    navigationRestartList.style.display = "flex";
  });

  // チョキを押した時
  scissorsButton.addEventListener("click", () => {
    yourHandImage.src = "./assets/images/scissors.png";
    yourHandText.innerHTML = "チョキ";
    cpuHandImage.src = "./assets/images/paper.png";
    cpuHandText.innerHTML = "パー";
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
    navigationHandList.style.display = "none";
    navigationRestartList.style.display = "flex";
  });

  // パーを押した時
  paperButton.addEventListener("click", () => {
    yourHandImage.src = "./assets/images/paper.png";
    yourHandText.innerHTML = "パー";
    cpuHandImage.src = "./assets/images/rock.png";
    cpuHandText.innerHTML = "グー";
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたのかち！";
    navigationHandList.style.display = "none";
    navigationRestartList.style.display = "flex";
  });

  restartButton.addEventListener("click", () => {

    // 出した手のところを考え中に戻す
    yourHandImage.src = "./assets/images/thinking.png";
    yourHandText.innerHTML = "かんがえちゅう...";
    cpuHandImage.src = "./assets/images/thinking.png";
    cpuHandText.innerHTML = "かんがえちゅう...";

    // カードの表示のリセット
    cardTitle.innerHTML = "じゃんけん...";
    cardResult.innerHTML = "";

    // ボタンの表示切り替え
    navigationHandList.style.display = "flex";
    navigationRestartList.style.display = "none";
  });
});
