const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(".gallery");
console.log(list);
const markup = images
  .map(
    (image) =>
      `<li class="list-item"><img src="${image.url}" alt="${image.alt}" width = '300px' height = '200px'></li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);
const menuItemsByTagName = document.querySelector("ul");
menuItemsByTagName.style.listStyle = "none";
menuItemsByTagName.style.display = "flex";
menuItemsByTagName.style.gap = "50px";
menuItemsByTagName.style.justifyContent = "space-evenly";

const btn = document.querySelector(".btn");
const square = document.querySelector(".square");
const bodyWidth = document.body.clientWidth - 50;
let currentPosition = 0;
let movingRight = true;
btn.addEventListener("click", () => {
  if (movingRight) {
    currentPosition += 50;
    btn.textContent = "Right";
    if (currentPosition >= bodyWidth) {
      currentPosition = bodyWidth;
      movingRight = false;
    }
  } else {
    btn.textContent = "Left";
    currentPosition -= 50;
    if (currentPosition <= 0) {
      currentPosition = 0;
      movingRight = true;
    }
  }
  square.style.left = currentPosition + "px";
});
