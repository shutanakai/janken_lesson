window.addEventListener("load", () => {

  document.querySelector(".navigation__list > .__restart").style.display = "none";

  document.querySelector(".navigation__button--rock").addEventListener("click", () => {
    document.querySelector(".cardBox__img--you").src = "./assets/images/rock.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "グー";
  });

  document.querySelector(".navigation__button--scissors").addEventListener("click", () => {
    document.querySelector(".cardBox__img--you").src = "./assets/images/scissors.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "チョキ";
  });

  document.querySelector(".navigation__button--paper").addEventListener("click", () => {
    document.querySelector(".cardBox__img--you").src = "./assets/images/paper.png";
    document.querySelector(".cardBox__hand--you").innerHTML = "パー";
  });
});
