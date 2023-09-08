/*------BOTÃO HAMBURGER HEADER------*/
const headerButton = document.querySelector(".header__button");
const main = document.querySelector("main");
const headerNav = document.querySelector(".header__nav");

headerButton.addEventListener("click", () => {
  const navHeader = document.querySelector(".header__nav");
  navHeader.classList.toggle("header__nav--disappear");
  headerButton.classList.toggle("header__button--color");
});

main.addEventListener("click", () => {
  const navHeader = document.querySelector(".header__nav");
  navHeader.classList = "header__nav header__nav--disappear";
  headerButton.classList.remove("header__button--color");
});

headerNav.addEventListener("click", () => {
  const navHeader = document.querySelector(".header__nav");
  navHeader.classList = "header__nav header__nav--disappear";
  headerButton.classList.remove("header__button--color");
});

/*----- Slider -----*/
const passingTheSlider = () => {
  let count = 1;
  document.getElementById("radio1").checked = true;

  setInterval(() => {
    nextImage();
  }, 10000);

  function nextImage() {
    count++;
    if (count >= 4) {
      count = 1;
    }

    document.getElementById("radio" + count).checked = true;
  }
};

window.onload = passingTheSlider();

/*------LENDO UM ARQUIVO DOC------*/
// const pText = document.querySelector(".text");
// const endPoint = "/curriculo/about-me.doc";
// fetch(endPoint)
//   .then((res) => res.text())
//   .then((data) => {
//     pText.innerText = data;
//   });
