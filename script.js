/*------BOTÃO HAMBURGER HEADER------*/
const headerButton = document.querySelector(".header__button");
const title = document.querySelector(".home__title");
const main = document.querySelector("main");
const headerNav = document.querySelector(".header__nav");
const headerA = document.querySelectorAll("a");
const btnRadio = document.querySelectorAll(".btn-radio");

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

/*----- button theme -----*/
const headerButtonTheme = document.getElementById("header__button__theme");
const section = document.querySelectorAll("section");
const imgGitHub = document.querySelector("#gitHub");

headerButtonTheme.addEventListener("click", () => {
  headerButtonTheme.classList.toggle("dark");
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle("dark");
  }
});

/*----- Slider -----*/
const passingTheSlider = () => {
  let count = 1;
  let min = 15000;
  document.getElementById("radio1").checked = true;

  setInterval(() => {
    nextImage();
  }, min);

  function nextImage() {
    count++;
    if (count > 4) {
      count = 1;
    }

    for (let i = 0; i < btnRadio.length; i++) {
      btnRadio[i].addEventListener("click", (event) => {
        const idDiv = event.target.id;
        if (idDiv === "radio1") {
          count = 1;
          min = 10000;
        } else if (idDiv === "radio2") {
          count = 2;
          min = 10000;
        } else if (idDiv === "radio3") {
          count = 3;
          min = 10000;
        } else if (idDiv === "radio4") {
          cout = 4;
          min = 10000;
        }
      });
    }

    document.getElementById("radio" + count).checked = true;
  }
};

/* ----- popup projects ---- */
const portfolio_projects = document.querySelectorAll(
  ".portfolio__projects__div"
);
const modal = document.querySelectorAll(".modal");
const close_modal = document.querySelectorAll(".modal__close__button");

for (let i = 0; i < portfolio_projects.length; i++) {
  portfolio_projects[i].addEventListener("click", () => {
    modal[i].showModal();
  });
}

for (let i = 0; i < close_modal.length; i++) {
  close_modal[i].addEventListener("click", () => {
    modal[i].close();
  });
}

window.onload = [passingTheSlider(), toWriteTittle()];
