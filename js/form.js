
const btnClose = document.querySelector(".form__close");
const btnKontakt = document.querySelector("#kontakt a");
const formActiv = document.querySelector(".form");
const form = document.querySelector(".form__container");
const inputs = [...form.querySelectorAll("input")];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let arrayValue = [];
  for (let i = 0; i < inputs.length; i++) {
    arrayValue[i] = inputs[i].value;
  }

  const elementForm = (element) => element == "";
  if (arrayValue.some(elementForm)) {
    document.querySelector(".form__info").classList.add("form__alert");
  } else {
    let form1 = e.target;
    let formFields = new FormData(form1);
    const data = {};
    formFields.forEach((value, key) => (data[key] = value));
    console.log(data);

    formActiv.classList.remove("form-active");
  }
});

btnKontakt.addEventListener("click", function () {
  formActiv.classList.add("form-active");
});
btnClose.addEventListener("click", () => {
  formActiv.classList.remove("form-active");
});