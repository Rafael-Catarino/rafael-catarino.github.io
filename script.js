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

/*------LINKS HEADER------*/
const headerLinksClassGeneric = document.querySelector("main").children;
const buttonHome = document.querySelector("#button__home");
const buttonAboutMe = document.querySelector("#button__about-me");
const buttonPortfolio = document.querySelector("#button__portfolio");
const buttonContact = document.querySelector("#button__contact");

buttonHome.addEventListener("click", () => {
  const containerHome = document.querySelector("#container__home");
  for (let i = 0; i < headerLinksClassGeneric.length; i++) {
    headerLinksClassGeneric[i].classList.add("class__generic");
  }
  containerHome.classList.remove("class__generic");
});

buttonAboutMe.addEventListener("click", () => {
  const containeraboutMe = document.querySelector("#container__about-me");
  for (let i = 0; i < headerLinksClassGeneric.length; i++) {
    headerLinksClassGeneric[i].classList.add("class__generic");
  }
  containeraboutMe.classList.remove("class__generic");
});

/*------LENDO UM ARQUIVO DOC------*/
const pText = document.querySelector(".text");
const endPoint = "/curriculo/about-me.doc";

fetch(endPoint)
  .then((res) => res.text())
  .then((data) => {
    pText.innerText = data;
  });
