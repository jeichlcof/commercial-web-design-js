let animContent;
let windowHeight;
let length;

function init() {
  animContent = document.getElementsByClassName("hidden");
  windowHeight = window.innerHeight;
  length = animContent.length;
  eventHandlers();
  console.log(animContent, animContent.length);
}

function eventHandlers() {
  window.addEventListener("scroll", _checkPosition);
  window.addEventListener("resize", init);
}

function _checkPosition() {
  for (let i = 0; i < length; i++) {
    let posFromTop = animContent[i].getBoundingClientRect().top;
    if (posFromTop - windowHeight <= 0) {
      animContent[i].classList.add("active");
      //animContent[i].className = animContent[i].className.replace(
      //  "hidden",
      //  "fade-in"
      //);
    }
  }
}
init();
