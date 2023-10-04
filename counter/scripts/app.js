const timer = document.querySelector(".timer");

const DEFAULT_SECONDS = 120;
let couterSec = DEFAULT_SECONDS;
let timerId;
let running = false;
let pause = false;

function updateTimer(sec) {
  let mins = String(Math.floor(sec / 60)).padStart(2, "0");
  let secs = String(sec % 60).padStart(2, "0");

  timer.textContent = `${mins}:${secs}`;

  if (sec === 0) {
    timer.classList.add("times-up");
  } else {
    timer.classList.remove("times-up");
  }
}

function initTimer() {
  running = true;
  timerId = setInterval(() => {
    if (couterSec === 1) {
      timesUp();
    } else {
      couterSec--;
      updateTimer(couterSec);
    }
  }, 1000);
}

function timesUp() {
  running = false;
  const sound = new Audio("sounds/news.mp3");
  sound.play();

  updateTimer(0);
  clearInterval(timerId);
}

document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Enter":
      if (!running) {
        couterSec = DEFAULT_SECONDS;
        updateTimer(couterSec);
        initTimer();
      }
      break;
    case " ":
      if (running) {
        if (pause) {
          initTimer();
          pause = false;
        } else {
          clearInterval(timerId);
          pause = true;
        }
      }
      break;
    case "Escape":
      running = false;
      couterSec = DEFAULT_SECONDS;
      updateTimer(couterSec);
      clearInterval(timerId);
      break;
  }
});
