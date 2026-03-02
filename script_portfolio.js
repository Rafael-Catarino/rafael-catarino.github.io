const projects = [
  {
    id: 1,
    title: "Shopping Cart",
    image: "image/js-shopping-cart.png",
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
    title: "Todo-List",
    image: "image/js-todo-list.png",
    description:
      "Aplicação de lista de tarefas desenvolvida com HTML, CSS e JavaScript, permitindo adicionar, remover, concluir e reordenar tarefas. Os dados são persistidos no navegador utilizando localStorage, garantindo armazenamento mesmo após recarregar a página.",
    techs: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/Rafael-Catarino/projeto-todo-list",
    linkDemo: "https://rafael-catarino.github.io/projeto-todo-list/",
  },
  {
    id: 4,
    title: "Jogo da Forca",
    image: "image/js-forca.png",
    description:
      "Jogo da Forca desenvolvido com JavaScript puro, incluindo sistema de categorias, sorteio aleatório de palavras, controle de estado (vitória e derrota) e atualização dinâmica da interface via manipulação de DOM. O projeto demonstra aplicação prática de lógica de programação e interação com eventos.",
    techs: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/Rafael-Catarino/jogo-da-forca",
    linkDemo: "https://rafael-catarino.github.io/jogo-da-forca/",
  },
  {
    id: 5,
    title: "Pixel Art",
    image: "image/js-pixel-art.png",
    description:
      "Aplicação interativa de Pixel Art desenvolvida com HTML, CSS e JavaScript, permitindo gerar dinamicamente uma grade personalizável, selecionar cores e pintar pixels individualmente. O projeto demonstra manipulação de DOM, eventos e controle de estado da interface.",
    techs: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/Rafael-Catarino/projeto-pixel-art",
    linkDemo: "https://rafael-catarino.github.io/projeto-pixel-art/",
  },
  {
    id: 6,
    title: "Conversor de Números",
    image: "image/js-conversor-de-numeros.png",
    description:
      "Aplicação de conversão numérica desenvolvida com JavaScript modular (ES6), permitindo transformar números decimais em romano, binário, octal e hexadecimal. O projeto demonstra organização em módulos, validação de entrada e implementação manual de algoritmos de conversão.",
    techs: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/Rafael-Catarino/conversor-de-numeros",
    linkDemo: "https://rafael-catarino.github.io/conversor-de-numeros/",
  },
  {
    id: 7,
    title: "Jokenpo",
    image: "image/js-jokenpo.png",
    description:
      "Implementação do jogo Jokenpô utilizando HTML, CSS e JavaScript, com lógica de comparação entre jogadas, geração aleatória da escolha do computador e controle de pontuação em tempo real. O projeto demonstra manipulação de DOM, eventos e gerenciamento de estado da aplicação.",
    techs: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/Rafael-Catarino/jokenpo",
    linkDemo: "https://rafael-catarino.github.io/jokenpo/",
  },
  {
    id: 8,
    title: "Cadastro de Alunos",
    image: "image/py-cadastro-de-alunos.png",
    description:
      "Aplicação desktop desenvolvida em Python utilizando Tkinter para interface gráfica e SQLite para persistência de dados. O sistema permite cadastrar, editar, remover e consultar alunos, aplicando conceitos de CRUD, manipulação de banco de dados e organização em camadas.",
    techs: ["Python"],
    linkGithub: "https://github.com/Rafael-Catarino/cadastro-de-aluno",
    linkDemo: null,
  },
];

const iconMap = {
  JavaScript: "fa-brands fa-square-js",
  HTML: "fa-brands fa-html5",
  CSS: "fa-brands fa-css3-alt",
  Python: "fa-brands fa-python",
};

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

projects.map((project) => {
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
    if (project.linkDemo) {
      project_botton_application.href = project.linkDemo;
      project_botton_application.style.display = "inline-block";
    } else {
      project_botton_application.href = "#";
      project_botton_application.style.display = "none";
    }
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
