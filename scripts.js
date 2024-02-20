const mainBtn = document.querySelector("#mainBtn");

const modal = document.querySelector("#modal");
const btnClose = document.querySelector("#btnClose");
const btnSubmit = document.querySelector("#btnSubmit");

let emailInput = document.querySelector("#email");
let phoneNumberInput = document.querySelector("#phoneNumber");

const clearInput = () => {
  emailInput.value = "";
  phoneNumberInput.value = "";
};

const openModal = () => {
  modal.classList.add("modal--active");
  clearInput();
};

const closeModal = () => {
  modal.classList.remove("modal--active");
};

mainBtn.addEventListener("click", () => {
  openModal();
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13 && !modal.classList.contains("modal--active")) {
    openModal();
  }
});

btnClose.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("modal--active")) {
    closeModal();
  }
});

btnSubmit.addEventListener("click", () => {
  closeModal();
});
