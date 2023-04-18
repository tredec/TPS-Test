const tapbox = document.querySelector(".tapbox");
const time_element = document.querySelector(".time");
const taps_element = document.querySelector(".taps");
const tps_element = document.querySelector(".tps");

const TIME = 10;

let startTime = 0;
let timeLeft = TIME;
let taps = 0;

tapbox.addEventListener("pointerdown", () => {
  if (taps === 0) {
    startTime = performance.now();
    loop();
  }
  taps++;
});

function loop() {
  timeLeft = Math.max(TIME - (performance.now() - startTime) / 1000, 0);

  time_element.innerText = "Time: " + timeLeft.toFixed(3);
  taps_element.innerText = "Taps: " + taps;
  tps_element.innerText = "TPS: " + (taps / (TIME - timeLeft)).toFixed(3);

  if (timeLeft > 0) setTimeout(loop, 33);
}
