const container = document.querySelector(".main__main-content__container");
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");
const radio4 = document.querySelector("#radio4");
const autoBtn1 = document.querySelector(".auto-btn1");
const autoBtn2 = document.querySelector(".auto-btn2");
const autoBtn3 = document.querySelector(".auto-btn3");
const autoBtn4 = document.querySelector(".auto-btn4");
let counter = 2;

function movePic1() {
  container.style.transform = "translate(0)";
  autoBtn1.style.background = " rgba(0, 0, 0, 0.4)";
  autoBtn2.style.background = "white";
  autoBtn3.style.background = "white";
  autoBtn4.style.background = "white";
}

function movePic2() {
  container.style.transform = "translate(-25%)";
  autoBtn1.style.background = "white";
  autoBtn2.style.background = " rgba(0, 0, 0, 0.4)";
  autoBtn3.style.background = "white";
  autoBtn4.style.background = "white";
}

function movePic3() {
  container.style.transform = "translate(-50%)";
  autoBtn1.style.background = "white";
  autoBtn2.style.background = "white";
  autoBtn3.style.background = "rgba(0, 0, 0, 0.4)";
  autoBtn4.style.background = "white";
}

function movePic4() {
  container.style.transform = "translate(-75%)";
  autoBtn1.style.background = "white";
  autoBtn2.style.background = "white";
  autoBtn3.style.background = "white";
  autoBtn4.style.background = "rgba(0, 0, 0, 0.4";
}

radio1.addEventListener("click", movePic1);
radio2.addEventListener("click", movePic2);
radio3.addEventListener("click", movePic3);
radio4.addEventListener("click", movePic4);

setInterval(function () {
  if (counter === 1) {
    movePic1();
    counter++;
  } else if (counter === 2) {
    movePic2();
    counter++;
  } else if (counter === 3) {
    movePic3();
    counter++;
  } else {
    movePic4();
    counter++;
  }

  if (counter === 5) {
    counter = 1;
  }
}, 5000);

function init() {
  movePic1();
}

init();
