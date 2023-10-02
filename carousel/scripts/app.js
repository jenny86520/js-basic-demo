const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".slide-track");
const slides = carousel.querySelectorAll(".slide");

const prevBtn = carousel.querySelector(".prev-btn");
const nextBtn = carousel.querySelector(".next-btn");

const navigator = carousel.querySelector(".navigator");
const indicators = navigator.querySelectorAll(".indicator");

let currentIndex = 0;

function setupSlides() {
  const w = track.clientWidth;
  slides.forEach((slide, i) => {
    slide.style.left = `${i * w}px`;
  });
  updateNavigatorBtn(currentIndex);
}

function moveSlide(index) {
  const w = track.clientWidth;
  track.style.transform = `translateX(${w * index * -1}px)`;
  updateNavigatorBtn(index);
  updateIndicatorBtn(index);
}

function updateNavigatorBtn(index) {
  if (index === 0) {
    prevBtn.classList.add("hiden");
    nextBtn.classList.remove("hiden");
  } else if (index === slides.length - 1) {
    prevBtn.classList.remove("hiden");
    nextBtn.classList.add("hiden");
  } else {
    prevBtn.classList.remove("hiden");
    nextBtn.classList.remove("hiden");
  }
}

function updateIndicatorBtn(index) {
  indicators.forEach((dot) => {
    if (+dot.dataset.index === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    moveSlide(currentIndex);
  }
});
nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    moveSlide(currentIndex);
  }
});
navigator.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const dot = e.target;
    moveSlide(+dot.dataset.index);
  }
});

setupSlides();
