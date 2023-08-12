const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
  console.log(span.style.fontSize);
}
//2 option
// const input = document.querySelector("#font-size-control");
// const span = document.querySelector("#text");
// input.addEventListener("input", handleInputRange);
// function handleInputRange() {
//   span.style.fontSize = input.value + "px";
//   console.log(span.style.fontSize);
// }
