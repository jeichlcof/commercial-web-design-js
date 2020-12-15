const btn1 = document.querySelector(".main__main-slides__btn1");
const btn2 = document.querySelector(".main__main-slides__btn2");
const btn3 = document.querySelector(".main__main-slides__btn3");
const container = document.querySelector(".main__main-content__container");

const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const radio4 = document.querySelector("#radio4");

radio1.addEventListener("click", () => {
  container.style.transform = "translate(0)";
});
radio2.addEventListener("click", () => {
  container.style.transform = "translate(-25%)";
});
radio3.addEventListener("click", () => {
  container.style.transform = "translate(-50%)";
});
radio4.addEventListener("click", () => {
  container.style.transform = "translate(-75%)";
});
