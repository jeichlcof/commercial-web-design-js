const visibleMenu = document.querySelector("#visible-menu");
const visibleBtn = document.querySelector(".main__side-bar__icon");
let visibleCount = 1;
function visible() {
  if (visibleCount === 1) {
    visibleMenu.style.visibility = "visible";
    visibleMenu.style.opacity = "1";
    visibleCount = 0;
  } else {
    visibleMenu.style.visibility = "hidden";
    visibleMenu.style.opacity = "0";
    visibleCount = 1;
  }
}

visibleBtn.addEventListener("click", visible);
