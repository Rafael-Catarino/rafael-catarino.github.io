/*------BOTÃO HAMBURGER HEADER------*/
const headerButton = document.querySelector(".header__button");
const title = document.querySelector(".home__title");
const main = document.querySelector("main");
const headerNav = document.querySelector(".header__nav");
const headerA = document.querySelectorAll("a");

for (let i = 0; i < headerA.length; i++) {
  headerA[i].addEventListener("click", (event) => {
    const check = document.querySelector(".check");
    event.target.classList.add("check");
    check.classList.remove("check");
  });
}

const toWriteTittle = () => {
  const arrTitle = title.innerHTML.split("");
  title.innerHTML = "";
  arrTitle.forEach((letter, i) => {
    setTimeout(() => {
      title.innerHTML += letter;
    }, 75 * i);
  });
};

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

/*------- Botão Tema --------*/
// const inputCheckboxTheme = document.querySelector(".input__checkbox__theme");

// inputCheckboxTheme.addEventListener("click", () => {
//   if (inputCheckboxTheme.checked) {
//     const sectionAll = document.querySelectorAll("section");
//     sectionAll.forEach((section) => {
//       section.style.backgroundColor = "var(--light-mode)";
//       section.style.color = "var(--dark-mode)";
//     });
//     console.log("marcou");
//   } else {
//     console.log("desmarcou");
//     document.querySelector("section").style.background = "var(--dark-mode)";
//   }
// });

// const buttonTheme = () => {
//   if (inputCheckboxTheme.checked) {
//     console.log("marcou");
//   } else {
//     console.log("desmarcou");
//   }
// };

window.onload = [passingTheSlider(), toWriteTittle()];

/*------LENDO UM ARQUIVO DOC------*/
// const pText = document.querySelector(".text");
// const endPoint = "/curriculo/about-me.doc";
// fetch(endPoint)
//   .then((res) => res.text())
//   .then((data) => {
//     pText.innerText = data;
//   });
