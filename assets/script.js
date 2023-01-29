window.addEventListener("load", () => {

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
  });

  // チョキを押した時
  document.querySelector(".navigation__button--scissors").addEventListener("click", () => {
    document.querySelector(".cardBox__img--you").src = "./assets/images/scissors.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "チョキ";
    document.querySelector(".cardBox__img--cpu").src = "./assets/images/paper.png";
    document.querySelector(".cardBox__hand--cpu").innerHTML = "パー";
    document.querySelector(".card__title").innerHTML = "ぽんっ！"
    document.querySelector(".card__result").innerHTML = "あなたのかち！";
  });

  // パーを押した時
  document.querySelector(".navigation__button--paper").addEventListener("click", () => {
    document.querySelector(".cardBox__img--you").src = "./assets/images/paper.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "パー";
    document.querySelector(".cardBox__img--cpu").src = "./assets/images/rock.png";
    document.querySelector(".cardBox__hand--cpu").innerHTML = "グー";
    document.querySelector(".card__title").innerHTML = "ぽんっ！"
    document.querySelector(".card__result").innerHTML = "あなたのかち！";
  });
});
