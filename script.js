const projects = [
  {
    id: 1,
    title: "Shopping Cart",
    image: "image/js-shopping-cart.png", // thumbnail do card
    description:
      "Aplicação de carrinho de compras desenvolvida com HTML, CSS e JavaScript puro, consumindo dados de uma API externa. O projeto permite buscar produtos, adicionar e remover itens do carrinho, calcular o valor total dinamicamente e tratar erros de requisição, aplicando conceitos de manipulação de DOM, programação assíncrona e organização modular de código.",
    techs: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/Rafael-Catarino/js-shopping-cart",
    linkDemo: "https://rafael-catarino.github.io/js-shopping-cart/",
  },
  {
    id: 2,
    title: "Pokedex",
    image: "image/js-pokedex.png",
    description:
      "Aplicação Pokedex desenvolvida com HTML, CSS e JavaScript, consumindo dados da PokeAPI. Implementa busca em tempo real, carregamento progressivo com infinite scroll e renderização dinâmica de componentes utilizando requisições assíncronas e Promise.all.",
    techs: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/Rafael-Catarino/js-pokedex",
    linkDemo: "https://rafael-catarino.github.io/js-pokedex/",
  },
  {
    id: 3,
    title: "TodoList",
    image: "image/js-todo-list.png",
    description:
      "Aplicação de lista de tarefas desenvolvida com HTML, CSS e JavaScript, permitindo adicionar, remover, concluir e reordenar tarefas. Os dados são persistidos no navegador utilizando localStorage, garantindo armazenamento mesmo após recarregar a página.",
    techs: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/Rafael-Catarino/projeto-todo-list",
    linkDemo: "https://rafael-catarino.github.io/projeto-todo-list/",
  },
];

const iconMap = {
  JavaScript: "fa-brands fa-square-js",
  HTML: "fa-brands fa-html5",
  CSS: "fa-brands fa-css3-alt",
  Python: "fa-brands fa-python",
};

/*------BOTÃO HAMBURGER HEADER------*/
const headerButton = document.querySelector(".header__button");
const title = document.querySelector(".home__title");
const main = document.querySelector("main");
const headerNav = document.querySelector(".header__nav");
const headerLinks = document.querySelectorAll("a");

headerLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    document.querySelector(".check")?.classList.remove("check");
    event.target.classList.add("check");
  });
});

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
  headerNav.classList.toggle("header__nav--disappear");
  headerButton.classList.toggle("header__button--color");
});

main.addEventListener("click", () => {
  headerNav.classList = "header__nav header__nav--disappear";
  headerButton.classList.remove("header__button--color");
});

headerNav.addEventListener("click", () => {
  headerNav.classList = "header__nav header__nav--disappear";
  headerButton.classList.remove("header__button--color");
});

/*----- button theme -----*/
const headerButtonTheme = document.getElementById("header__button__theme");
const imageLight = document.querySelector(".theme__image.light");
const imageDark = document.querySelector(".theme__image.dark");
const section = document.querySelectorAll("section");
const imgGitHub = document.querySelector("#gitHub");

headerButtonTheme.addEventListener("click", () => {
  headerButtonTheme.classList.toggle("dark");
  imageLight.classList.toggle("active");
  imageDark.classList.toggle("active");
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle("dark");
  }
});

/*----- Slider -----*/
let count = 1;
const total = 4;
let intervalTime = 10000;
let sliderInterval;

const btnRadios = document.querySelectorAll(".btn-radio");

function startSlider() {
  sliderInterval = setInterval(nextImage, intervalTime);
}

function nextImage() {
  count++;
  if (count > total) count = 1;
  updateSlider();
}

function updateSlider() {
  document.getElementById("radio" + count).checked = true;
}

btnRadios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    clearInterval(sliderInterval);
    count = index + 1;
    intervalTime = 15000;
    startSlider();
  });
});

/* ----- cards projects ---- */
const portfolio_projects = document.querySelector(".portfolio__projects");
const modal = document.querySelector(".modal");
const project_title = document.querySelector(".modal h2");
const project_description = document.querySelector(
  ".modal__container__description p",
);
const project_botton_github = document.querySelector(".portfolio_btn_github");
console.log(project_botton_github);

const project_botton_application = document.querySelector(
  ".portfolio_btn_application",
);
const close_modal = document.querySelector(".modal__close__button");

projects.forEach((project) => {
  const divPotfolio = document.createElement("div");
  divPotfolio.classList.add("portfolio__projects__div");
  divPotfolio.style.backgroundImage = `url('${project.image}')`;

  const overlay = document.createElement("div");
  overlay.classList.add("portfolio__projects__overlay");

  const techsContainer = document.createElement("div");
  techsContainer.classList.add("portfolio__projects__techs");

  project.techs.forEach((tech) => {
    const icon = document.createElement("i");
    icon.className = iconMap[tech] || "fa-solid fa-code";
    techsContainer.appendChild(icon);
  });

  overlay.appendChild(techsContainer);
  divPotfolio.appendChild(overlay);

  divPotfolio.addEventListener("click", () => {
    project_title.textContent = project.title;
    project_description.textContent = project.description;
    project_botton_github.href = project.linkGithub;
    project_botton_application.href = project.linkDemo;
    modal.showModal();
  });
  portfolio_projects.appendChild(divPotfolio);
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close();
  }
});

close_modal.addEventListener("click", () => {
  modal.close();
});

window.onload = () => {
  startSlider();
  updateSlider();
  toWriteTittle();
};
