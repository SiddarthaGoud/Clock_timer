function getHourFromSeconds(seconds) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const clearBtn = document.querySelector(".clear-btn");
const timerEl = document.querySelector(".timer");

let segundos = 0;
let timer;

function startTimer() {
  startBtn.classList.add("active");
  pauseBtn.classList.remove("active");

  timer = setInterval(function () {
    segundos++;
    timerEl.innerHTML = getHourFromSeconds(segundos);
  }, 1000);
}

startBtn.addEventListener("click", function (event) {
  timerEl.classList.remove("paused");

  clearInterval(timer);
  startTimer();
});

pauseBtn.addEventListener("click", function (event) {
  pauseBtn.classList.add("active");
  startBtn.classList.remove("active");

  timerEl.classList.add("paused");

  clearInterval(timer);
});

clearBtn.addEventListener("click", function (event) {
  startBtn.classList.remove("active");
  pauseBtn.classList.remove("active");

  timerEl.classList.remove("paused");

  clearInterval(timer);
  timerEl.innerHTML = "00:00:00";
  segundos = 0;
});
