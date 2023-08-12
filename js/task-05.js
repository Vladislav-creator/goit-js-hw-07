const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", onInput);
function onInput(evt) {
  console.log(evt.currentTarget.value);
  if (!(evt.currentTarget.value.trim() === "")) {
    document.querySelector("#name-output").textContent =
      evt.currentTarget.value;
  } else {
    document.querySelector("#name-output").textContent = "Anonymous";
  }
}
