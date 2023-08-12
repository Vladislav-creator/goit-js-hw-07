const cars = [
  {
    id: 1,
    car: "Audi",
    type: "A6",
    price: 14000,
    img: "https://img.automoto.ua/Audi-A6-ne_ukazan-none-2015-fd0/thumb-wide/auto-57615194.webp",
  },
  {
    id: 2,
    car: "Honda",
    type: "Civic",
    price: 13500,
    img: "https://s1.1zoom.ru/big0/655/Honda_2016-18_Civic_Coupe_Blue_553417_1280x853.jpg",
  },
  {
    id: 3,
    car: "Honda",
    type: "Accord",
    price: 12000,
    img: "https://s1.1zoom.ru/big0/361/Honda_2018_Accord_Sport_Red_Metallic_553435_1280x853.jpg",
  },
  {
    id: 4,
    car: "Toyota",
    type: "Crown Sport",
    price: 12000,
    img: "https://s1.1zoom.ru/big0/122/Toyota_Crown_Sport_Prototype_2022_Red_Metallic_613352_1280x720.jpg",
  },
  {
    id: 5,
    car: "Honda",
    type: "Civic",
    price: 12000,
    img: "https://s1.1zoom.ru/big0/472/Honda_civic_type_r_Ana_Lopez_White_Legs_Pose_612996_1280x853.jpg",
  },
  {
    id: 6,
    car: "Toyota",
    type: "Sequoia",
    price: 22000,
    img: "https://s1.1zoom.ru/big0/658/Toyota_Toyota_Sequoia_Limited_2022_SUV_Red_611913_1280x853.jpg",
  },
  {
    id: 7,
    car: "Skoda",
    type: "Fabia",
    price: 12000,
    img: "https://s1.1zoom.ru/big0/893/Skoda_Fabia_Monte_Carlo_2022_Red_Metallic_612117_1280x853.jpg",
  },
  {
    id: 8,
    car: "Skoda",
    type: "Superb",
    price: 14000,
    img: "https://s1.1zoom.ru/big0/694/Skoda_Superb_Worldwide)_2002-2006_Blue_Metallic_608306_1280x853.jpg",
  },
  {
    id: 9,
    car: "Toyota",
    type: "Yaris",
    price: 28000,
    img: "https://s1.1zoom.ru/big0/834/Toyota_Yaris_Cross_Hybrid_GR_Sport_(JP-spec)_2022_612383_1280x853.jpg",
  },
  {
    id: 10,
    car: "BMW",
    type: "M2",
    price: 28000,
    img: "https://s1.1zoom.ru/big0/87/BMW_M2_M_Performance_Parts_(G87)_2023_Coupe_Red_616216_1280x853.jpg",
  },
  {
    id: 11,
    car: "Ferrari",
    type: "Mansory Monza",
    price: 28000,
    img: "https://s1.1zoom.ru/big0/439/Ferrari_Tuning_Mansory_Monza_SP2_Red_Metallic_612330_1280x853.jpg",
  },
  {
    id: 12,
    car: "Opel",
    type: "Grandland",
    price: 28000,
    img: "https://s1.1zoom.ru/big0/858/Opel_Grandland_Hybrid4_(Worldwide)_2021_Blue_607691_1280x853.jpg",
  },
  {
    id: 13,
    car: "BMW",
    type: "X3",
    price: 28000,
    img: "https://s1.1zoom.ru/prev2/608/BMW_2021_X3_M_Competition_Worldwide_Crossover_Blue_607682_300x199.jpg",
  },
  {
    id: 14,
    car: "Toyota",
    type: "Sequoia",
    price: 28000,
    img: "https://s1.1zoom.ru/big0/722/Toyota_Sequoia_SR5_TRD_Sport_Package_2022_SUV_Grey_611931_1280x853.jpg",
  },
  {
    id: 15,
    car: "Toyota",
    type: "Supra",
    price: 34000,
    img: "https://s1.1zoom.ru/big0/188/Toyota_GR_Supra_GT4_EVO_(A90)_2023_Red_Metallic_613477_1280x853.jpg",
  },
];
const formEl = document.querySelector(".js-form");
const ul = document.querySelector(".js-list");
function render(arr) {
  const cards = arr
    .map(
      (item) => `<li class = 'car-card'>
        <img width = '300' height = '180'class='car-image' src=${
          item.img
        } alt= ${item.car + "*" + item.type} />
        <div>
        <h2 style='font-size: 20px; font-weight: bold'>${item.car}</h2>
        <h3 style='font-size: 20px'>${item.type}</h3>
        <span style='font-size: 20px'>${item.price}$</span>
        </div>
        </li>`
    )
    .join("");
  ul.style.listStyle = "none";
  ul.innerHTML = cards;
}
render(cars);

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(event);
  const form = event.currentTarget;
  const { query, options } = form.elements;

  const filteredList = query.value
    ? cars.filter((item) =>
        options.selectedIndex === 0
          ? item.car.toLowerCase() === query.value.trim().toLowerCase()
          : item.type.toLowerCase() === query.value.trim().toLowerCase()
      )
    : cars;
  render(filteredList);
};
formEl.addEventListener("submit", handleSubmit);

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(event);
//   const form = event.currentTarget;
//   const { query, options } = form.elements;
//   const filteredList = cars.filter((item) => {
//     console.log(item.car);
//     return options.selectedIndex === 0
//       ? item.car.toLowerCase().includes(query.value.trim().toLowerCase())
//       : item.type.toLowerCase().includes(query.value.trim().toLowerCase());
//   });
//   render(filteredList);
// };
// formEl.addEventListener("submit", handleSubmit);
