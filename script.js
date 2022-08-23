const headerButton = document.querySelector(".header__button");
const ulLinkHeader = document.querySelector(".header__list");

headerButton.addEventListener('click', () => {
  const navHeader = document.querySelector('.header__nav');
  if (navHeader.classList == 'header__nav header__nav--disappear') {
    navHeader.classList.remove('header__nav--disappear');
    navHeader.classList = 'header__nav';
    ulLinkHeader.addEventListener('click', () => {
      navHeader.classList = 'header__nav header__nav--disappear';
    });
  } else {
    navHeader.classList = 'header__nav header__nav--disappear';
  }
});