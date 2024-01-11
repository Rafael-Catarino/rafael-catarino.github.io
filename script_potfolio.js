const portfolio_projects = document.querySelectorAll(
  ".portfolio__projects__div"
);
const iframe = document.querySelectorAll("iframe");
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
    iframe[i].setAttribute("src", iframe[i].getAttribute("src"));
  });
}
