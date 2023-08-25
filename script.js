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
