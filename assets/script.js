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

  // もう一度ボタンのリスト
  const navigationRestartList = document.querySelector(".navigation__list--restart");

  // もう一度ボタンを最初は非表示にする
  navigationRestartList.style.display = "none";

  // グーを押した時
  document.querySelector(".navigation__button--rock").addEventListener("click", () => {

    // あなたの出した手
    yourHandImage.src = "./assets/images/rock.png";
    yourHandText.innerHTML = "グー";

    // CPUの出した手
    cpuHandImage.src = "./assets/images/scissors.png";
    cpuHandText.innerHTML = "チョキ";

    // じゃんけん後のカードの結果反映
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたの勝ち！";

    // ボタンの表示切り替え
    navigationHandList.style.display = "none";
    navigationRestartList.style.display = "flex";
  });

  // チョキを押した時
  document.querySelector(".navigation__button--scissors").addEventListener("click", () => {
    yourHandImage.src = "./assets/images/scissors.png";
    yourHandText.innerHTML = "チョキ";
    cpuHandImage.src = "./assets/images/paper.png";
    cpuHandText.innerHTML = "パー";
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたの勝ち！";
    navigationHandList.style.display = "none";
    navigationRestartList.style.display = "flex";
  });

  // パーを押した時
  document.querySelector(".navigation__button--paper").addEventListener("click", () => {
    yourHandImage.src = "./assets/images/paper.png";
    yourHandText.innerHTML = "パー";
    cpuHandImage.src = "./assets/images/rock.png";
    cpuHandText.innerHTML = "グー";
    cardTitle.innerHTML = "ぽんっ！"
    cardResult.innerHTML = "あなたの勝ち！";
    navigationHandList.style.display = "none";
    navigationRestartList.style.display = "flex";
  });

  document.querySelector(".navigation__button--restart").addEventListener("click", () => {

    // 出した手のところを考え中に戻す
    yourHandImage.src = "./assets/images/thinking.png";
    yourHandText.innerHTML = "考え中...";
    cpuHandImage.src = "./assets/images/thinking.png";
    cpuHandText.innerHTML = "考え中...";

    // カードの表示のリセット
    cardTitle.innerHTML = "じゃんけん...";
    cardResult.innerHTML = "";

    // ボタンの表示切り替え
    navigationHandList.style.display = "flex";
    navigationRestartList.style.display = "none";
  });
});
