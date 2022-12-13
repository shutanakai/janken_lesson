window.addEventListener("load", () => {

  // もう一度ボタンを最初は非表示にする
  document.querySelector(".navigation__list--restart").style.display = "none";

  // グーを押した時
  document.querySelector(".navigation__button--rock").addEventListener("click", () => {

    // あなたの出した手
    document.querySelector(".cardBox__img--you").src = "./assets/images/rock.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "グー";

    // CPUの出した手
    document.querySelector(".cardBox__img--cpu").src = "./assets/images/scissors.png";
    document.querySelector(".cardBox__hand--cpu").innerHTML = "チョキ";

    // じゃんけん後のカードの結果反映
    document.querySelector(".card__title").innerHTML = "ぽんっ！"
    document.querySelector(".card__result").innerHTML = "あなたのかち！";

    // ボタンの表示切り替え
    document.querySelector(".navigation__list--hands").style.display = "none";
    document.querySelector(".navigation__list--restart").style.display = "flex";
  });

  // チョキを押した時
  document.querySelector(".navigation__button--scissors").addEventListener("click", () => {
    document.querySelector(".cardBox__img--you").src = "./assets/images/scissors.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "チョキ";
    document.querySelector(".cardBox__img--cpu").src = "./assets/images/paper.png";
    document.querySelector(".cardBox__hand--cpu").innerHTML = "パー";
    document.querySelector(".card__title").innerHTML = "ぽんっ！"
    document.querySelector(".card__result").innerHTML = "あなたのかち！";
    document.querySelector(".navigation__list--hands").style.display = "none";
    document.querySelector(".navigation__list--restart").style.display = "flex";
  });

  // パーを押した時
  document.querySelector(".navigation__button--paper").addEventListener("click", () => {
    document.querySelector(".cardBox__img--you").src = "./assets/images/paper.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "パー";
    document.querySelector(".cardBox__img--cpu").src = "./assets/images/rock.png";
    document.querySelector(".cardBox__hand--cpu").innerHTML = "グー";
    document.querySelector(".card__title").innerHTML = "ぽんっ！"
    document.querySelector(".card__result").innerHTML = "あなたのかち！";
    document.querySelector(".navigation__list--hands").style.display = "none";
    document.querySelector(".navigation__list--restart").style.display = "flex";
  });

  document.querySelector(".navigation__button--restart").addEventListener("click", () => {

    // 出した手のところを考え中に戻す
    document.querySelector(".cardBox__img--you").src = "./assets/images/thinking.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "かんがえちゅう...";
    document.querySelector(".cardBox__img--cpu").src = "./assets/images/thinking.png";
    document.querySelector(".cardBox__hand--cpu").innerHTML = "かんがえちゅう...";

    // カードの表示のリセット
    document.querySelector(".card__title").innerHTML = "じゃんけん...";
    document.querySelector(".card__result").innerHTML = "";

    // ボタンの表示切り替え
    document.querySelector(".navigation__list--hands").style.display = "flex";
    document.querySelector(".navigation__list--restart").style.display = "none";
  });
});
