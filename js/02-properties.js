// const imgEl = document.querySelector("img");
// const imgRef = imgEl.src;

// console.log(imgEl, imgRef);

// const magicBtn = document.querySelector(".js-magic-btn");

// magicBtn.addEventListener("click", () => {
//   imgEl.classList.toggle("wow");
//   console.log(imgEl);
// });

// imgEl.classList.add("huynya");
// imgEl.classList.add("huy");
// imgEl.classList.remove("huy");
// console.log(imgEl.classList.contains("huynya"));

// document.querySelector(".js-create").addEventListener("click", () => {
//   imgEl.classList.replace("huynya", "huy");
//   console.log(imgEl);
// });

// const titleEl = document.createElement("h1");
// titleEl.textContent = "new tag";
// titleEl.classList.add("page-title");
// document.body.append(titleEl);

// console.log(titleEl);

// const navLinkEl = document.createElement("a");
// const navItemEl = document.createElement("li");

// navLinkEl.href = "../html/index.html";
// navLinkEl.textContent = "to main page";
// navLinkEl.classList.add("dobavka");

// navItemEl.classList.add("dobavka");

// navItemEl.appendChild(navLinkEl);

// document
//   .querySelector(".navigation")
//   .insertBefore(
//     navItemEl,
//     document.querySelector(".navigation").firstElementChild
//   );

// const createdEl = document.createElement("article");
// createdEl.classList.add("product");

// const cretedTitleEl = document.createElement("h2");
// cretedTitleEl.classList.add("product__name");
// cretedTitleEl.textContent = "name";

// const createdDiscEl = document.createElement("p");
// createdDiscEl.classList.add("product__description");
// createdDiscEl.textContent = "description";

// const createdpriceEl = document.createElement("p");
// createdpriceEl.classList.add("product__price");
// createdpriceEl.textContent = "price: ";

// createdEl.append(cretedTitleEl, createdDiscEl, createdpriceEl);

// document.body.appendChild(createdEl);

const clickerBtn = document.querySelector(".clicker");
const addEventBtn = document.querySelector(".js-add-event");
const removeEventBtn = document.querySelector(".js-remove-event");

const messegeLogger = () => {
  console.log("huynya");
};

removeEventBtn.addEventListener("click", () => {
  console.log("blyaaaaa");
  clickerBtn.removeEventListener("click", messegeLogger);
});

const modalWindowOpenBtn = document.querySelector('[data-action="open-modal"]');
const modalWindowCloseBtn = document.querySelector(
  '[data-action="close-modal"]'
);
const modalWindowEl = document.querySelector(".js-backdrop");

modalWindowOpenBtn.addEventListener("click", () => {
  modalWindowEl.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove("show-modal");
    }
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.body.classList.remove("show-modal");
    }
  });
  document.body.classList.add("show-modal");
});

modalWindowCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-modal")
);

// const onClick = (e) => {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const currentActiveBtn = document.querySelector(".color");

//   if (currentActiveBtn === e.target) {
//     e.target.classList.remove("color");
//   } else {
//     currentActiveBtn?.classList.remove("color");
//     e.target.classList.add("color");
//   }
// }; onClick that is able to choose one or zero classes

const selectedBtns = new Set();

const onClick = (e) => {
  console.log(e.target.classList.contains("container"));
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  e.target.classList.toggle("color");
  if (selectedBtns.has(e.target.dataset.value)) {
    selectedBtns.delete(e.target.dataset.value);
  } else {
    selectedBtns.add(e.target.dataset.value);
  }
  // console.log(selectedBtns);
};

const container = document.querySelector(".js-container");

// let counter = 0;

// const onMousemove = (e) => {
//   counter += 1;
//   console.log(counter, e.screenY, e.screenX);
// };

container.addEventListener("click", onClick);

// window.addEventListener("mousemove", _.throttle(onMousemove, 300));
// window.addEventListener("mousemove", onMousemove);

const items = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JAVASCRIPT" },
  { label: "REACT" },
  { label: "GRPAHQL" },
];

const createListItemMarkup = (items) =>
  items.map((item) => `<li>${item.label}</li>`).join(``);

const onKeyPress = function (e) {
  const savedMsg = e.target.value.toLowerCase();

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(savedMsg)
  );

  document.querySelector(".js-list").innerHTML = filteredItems
    .map((item) => `<li>${item.label}</li>`)
    .join(``);

  console.log(filteredItems);
};

const listItemsMarkup = createListItemMarkup(items);

console.log(listItemsMarkup);

document.querySelector(".js-list").innerHTML = listItemsMarkup;

document
  .querySelector(".js-input")
  .addEventListener("keydown", _.debounce(onKeyPress, 500));

const checker = 0;
