const sideBarBtn = document.querySelector(".main__side-bar__icon");
let menuOpen = false;
sideBarBtn.addEventListener("click", () => {
  if (!menuOpen) {
    sideBarBtn.classList.add("open");
    menuOpen = true;
  } else {
    sideBarBtn.classList.remove("open");
    menuOpen = false;
  }
});
