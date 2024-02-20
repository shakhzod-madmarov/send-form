const mainBtn = document.querySelector("#mainBtn");

const modal = document.querySelector("#modal");
const btnClose = document.querySelector("#btnClose");
const btnSubmit = document.querySelector("#btnSubmit");

const closeModal = () => {
  modal.classList.remove("modal--active");
};

mainBtn.addEventListener("click", () => {
  modal.classList.add("modal--active");
  console.log("Modal clicked");
});

btnClose.addEventListener("click", () => {
  closeModal();
});

btnSubmit.addEventListener("click", () => {
  closeModal();
});
