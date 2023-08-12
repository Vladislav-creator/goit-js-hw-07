//1 option
// document.getElementById("validation-input").onblur = function () {
//   console.log(this.value.length);
//   if (Number(this.getAttribute("data-length")) !== this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };

//The second option
const nameInput = document.querySelector("#validation-input");
const errorInput = document.querySelector(".error");
nameInput.onblur = function () {
  if (
    nameInput.value.length === Number(nameInput.getAttribute("data-length"))
  ) {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
    errorInput.textContent = "";
  } else if (nameInput.value.length >= 1) {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    errorInput.textContent = "Ошибка! Введите 6 символов!";
  }
};
//3 option
// const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute("data-length"));
// textInput.addEventListener("blur", (event) => {
//   if (event.target.value.length == textInput.getAttribute("data-length")) {
//     textInput.classList.add("valid");
//     if (textInput.classList.contains("invalid")) {
//       textInput.classList.remove("invalid");
//     }
//   } else {
//     if (textInput.classList.contains("valid")) {
//       textInput.classList.remove("valid");
//     }
//     textInput.classList.add("invalid");
//   }
// });
