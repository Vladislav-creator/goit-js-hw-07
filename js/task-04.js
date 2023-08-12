const btnIncrEl = document.querySelector('[data-action="increment"]');
const btnDecrEl = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

btnDecrEl.addEventListener("click", minusClick);
function minusClick() {
  counterValue -= 10;
  if (counterValue === 0) {
    divSquare.style.backgroundColor = "blue";
  } else {
    divSquare.style.backgroundColor = "green";
  }
  divSquare.style.marginLeft = `${counterValue}px`;
  document.querySelector("#value").textContent = counterValue;
  console.log(counterValue);
}
btnIncrEl.addEventListener("click", plusClick);
function plusClick() {
  counterValue += 10;
  if (counterValue === 0) {
    divSquare.style.backgroundColor = "blue";
  } else {
    divSquare.style.backgroundColor = "red";
  }
  divSquare.style.marginLeft = `${counterValue}px`;
  document.querySelector("#value").textContent = counterValue;
  console.log(counterValue);
}
const divSquare = document.createElement("div");
const pSquare = document.createElement("p");
divSquare.className = "square";
pSquare.textContent = "square";
divSquare.append(pSquare);
divSquare.style.backgroundColor = "blue";
divSquare.style.width = "100px";
divSquare.style.height = "100px";
divSquare.style.display = "flex";
pSquare.style.margin = "auto";
btnIncrEl.after(divSquare);

//2 вариант
// btnDecrEl.addEventListener("click", () => {
//   counterValue -= 1;
//   document.querySelector("#value").textContent = counterValue;
//   console.log(counterValue);
// });
// btnIncrEl.addEventListener("click", () => {
//   counterValue += 1;
//   document.querySelector("#value").textContent = counterValue;
//   console.log(counterValue);
// });

//3 вариант: переменная counterValue.value через callbacks для многократного использования
// const btnIncrEl = document.querySelector('[data-action="increment"]');
// const btnDecrEl = document.querySelector('[data-action="decrement"]');
// const counterValueEl = document.querySelector("#value");
// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };
// btnIncrEl.addEventListener("click", () => {
//   counterValue.increment();
//   changeValue();
// });
// btnDecrEl.addEventListener("click", () => {
//   counterValue.decrement();
//   changeValue();
// });
// function changeValue() {
//   counterValueEl.textContent = counterValue.value;
//   console.log(counterValue.value);
// }
