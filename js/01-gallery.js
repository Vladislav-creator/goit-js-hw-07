import { galleryItems } from "./gallery-items.js";
const container = document.querySelector(".gallery");

const markup = (arr) =>
  arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
    )
    .join("");

container.insertAdjacentHTML("beforeend", markup(galleryItems));

container.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const currentItem = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
  <img src="${currentItem}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();
  function onEscKeyPress(e) {
    if (e.code !== "Escape") return;
    instance.close();
  }
}

// container.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   const selectedImage = e.target.getAttribute("data-source");
//   const instance = basicLightbox.create(`
//   <img src="${selectedImage}" width="800" height="600">
// `);
//   instance.show();
//   container.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   });
// });
