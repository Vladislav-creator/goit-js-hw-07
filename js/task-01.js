// const a = document.querySelectorAll(".item");
// const b = document.querySelectorAll(".item").length;
// console.log(`Number of categories: ${b}`);
// a.forEach((element) => {
//   console.log(`Category: ${element.querySelector("h2").textContent}`);
//   console.log(`Elements: ${element.querySelectorAll("li").length}`);
// });

//2 option
const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
[...list.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
const divSquare = document.createElement("div");
const pSquare = document.createElement("p");
divSquare.className = "square";
pSquare.textContent = "square";
divSquare.append(pSquare);
divSquare.style.backgroundColor = "red";
divSquare.style.width = "100px";
divSquare.style.height = "100px";
divSquare.style.display = "flex";
pSquare.style.margin = "auto";
list.after(divSquare);
const btnForSquare = document.createElement("button");
const btnForSquare1 = document.createElement("button");
btnForSquare.textContent = "put me";
btnForSquare1.textContent = "put me1";
list.after(btnForSquare);
list.after(btnForSquare1);
btnForSquare.style.marginBottom = "10px";
let step = 0;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const goSquare = () => {
  step += 50;
  divSquare.style.marginLeft = `${step}px`;
  divSquare.style.backgroundColor = getRandomHexColor();
  console.log(step);
};
const goSquare1 = () => {
  step -= 50;
  divSquare.style.marginLeft = `${step}px`;
  divSquare.style.backgroundColor = getRandomHexColor();
  console.log(step);
};
btnForSquare.addEventListener("click", goSquare);
btnForSquare1.addEventListener("click", goSquare1);
//3 option
// const categoriesList = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesList.length}`);

// categoriesList.forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });
