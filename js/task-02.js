const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const elementsToAdd = [];
ingredients.forEach((el) => {
  const liEl = document.createElement("li");
  liEl.className = "item";
  liEl.textContent = el;
  elementsToAdd.push(liEl);
});
listEl.append(...elementsToAdd);
console.log(elementsToAdd);

//2option
// const listEl = document.querySelector("#ingredients");
// const listElstr = ingredients
//   .map((liElvalue) => `<li class="item">${liElvalue}</li>`)
//   .join("");
// listEl.innerHTML = listElstr;

//3option
// const listEl = document.querySelector("#ingredients");
// ingredients.forEach((el) => {
//   const liEl = document.createElement("li");
//   liEl.className = "item";
//   liEl.textContent = el;
//   listEl.append(liEl);
// });
// console.log(listEl);
const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { login, password },
  } = event.currentTarget;

  if (login.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
