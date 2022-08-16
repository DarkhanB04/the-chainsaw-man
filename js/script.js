function playAudio() {
  var audio = new Audio("audio/song.mp3");
  audio.play();
}
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const releaseTime = new Date("2022-10-22T00:00:00");
function updateTime() {
  const currentTime = new Date();

  const diff = releaseTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(updateTime, 1000);
